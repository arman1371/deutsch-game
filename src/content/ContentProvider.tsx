import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { buildIndex, type ContentIndex } from './index';
import { LEVELS } from './levels';
import type { LevelContent, LevelMeta } from './schema';

type State =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'ready'; index: ContentIndex };

const ContentContext = createContext<State>({ status: 'loading' });

interface Props {
  children: ReactNode;
  /** Inject content directly (tests, storybook). */
  content?: readonly LevelContent[];
  levels?: readonly LevelMeta[];
}

export function ContentProvider({ children, content, levels = LEVELS }: Props) {
  const [state, setState] = useState<State>(() =>
    content ? { status: 'ready', index: buildIndex(content) } : { status: 'loading' },
  );

  useEffect(() => {
    if (content) return;
    let cancelled = false;
    Promise.all(levels.filter((l) => l.status === 'available' && l.load).map((l) => l.load!()))
      .then((mods) => {
        if (!cancelled)
          setState({ status: 'ready', index: buildIndex(mods.map((m) => m.default)) });
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setState({
            status: 'error',
            message: e instanceof Error ? e.message : 'Failed to load content',
          });
      });
    return () => {
      cancelled = true;
    };
  }, [content, levels]);

  return <ContentContext.Provider value={state}>{children}</ContentContext.Provider>;
}

export function useContentState(): State {
  return useContext(ContentContext);
}

/** Only call below a `ContentGate` – throws while content is still loading. */
export function useContent(): ContentIndex {
  const state = useContext(ContentContext);
  if (state.status !== 'ready') throw new Error('useContent used before content was ready');
  return state.index;
}

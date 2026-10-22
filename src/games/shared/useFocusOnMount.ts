import { useEffect, useRef } from 'react';

/**
 * Moves keyboard focus to the element right after mount (e.g. the Continue button after feedback).
 * The tiny delay keeps the Enter keypress that submitted an answer from also "pressing" Continue.
 */
export function useFocusOnMount<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const id = setTimeout(() => ref.current?.focus(), 0);
    return () => clearTimeout(id);
  }, []);
  return ref;
}

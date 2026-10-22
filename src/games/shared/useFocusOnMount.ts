import { useEffect, useRef } from 'react';

/** Moves keyboard focus to the element on mount (e.g. the Continue button after feedback). */
export function useFocusOnMount<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);
  return ref;
}

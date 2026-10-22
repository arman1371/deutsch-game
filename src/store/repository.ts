import type { StateStorage } from 'zustand/middleware';

/**
 * Storage seam for learner data. Today everything lives in the browser (localStorage).
 * To sync across devices later, implement this interface against an API (e.g. Cloudflare D1 via a
 * Pages Function) and pass it to `createJSONStorage` in the stores – nothing else has to change.
 */
export type ProgressRepository = StateStorage;

/** localStorage that never throws (private mode, blocked storage, quota). */
export const localRepository: ProgressRepository = {
  getItem: (name) => {
    try {
      return localStorage.getItem(name);
    } catch {
      return null;
    }
  },
  setItem: (name, value) => {
    try {
      localStorage.setItem(name, value);
    } catch {
      /* ignore – progress just won't persist */
    }
  },
  removeItem: (name) => {
    try {
      localStorage.removeItem(name);
    } catch {
      /* ignore */
    }
  },
};

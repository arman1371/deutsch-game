import { GAME_TYPES } from '@/content/gameTypes';
import { GAME_TYPE_LABELS } from '@/lib/filters';
import { GAME_HELP, gameComponents } from './registry';

describe('game registry', () => {
  it('has an engine, help text and label for every game type', () => {
    for (const type of GAME_TYPES) {
      expect(gameComponents[type], type).toBeDefined();
      expect(GAME_HELP[type], type).toMatch(/\w+/);
      expect(GAME_TYPE_LABELS[type].label, type).toMatch(/\w+/);
    }
  });
});

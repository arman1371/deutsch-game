/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect, test, type Page } from '@playwright/test';
import { activity, captureSpeech, SEED } from './helpers';

/** Record the start frequency of every Web Audio oscillator the app plays. */
async function captureSfx(page: Page) {
  await page.addInitScript(() => {
    const w = window as any;
    w.__tones = [];
    const start = OscillatorNode.prototype.start;
    OscillatorNode.prototype.start = function (this: OscillatorNode, ...args: any[]) {
      w.__tones.push(this.frequency.value);
      return start.apply(this, args as [number?]);
    };
  });
}

const tones = (page: Page) => page.evaluate(() => [...((window as any).__tones as number[])]);

const quiz = activity('a1-1-hallo-time-of-day');
if (quiz.gameType !== 'quiz') throw new Error('expected a quiz');

async function answerFirst(page: Page, correct: boolean) {
  await page.goto(`/play/${quiz.id}?seed=${SEED}`);
  await page.getByTestId('start').click();
  const prompt = (await page.getByTestId('prompt').innerText()).trim();
  const q = (quiz.config as any).questions.find((x: any) => x.prompt === prompt);
  const choice = correct ? q.answer : q.options.find((o: string) => o !== q.answer);
  await page.getByRole('button', { name: choice, exact: true }).click();
  await expect(page.getByTestId('feedback')).toHaveAttribute(
    'data-kind',
    correct ? 'correct' : 'wrong',
  );
}

test.beforeEach(async ({ page }) => {
  await captureSpeech(page);
  await captureSfx(page);
});

test('a correct answer plays a short rising cue', async ({ page }) => {
  await answerFirst(page, true);
  await expect.poll(() => tones(page)).toEqual([660, 990]);
});

test('a wrong answer plays a short low cue', async ({ page }) => {
  await answerFirst(page, false);
  await expect.poll(() => tones(page)).toEqual([220]);
});

test('sound effects can be switched off in settings', async ({ page }) => {
  await page.goto('/settings');
  await page.getByLabel('Sound effects').uncheck();
  await page.reload();
  await expect(page.getByLabel('Sound effects')).not.toBeChecked();
  await answerFirst(page, true);
  expect(await tones(page)).toEqual([]);
});

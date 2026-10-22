import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider } from 'react-router/dom';
import { Suspense } from 'react';
import { createTestRouter } from '@/app/router';
import content from '@/content/a1-1';
import type { Activity } from '@/content/schema';
import { DEFAULT_SETTINGS, useSettingsStore } from '@/store/settingsStore';
import { useProgressStore } from '@/store/progressStore';

export function resetStores() {
  useProgressStore.getState().reset();
  useSettingsStore.setState({ ...DEFAULT_SETTINGS });
}

/** Render the whole app at a URL with the real A1.1 content. */
export function renderApp(path = '/') {
  const router = createTestRouter([path]);
  const user = userEvent.setup();
  render(
    <Suspense fallback={<p>suspense</p>}>
      <RouterProvider router={router} />
    </Suspense>,
  );
  return { router, user };
}

export const activityById = (id: string): Activity => {
  const a = content.activities.find((x) => x.id === id);
  if (!a) throw new Error(`No activity ${id}`);
  return a;
};

/** Answer every question of a quiz activity (correctly or all wrong) by reading the prompt from the screen. */
export async function playQuiz(user: ReturnType<typeof userEvent.setup>, activity: Activity, { correct = true } = {}) {
  if (activity.gameType !== 'quiz') throw new Error('playQuiz needs a quiz');
  const total = activity.config.questions.length;
  for (let i = 0; i < total; i++) {
    const prompt = (await screen.findByTestId('prompt')).textContent;
    const q = activity.config.questions.find((x) => x.prompt === prompt)!;
    const label = correct ? q.answer : q.options.find((o) => o !== q.answer)!;
    await user.click(await screen.findByRole('button', { name: label }));
    await user.click(await screen.findByTestId('continue'));
  }
}

import { screen, waitFor, within } from '@testing-library/react';
import content from '@/content/a1-1';
import { useProgressStore } from '@/store/progressStore';
import { useSettingsStore } from '@/store/settingsStore';
import { activityById, playQuiz, renderApp, resetStores } from '@/test/app';

beforeEach(resetStores);

describe('Home', () => {
  it('invites a new learner to start and lists the levels', async () => {
    renderApp('/');
    expect(await screen.findByRole('heading', { name: 'Start your first game' })).toBeInTheDocument();
    expect(screen.getByTestId('continue-cta')).toHaveTextContent('Start');
    expect(screen.getByTestId('level-a1-1')).toHaveTextContent('0 / ' + content.activities.length + ' games');
    for (const soon of ['A1.2', 'A2.1', 'A2.2']) {
      expect(screen.getByRole('heading', { name: soon }).closest('li')).toHaveTextContent('Coming soon');
    }
    expect(screen.getByTestId('streak')).toHaveTextContent('0');
  });

  it('continues at the next unplayed activity', async () => {
    useProgressStore.getState().recordResult(content.activities[0]!.id, { correct: 3, total: 3, played: [], mistakes: [] });
    renderApp('/');
    expect(await screen.findByRole('heading', { name: 'Continue where you left off' })).toBeInTheDocument();
    expect(screen.getByText(content.activities[1]!.title)).toBeInTheDocument();
    expect(screen.getByTestId('continue-cta')).toHaveTextContent('Continue');
  });
});

describe('Level and unit pages', () => {
  it('walks Home → level → unit and shows the guided path', async () => {
    const { user } = renderApp('/');
    await user.click(await screen.findByTestId('level-a1-1'));
    const units = await screen.findByRole('list', { name: 'Units' });
    expect(within(units).getAllByTestId(/^unit-/)).toHaveLength(content.units.length);
    await user.click(screen.getByTestId('unit-a1-1-hallo'));
    const path = await screen.findByRole('list', { name: 'Guided path' });
    expect(screen.getByRole('heading', { level: 1, name: 'Hallo & Tschüss' })).toBeInTheDocument();
    const steps = within(path).getAllByRole('listitem');
    expect(steps[0]).toHaveAttribute('data-state', 'current');
    expect(steps[1]).toHaveAttribute('data-state', 'open');
    expect(within(steps[0]!).getByText('Up next')).toBeInTheDocument();
  });

  it('marks finished steps as done and moves the "up next" marker', async () => {
    const first = content.activities.find((a) => a.unitId === 'a1-1-hallo')!;
    useProgressStore.getState().recordResult(first.id, { correct: 1, total: 1, played: [], mistakes: [] });
    renderApp('/levels/a1-1/units/a1-1-hallo');
    const path = await screen.findByRole('list', { name: 'Guided path' });
    const steps = within(path).getAllByRole('listitem');
    expect(steps[0]).toHaveAttribute('data-state', 'done');
    expect(steps[1]).toHaveAttribute('data-state', 'current');
  });

  it('switches to the explore grid and back', async () => {
    const { user } = renderApp('/levels/a1-1/units/a1-1-wer');
    await screen.findByRole('list', { name: 'Guided path' });
    await user.click(screen.getByRole('tab', { name: /All games/ }));
    expect(screen.getByRole('list', { name: 'All games' })).toBeInTheDocument();
    expect(screen.queryByRole('list', { name: 'Guided path' })).not.toBeInTheDocument();
    await user.click(screen.getByRole('tab', { name: /Step by step/ }));
    expect(screen.getByRole('list', { name: 'Guided path' })).toBeInTheDocument();
  });

  it('shows not-found for unknown levels and units', async () => {
    renderApp('/levels/zz');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('shows not-found for unknown units and for coming-soon levels', async () => {
    renderApp('/levels/a1-1/units/nope');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('shows not-found for coming-soon levels', async () => {
    renderApp('/levels/a1-2');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });
});

describe('Library', () => {
  it('lists every game and filters by game type, topic and unit', async () => {
    const { user } = renderApp('/library');
    const total = content.activities.length;
    await waitFor(() => expect(screen.getByTestId('result-count')).toHaveTextContent(`${total} games`));

    await user.click(screen.getByText(/Filters/));
    await user.click(screen.getByRole('button', { name: /Market stand/ }));
    const market = content.activities.filter((a) => a.gameType === 'market').length;
    expect(screen.getByTestId('result-count')).toHaveTextContent(`${market} games`);
    expect(screen.getAllByTestId('activity-card')).toHaveLength(market);

    await user.click(screen.getByRole('button', { name: 'Clear filters' }));
    await user.click(screen.getByRole('button', { name: /Accusative/ }));
    const acc = content.activities.filter((a) => a.tags.includes('accusative')).length;
    expect(screen.getByTestId('result-count')).toHaveTextContent(`${acc} games`);

    await user.click(screen.getByRole('button', { name: /Hard/ }));
    const hard = content.activities.filter((a) => a.tags.includes('accusative') && a.difficulty === 3).length;
    expect(screen.getByTestId('result-count')).toHaveTextContent(`${hard} games`);
  });

  it('searches by text and shows an empty state', async () => {
    const { user } = renderApp('/library');
    await screen.findByLabelText('Search games');
    await user.type(screen.getByLabelText('Search games'), 'zzzzzz');
    expect(screen.getByText('No games match these filters.')).toBeInTheDocument();
    expect(screen.queryByTestId('play-queue')).not.toBeInTheDocument();
  });

  it('restores filters from the URL and builds a play queue in the shown order', async () => {
    renderApp('/library?type=blitz&unit=a1-1-hallo');
    await waitFor(() => expect(screen.getByTestId('result-count')).toHaveTextContent('1 games'));
    expect(screen.getByRole('button', { name: /Blitz/ })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByTestId('play-queue')).toHaveAttribute('href', '/play/a1-1-hallo-blitz');
  });

  it('puts the rest of the results into the queue', async () => {
    renderApp('/library?unit=a1-1-hallo&type=quiz');
    const quizzes = content.activities.filter((a) => a.unitId === 'a1-1-hallo' && a.gameType === 'quiz');
    await waitFor(() => expect(screen.getByTestId('result-count')).toHaveTextContent(`${quizzes.length} games`));
    const href = screen.getByTestId('play-queue').getAttribute('href')!;
    expect(href).toBe(`/play/${quizzes[0]!.id}?q=${quizzes.slice(1).map((a) => a.id).join('%2C')}`);
  });
});

describe('Play flow', () => {
  const quiz = activityById('a1-1-hallo-time-of-day');

  it('shows an intro, plays a quiz, records progress and offers the next game', async () => {
    const next = activityById('a1-1-hallo-feelings');
    const { user } = renderApp(`/play/${quiz.id}?seed=1&q=${next.id}`);
    expect(await screen.findByRole('heading', { name: quiz.title })).toBeInTheDocument();
    await user.click(screen.getByTestId('start'));
    await playQuiz(user, quiz);
    expect(await screen.findByRole('heading', { name: 'Well done!' })).toBeInTheDocument();
    expect(screen.getByTestId('accuracy')).toHaveTextContent('100% correct');
    expect(screen.getByTestId('next-activity')).toHaveTextContent(next.title);
    expect(screen.queryByTestId('mistakes-note')).not.toBeInTheDocument();
    const progress = useProgressStore.getState();
    expect(progress.activities[quiz.id]).toMatchObject({ stars: 3, plays: 1 });
    expect(progress.xp).toBeGreaterThan(0);
    expect(screen.getByTestId('xp')).toHaveTextContent(String(progress.xp));
  });

  it('collects mistakes in the Fehlerkiste and lets you play again', async () => {
    const { user } = renderApp(`/play/${quiz.id}?seed=2`);
    await user.click(await screen.findByTestId('start'));
    await playQuiz(user, quiz, { correct: false });
    expect(await screen.findByTestId('mistakes-note')).toHaveTextContent('5 items');
    expect(Object.keys(useProgressStore.getState().mistakes)).toHaveLength(5);
    await user.click(screen.getByTestId('replay'));
    expect(await screen.findByTestId('prompt')).toBeInTheDocument();
    expect(screen.getByTestId('counter')).toHaveTextContent('1 / 5');
  });

  it('lets you leave with Exit and returns to the unit', async () => {
    const { user, router } = renderApp(`/play/${quiz.id}?seed=1`);
    await user.click(await screen.findByRole('button', { name: 'Exit game' }));
    await waitFor(() => expect(router.state.location.pathname).toBe('/levels/a1-1/units/a1-1-hallo'));
  });

  it('shows not-found for an unknown activity', async () => {
    renderApp('/play/does-not-exist');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });

  it('hides the main navigation while playing', async () => {
    renderApp(`/play/${quiz.id}`);
    await screen.findByTestId('start');
    expect(screen.queryByRole('navigation', { name: 'Main' })).not.toBeInTheDocument();
  });
});

describe('Review', () => {
  it('is empty at first', async () => {
    renderApp('/review');
    expect(await screen.findByTestId('review-empty')).toBeInTheDocument();
  });

  it('lists mistakes and replays only those items', async () => {
    const quiz = activityById('a1-1-hallo-time-of-day');
    const first = (quiz.config as { questions: { id: string }[] }).questions[0]!.id;
    useProgressStore.getState().recordResult(quiz.id, { correct: 4, total: 5, played: [first], mistakes: [first] });
    const { user } = renderApp('/review');
    expect(await screen.findByTestId('review-count')).toHaveTextContent('1 due');
    await user.click(screen.getByTestId('start-review'));
    expect(await screen.findByText('1 items to review · ~2 min')).toBeInTheDocument();
    await user.click(screen.getByTestId('start'));
    const prompt = (await screen.findByTestId('prompt')).textContent;
    const q = (quiz.config as { questions: { id: string; prompt: string; answer: string }[] }).questions.find((x) => x.id === first)!;
    expect(prompt).toBe(q.prompt);
    await user.click(await screen.findByRole('button', { name: q.answer }));
    await user.click(await screen.findByTestId('continue'));
    expect(await screen.findByRole('heading', { name: 'Well done!' })).toBeInTheDocument();
    // review mode does not touch star stats, but advances the Leitner box
    expect(useProgressStore.getState().activities[quiz.id]).toMatchObject({ plays: 1 });
    expect(Object.values(useProgressStore.getState().mistakes)[0]!.box).toBe(2);
  });
});

describe('Settings', () => {
  it('changes theme, motion and speech options and persists them', async () => {
    const { user } = renderApp('/settings');
    await user.click(await screen.findByLabelText('Dark'));
    expect(useSettingsStore.getState().theme).toBe('dark');
    await waitFor(() => expect(document.documentElement.dataset.theme).toBe('dark'));
    await user.click(screen.getByLabelText('Reduced'));
    await waitFor(() => expect(document.documentElement.dataset.reducedMotion).toBe('true'));
    await user.click(screen.getByLabelText('Speak German automatically'));
    expect(useSettingsStore.getState().autoSpeak).toBe(false);
  });

  it('resets progress only after confirmation', async () => {
    useProgressStore.getState().recordResult('x', { correct: 1, total: 1, played: [], mistakes: [] });
    const { user } = renderApp('/settings');
    const confirm = vi.spyOn(window, 'confirm').mockReturnValueOnce(false).mockReturnValueOnce(true);
    await user.click(await screen.findByRole('button', { name: 'Reset all progress' }));
    expect(useProgressStore.getState().xp).toBeGreaterThan(0);
    await user.click(screen.getByRole('button', { name: 'Reset all progress' }));
    expect(useProgressStore.getState().xp).toBe(0);
    confirm.mockRestore();
  });
});

describe('Routing', () => {
  it('shows a 404 page with a way home', async () => {
    const { user, router } = renderApp('/nope/nothing');
    expect(await screen.findByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
    await user.click(screen.getByRole('link', { name: 'Back to home' }));
    await waitFor(() => expect(router.state.location.pathname).toBe('/'));
  });

  it('has a skip link and the main nav with the review badge', async () => {
    useProgressStore.getState().recordResult('act', { correct: 0, total: 2, played: ['a', 'b'], mistakes: ['a', 'b'] });
    renderApp('/');
    expect(await screen.findByRole('link', { name: 'Skip to content' })).toHaveAttribute('href', '#main');
    expect(screen.getByLabelText('2 items to review')).toBeInTheDocument();
    for (const name of ['Home', 'Games', 'Review', 'Settings']) {
      expect(within(screen.getByRole('navigation', { name: 'Main' })).getByRole('link', { name: new RegExp(name) })).toBeInTheDocument();
    }
  });
});

import { useMemo, useState } from 'react';
import { SpeakButton } from '@/components/ui/SpeakButton';
import { ttsSupported } from '@/lib/tts';
import { t } from '@/i18n';
import { ChoiceList } from '../shared/ChoiceList';
import { FeedbackFooter, GameFrame, verdictTitle } from '../shared/GameFrame';
import { shuffledOptions } from '../shared/choices';
import { useAutoSpeak } from '../shared/useAutoSpeak';
import { useSequence } from '../shared/useSequence';
import type { GameProps } from '../types';

export function Listen({ config, seed, onFinish }: GameProps<'listen'>) {
  const seq = useSequence(config.items, seed, onFinish);
  const q = seq.item;
  const [picked, setPicked] = useState<string | null>(null);
  const options = useMemo(() => shuffledOptions(q.options, seed, q.id), [q, seed]);
  useAutoSpeak(q.speak);
  const canSpeak = ttsSupported();

  const select = (option: string) => {
    if (picked !== null) return;
    setPicked(option);
    seq.answer(option === q.answer);
  };
  const next = () => {
    setPicked(null);
    seq.advance();
  };
  const correct = picked === q.answer;

  return (
    <GameFrame
      index={seq.index}
      total={seq.total}
      title="Listen and pick"
      footer={
        seq.phase === 'feedback' ? (
          <FeedbackFooter
            kind={correct ? 'correct' : 'wrong'}
            title={verdictTitle(correct ? 'correct' : 'wrong')}
            detail={
              <>
                <p>
                  You heard: <strong>{q.transcript ?? q.speak}</strong>
                </p>
                {!correct ? (
                  <p>
                    Answer: <strong>{q.answer}</strong>
                  </p>
                ) : null}
                {q.explanation ? <p>{q.explanation}</p> : null}
              </>
            }
            isLast={seq.isLast}
            onNext={next}
          />
        ) : null
      }
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-2xl font-extrabold text-ink">What do you hear?</h2>
        <SpeakButton text={q.speak} size="lg" label="Play the audio again" />
        {!canSpeak ? (
          <p className="rounded-xl bg-warning-soft p-3 text-ink" data-testid="tts-fallback">
            {t('common.audioUnavailable')} <strong>{q.speak}</strong>
          </p>
        ) : null}
      </div>
      <ChoiceList
        options={options}
        picked={picked}
        answer={q.answer}
        onSelect={select}
        columns={2}
      />
    </GameFrame>
  );
}

export default Listen;

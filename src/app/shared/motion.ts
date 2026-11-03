export const prefersReducedMotion = (): boolean =>
  matchMedia('(prefers-reduced-motion: reduce)').matches;

export const hasFinePointer = (): boolean => matchMedia('(pointer: fine)').matches;

/**
 * Executa `callback` no scroll e no resize, no máximo uma vez por frame.
 * Retorna a função que remove os listeners.
 */
export function onScrollFrame(callback: () => void): () => void {
  let frame = 0;
  const schedule = () => {
    frame ||= requestAnimationFrame(() => {
      frame = 0;
      callback();
    });
  };

  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule, { passive: true });
  callback();

  return () => {
    removeEventListener('scroll', schedule);
    removeEventListener('resize', schedule);
    cancelAnimationFrame(frame);
  };
}

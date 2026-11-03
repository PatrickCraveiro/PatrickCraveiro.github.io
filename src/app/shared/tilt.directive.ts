import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';
import { hasFinePointer, prefersReducedMotion } from './motion';

/**
 * Inclina em 3D o primeiro filho do elemento, seguindo o cursor.
 * O host recebe a perspectiva; o filho deve ter `transition: transform`.
 * Uso: `<div appTilt><div class="card">…</div></div>` ou `[appTilt]="10"` para fixar o ângulo máximo.
 */
@Directive({
  selector: '[appTilt]',
  host: { '[style.perspective.px]': 'perspective()' },
})
export class Tilt {
  /** Ângulo máximo em graus. Sem valor: 6° em cards largos e 14° em cards pequenos. */
  readonly appTilt = input<number | ''>('');
  readonly perspective = input(1200);

  constructor() {
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const target = host.firstElementChild as HTMLElement | null;
      if (!target || prefersReducedMotion() || !hasFinePointer()) return;

      const move = (event: MouseEvent) => {
        const max = this.appTilt() || (host.offsetWidth > 300 ? 6 : 14);
        const rect = host.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        target.style.transform = `rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(0)`;
      };
      const leave = () => target.style.removeProperty('transform');

      host.addEventListener('mousemove', move);
      host.addEventListener('mouseleave', leave);
      destroyRef.onDestroy(() => {
        host.removeEventListener('mousemove', move);
        host.removeEventListener('mouseleave', leave);
      });
    });
  }
}

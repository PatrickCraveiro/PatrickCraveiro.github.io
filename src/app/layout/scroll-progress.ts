import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
} from '@angular/core';
import { onScrollFrame } from '../shared/motion';

/** Barra fina no topo da página que acompanha o progresso de leitura. */
@Component({
  selector: 'app-scroll-progress',
  template: '',
  styles: `
    :host {
      position: fixed;
      inset: 0 0 auto;
      height: 2px;
      background: var(--accent);
      transform-origin: 0 50%;
      transform: scaleX(0);
      z-index: 100;
      pointer-events: none;
    }
  `,
  host: { 'aria-hidden': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollProgress {
  constructor() {
    const bar = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      const stop = onScrollFrame(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        bar.style.transform = `scaleX(${scrollTop / Math.max(1, scrollHeight - clientHeight)})`;
      });
      destroyRef.onDestroy(stop);
    });
  }
}

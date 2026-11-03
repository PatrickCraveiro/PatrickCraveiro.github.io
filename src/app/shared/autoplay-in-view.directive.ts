import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';
import { prefersReducedMotion } from './motion';

/**
 * Toca o vídeo (mudo, em loop) só enquanto ele está visível e pausa ao sair da tela.
 * Com prefers-reduced-motion, o vídeo fica parado no poster.
 * Uso: `<video appAutoplayInView loop playsinline preload="none" [src]="..."></video>`.
 */
@Directive({ selector: 'video[appAutoplayInView]' })
export class AutoplayInView {
  constructor() {
    const video = inject<ElementRef<HTMLVideoElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      // A política de autoplay dos navegadores olha a propriedade, não o atributo.
      video.muted = true;
      if (prefersReducedMotion()) return;

      const observer = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? video.play().catch(() => {}) : video.pause()),
        { threshold: 0.25 },
      );
      observer.observe(video);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}

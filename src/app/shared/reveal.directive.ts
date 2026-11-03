import { DestroyRef, Directive, ElementRef, Injectable, afterNextRender, inject, input } from '@angular/core';
import { prefersReducedMotion } from './motion';

export type RevealKind = 'up' | 'side' | 'rule';

/** Intervalo entre elementos que entram na tela no mesmo frame. */
const STAGGER_MS = 60;

/** Um único IntersectionObserver para todos os elementos animados da página. */
@Injectable({ providedIn: 'root' })
export class RevealObserver {
  private readonly delays = new WeakMap<Element, number>();
  private observer?: IntersectionObserver;

  observe(el: HTMLElement, delay: number): void {
    if (prefersReducedMotion()) {
      el.classList.add('is-revealed');
      return;
    }
    this.delays.set(el, delay);
    this.observer ??= new IntersectionObserver((entries) => this.reveal(entries), {
      threshold: 0.12,
      rootMargin: '0px 0px -6% 0px',
    });
    this.observer.observe(el);
  }

  unobserve(el: HTMLElement): void {
    this.observer?.unobserve(el);
  }

  private reveal(entries: IntersectionObserverEntry[]): void {
    entries
      .filter((entry) => entry.isIntersecting)
      .forEach((entry, i) => {
        const el = entry.target as HTMLElement;
        this.observer?.unobserve(el);
        el.style.transitionDelay = `${(this.delays.get(el) ?? 0) + i * STAGGER_MS}ms`;
        el.classList.add('is-revealed');
        el.addEventListener('transitionend', () => el.style.removeProperty('transition-delay'), {
          once: true,
        });
      });
  }
}

/**
 * Anima o elemento quando ele entra na tela.
 * Uso: `<p appReveal>`, `<article appReveal="side">`, `<div appReveal="rule" [revealDelay]="80">`.
 */
@Directive({
  selector: '[appReveal]',
  host: { '[attr.data-reveal]': 'appReveal() || "up"' },
})
export class Reveal {
  readonly appReveal = input<RevealKind | ''>('up');
  readonly revealDelay = input(0);

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const observer = inject(RevealObserver);

    afterNextRender(() => observer.observe(el, this.revealDelay()));
    inject(DestroyRef).onDestroy(() => observer.unobserve(el));
  }
}

import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [Reveal],
  template: `
    <section id="contato" aria-labelledby="contato-titulo">
      <div class="container inner">
        <p class="kicker" appReveal>04 — contato</p>
        <h2 id="contato-titulo" class="title" appReveal [revealDelay]="80">Vamos construir algo juntos.</h2>

        <div class="actions" appReveal [revealDelay]="160">
          <button type="button" class="btn btn-ink" (click)="copyEmail()">
            {{ copied() ? 'E-mail copiado ✓' : profile.email + ' — copiar' }}
          </button>
          <a class="btn btn-line" [href]="profile.linkedin" target="_blank" rel="noopener">LinkedIn ↗</a>
          <a class="btn btn-line" [href]="profile.github" target="_blank" rel="noopener">GitHub ↗</a>
        </div>

        <p class="visually-hidden" aria-live="polite">
          {{ copied() ? 'E-mail copiado para a área de transferência' : '' }}
        </p>
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
      background: var(--accent-600);
      color: var(--paper);
    }

    // O anel de foco roxo sumiria sobre o fundo roxo.
    :focus-visible {
      outline-color: var(--paper);
    }

    .inner {
      padding-block: clamp(72px, 10vw, 128px);
    }

    .kicker {
      margin-bottom: 20px;
      font-family: var(--font-mono);
      font-size: 14px;
    }

    .title {
      max-width: 12ch;
      margin-left: -0.058em;
      font-size: clamp(44px, 7vw, 104px);
      line-height: 1.02;
      letter-spacing: -0.03em;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-3);
      margin-top: 48px;
    }

    .btn-ink {
      min-width: 240px;
      background: var(--ink);
      border-color: var(--ink);

      &:hover {
        background: color-mix(in srgb, var(--ink) 85%, var(--paper));
      }
    }

    .btn-line {
      border-color: var(--paper);

      &:hover {
        background: color-mix(in srgb, var(--paper) 14%, transparent);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  protected readonly profile = PROFILE;
  protected readonly copied = signal(false);

  private timer?: ReturnType<typeof setTimeout>;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
    } catch {
      // Sem acesso à área de transferência: abre o cliente de e-mail.
      location.href = `mailto:${this.profile.email}`;
      return;
    }
    this.copied.set(true);
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.copied.set(false), 1800);
  }
}

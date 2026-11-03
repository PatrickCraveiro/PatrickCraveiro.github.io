import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../data/profile';

@Component({
  selector: 'app-site-header',
  template: `
    <nav class="container bar" aria-label="Principal">
      <a href="#" class="brand"><span class="mark" aria-hidden="true"></span>{{ profile.handle }}</a>
      @for (link of links; track link.href) {
        <a class="link" [href]="link.href">{{ link.label }}</a>
      }
      <a href="#contato" class="btn btn-primary">Contato</a>
    </nav>
  `,
  styles: `
    :host {
      position: sticky;
      top: 0;
      z-index: 50;
      display: block;
      background: color-mix(in srgb, var(--ink) 86%, transparent);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-bottom: var(--border) solid var(--line);
    }

    .bar {
      display: flex;
      align-items: center;
      gap: clamp(16px, 3vw, 36px);
      padding-block: 16px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-right: auto;
      font-family: var(--font-heading);
      font-weight: var(--font-heading-weight);
      font-size: 17px;
      text-decoration: none;
    }

    .mark {
      width: 10px;
      height: 10px;
      background: var(--accent);
    }

    .link {
      font-size: 15px;
      text-decoration: none;
      color: color-mix(in srgb, var(--paper) 75%, transparent);
      transition: color 200ms var(--ease);

      &:hover {
        color: var(--paper);
      }
    }

    @media (max-width: 640px) {
      .link {
        display: none;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  protected readonly profile = PROFILE;
  protected readonly links = [
    { href: '#experiencia', label: 'Experiência' },
    { href: '#stack', label: 'Stack' },
    { href: '#projetos', label: 'Projetos' },
  ];
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../data/profile';

@Component({
  selector: 'app-site-footer',
  template: `
    <div class="container bar">
      <span>© {{ year }} {{ name }}</span>
      <a href="#">voltar ao topo ↑</a>
    </div>
  `,
  styles: `
    .bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 16px;
      padding-block: 28px;
      font-family: var(--font-mono);
      font-size: 13px;
      line-height: 28px;
      color: var(--fg-soft);
    }

    a {
      color: inherit;

      &:hover {
        color: var(--accent-300);
      }
    }
  `,
  host: { role: 'contentinfo', style: 'display: block' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly name = PROFILE.name;
  protected readonly year = new Date().getFullYear();
}

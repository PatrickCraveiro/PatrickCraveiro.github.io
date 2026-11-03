import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollProgress } from './layout/scroll-progress';
import { SiteHeader } from './layout/site-header';
import { Hero } from './sections/hero/hero';

@Component({
  selector: 'app-root',
  imports: [ScrollProgress, SiteHeader, Hero],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}

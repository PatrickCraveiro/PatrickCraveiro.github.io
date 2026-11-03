import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollProgress } from './layout/scroll-progress';
import { SiteHeader } from './layout/site-header';
import { ExperienceSection } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { StackSection } from './sections/stack/stack';
import { Reveal } from './shared/reveal.directive';

@Component({
  selector: 'app-root',
  imports: [ScrollProgress, SiteHeader, Hero, ExperienceSection, StackSection, Reveal],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}

import { ChangeDetectionStrategy, Component, afterNextRender } from '@angular/core';
import { ScrollProgress } from './layout/scroll-progress';
import { SiteHeader } from './layout/site-header';
import { ExperienceSection } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { ProjectsSection } from './sections/projects/projects';
import { StackSection } from './sections/stack/stack';
import { Reveal } from './shared/reveal.directive';

@Component({
  selector: 'app-root',
  imports: [ScrollProgress, SiteHeader, Hero, ExperienceSection, StackSection, ProjectsSection, Reveal],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  constructor() {
    // Links diretos como /#projetos: o navegador tenta rolar antes de a seção existir.
    afterNextRender(() => {
      const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
      target?.scrollIntoView({ behavior: 'instant' });
    });
  }
}

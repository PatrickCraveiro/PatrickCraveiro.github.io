import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../data/projects';
import { Reveal } from '../../shared/reveal.directive';
import { Tilt } from '../../shared/tilt.directive';
import { ProjectCard } from './project-card';

@Component({
  selector: 'app-projects',
  imports: [Reveal, Tilt, ProjectCard],
  template: `
    <section id="projetos" class="section" aria-labelledby="projetos-titulo">
      <p class="eyebrow" appReveal>03 — projetos</p>
      <div class="head">
        <h2 id="projetos-titulo" class="section-title" appReveal>Projetos pessoais.</h2>
        <p class="lede" appReveal>
          Os trabalhos corporativos são confidenciais. Estes são projetos próprios, com código aberto.
        </p>
      </div>

      <div class="grid">
        @for (project of projects; track project.repoUrl; let i = $index) {
          <div appReveal appTilt>
            <app-project-card [project]="project" [position]="i + 1" />
          </div>
        }
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .head {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: end;
      gap: 16px 32px;
      margin-bottom: 56px;

      .section-title {
        margin-bottom: 0;
      }
    }

    .lede {
      max-width: 40ch;
      font-size: 15.5px;
      line-height: 26px;
      color: color-mix(in srgb, var(--paper) 65%, transparent);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 460px), 1fr));
      gap: 28px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  protected readonly projects = PROJECTS;
}

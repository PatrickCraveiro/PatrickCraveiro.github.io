import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Project } from '../../data/models';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly position = input.required<number>();

  protected readonly number = computed(() => String(this.position()).padStart(2, '0'));
}

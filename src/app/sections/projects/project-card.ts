import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Project } from '../../data/models';
import { AutoplayInView } from '../../shared/autoplay-in-view.directive';

@Component({
  selector: 'app-project-card',
  imports: [AutoplayInView],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly position = input.required<number>();

  protected readonly number = computed(() => String(this.position()).padStart(2, '0'));
}

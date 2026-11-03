import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  viewChild,
} from '@angular/core';
import { EDUCATION } from '../../data/education';
import { EXPERIENCE } from '../../data/experience';
import { Reveal } from '../../shared/reveal.directive';
import { onScrollFrame } from '../../shared/motion';

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
  protected readonly experience = EXPERIENCE;
  protected readonly education = EDUCATION;

  protected hostOf(url: string): string {
    return new URL(url).host;
  }

  private readonly timeline = viewChild.required<ElementRef<HTMLElement>>('timeline');
  private readonly fill = viewChild.required<ElementRef<HTMLElement>>('fill');

  constructor() {
    const destroyRef = inject(DestroyRef);

    // A linha da timeline se preenche conforme ela passa pelo ponto a 60% da altura da tela.
    afterNextRender(() => {
      const timeline = this.timeline().nativeElement;
      const fill = this.fill().nativeElement;
      const stop = onScrollFrame(() => {
        const rect = timeline.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, (innerHeight * 0.6 - rect.top) / rect.height));
        fill.style.transform = `scaleY(${progress})`;
      });
      destroyRef.onDestroy(stop);
    });
  }
}

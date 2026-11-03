import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STACK } from '../../data/stack';
import { Reveal } from '../../shared/reveal.directive';
import { Tilt } from '../../shared/tilt.directive';

@Component({
  selector: 'app-stack',
  imports: [Reveal, Tilt],
  templateUrl: './stack.html',
  styleUrl: './stack.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StackSection {
  protected readonly groups = STACK;
}

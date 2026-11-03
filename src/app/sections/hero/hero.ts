import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { PROFILE } from '../../data/profile';
import { Reveal } from '../../shared/reveal.directive';
import { hasFinePointer, prefersReducedMotion } from '../../shared/motion';
import { objectLiteral } from './code-lines';

@Component({
  selector: 'app-hero',
  imports: [Reveal],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly typed = signal(PROFILE.roles[0]);
  protected readonly code = objectLiteral('patrick', {
    cargo: 'Front-End Developer',
    experiencia: '7+ anos',
    empresas: ['Medgrupo', 'Unhide School'],
    foco: ['Angular', 'TypeScript'],
    tambem: ['Node.js', 'GraphQL'],
    missao: 'autonomia para não-técnicos',
  });

  private readonly card = viewChild.required<ElementRef<HTMLElement>>('card');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      if (prefersReducedMotion()) return;
      this.startTyping();
      if (hasFinePointer()) this.followPointer();
    });
  }

  /** Apaga e digita as palavras de PROFILE.roles em loop. */
  private startTyping(): void {
    const words = this.profile.roles;
    let word = 0;
    let length = words[0].length;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      if (!deleting && length === words[word].length) {
        deleting = true;
        timer = setTimeout(step, 1800);
        return;
      }
      if (deleting && length === 0) {
        deleting = false;
        word = (word + 1) % words.length;
      }
      length += deleting ? -1 : 1;
      this.typed.set(words[word].slice(0, length));
      timer = setTimeout(step, deleting ? 45 : 90);
    };

    timer = setTimeout(step, 2200);
    this.destroyRef.onDestroy(() => clearTimeout(timer));
  }

  /** Inclina o cartão de código conforme a posição do cursor na janela. */
  private followPointer(): void {
    const card = this.card().nativeElement;
    const move = (event: MouseEvent) => {
      const x = event.clientX / innerWidth - 0.5;
      const y = event.clientY / innerHeight - 0.5;
      card.style.transform = `rotateY(${-14 + x * 18}deg) rotateX(${8 - y * 14}deg)`;
    };

    addEventListener('mousemove', move, { passive: true });
    this.destroyRef.onDestroy(() => removeEventListener('mousemove', move));
  }
}

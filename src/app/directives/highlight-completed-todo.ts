import { Directive, input, effect, inject, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodo {
  isCompleted = input(false);

  constructor() {}

  ele = inject(ElementRef);

  stylesEffect = effect(() => {
    if (this.isCompleted()) {
      this.ele.nativeElement.style.textDecoration = 'line-through';
    } else {
      this.ele.nativeElement.style.textDecoration = 'none';
    }
  });
}

import { style, animate, animation } from "@angular/animations";


export const fadeIn = animation([
  style({ opacity: 0 }),
  animate('800ms', style({ opacity: 1 }))
]);

export const fadeOut = animation([
  animate('800ms', style({ opacity: 0 }))
]);

import { trigger, transition, style, animate } from '@angular/animations';

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.5s ease-in', style({ opacity: 1 })),
  ]),
]);

export const slideInUp = trigger('slideInUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(30px)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
]);

export const slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(-30px)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
]);

export const zoomIn = trigger('zoomIn', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.8)' }),
    animate('0.5s ease-out', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);

export const rotateIn = trigger('rotateIn', [
    transition(':enter', [
      style({ opacity: 0, transform: 'rotate(-90deg)' }),
      animate('0.5s ease-out', style({ opacity: 1, transform: 'rotate(0)' })),
    ]),
]);
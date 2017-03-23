import {trigger, transition, style, animate, state} from '@angular/core';

export const fadeInOut = trigger('fadeInOut', [
      transition('void => *', [
        style({opacity: 0}),
        animate('1s ease-in', style({opacity: 1}))
      ]),
      transition('* => void', [
        style({opacity: 1}),
        animate('1s ease-in', style({opacity: 0}))
      ]),
  ]);

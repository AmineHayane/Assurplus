import {trigger, transition, style, animate, state, keyframes} from '@angular/core';

export const flyInOrOut = trigger('flyInOrOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(2000, keyframes([
        style({transform: 'translateX(-100%)', offset: 0}),
        style({transform: 'translateX(50px)',  offset: 0.3}),
        style({transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [
      animate(2000, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
  ]);

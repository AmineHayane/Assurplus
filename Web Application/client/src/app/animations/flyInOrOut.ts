import {trigger, transition, style, animate, state, keyframes} from '@angular/core';

export const flyInOrOutLeft = trigger('flyInOrOutLeft', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(1000, keyframes([
        style({transform: 'translateX(-50%)', offset: 0}),
        style({transform: 'translateX(20px)',  offset: 0.5}),
        style({transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    /*transition('* => void', [
      animate(2000, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])*/
  ]);

export const flyInOrOutRight = trigger('flyInOrOutRight', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      animate(1000, keyframes([
        style({transform: 'translateX(50%)', offset: 0}),
        style({transform: 'translateX(-20px)',  offset: 0.5}),
        style({transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
  ]);

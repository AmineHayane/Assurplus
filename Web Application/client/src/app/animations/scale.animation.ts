import {trigger, transition, style, animate, state} from '@angular/core';

export function scale (degree : number = 1.2 ) {
  return trigger('scaleOut', [
    state('inactive', style({transform: 'scale(1)'})),
    state('active', style({transform: 'scale(' + degree + ')'})),
    transition('inactive => active', animate('150ms ease-in')),
    transition('active => inactive', animate('150ms ease-out'))
  ])
}

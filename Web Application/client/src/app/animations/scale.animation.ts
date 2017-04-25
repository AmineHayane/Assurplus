import {trigger, transition, style, animate, state} from '@angular/core';

export function scale (degree_in : number = 1, degree_out : number = 1.2 ) {
  return trigger('scaleOut', [
    state('inactive', style({transform: 'scale(' + degree_in + ')'})),
    state('active', style({transform: 'scale(' + degree_out + ')'})),
    transition('inactive => active', animate('250ms ease-in')),
    transition('active => inactive', animate('250ms ease-out'))
  ])
}

export function modal (degree_in : number = 0.8, degree_out : number = 1 ) {
  return trigger('modal', [
    state('inactive', style({transform: 'scale(' + degree_in + ')'})),
    state('active', style({transform: 'scale(' + degree_out + ')'})),
    transition('inactive => active', animate('250ms ease-in')),
    transition('active => inactive', animate('250ms ease-out'))
  ])
}



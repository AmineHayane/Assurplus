import {trigger, transition, style, animate, state} from '@angular/core';

export const enterLeaveLeft = trigger('enterLeaveLeft', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate('1s ease-in', style({transform: 'translateX(0)'}))
      ]),
      transition('* => void', [
        style({transform: 'translateX(0)'}),
        animate('1s ease-in', style({transform: 'translateX(-100%)'}))
      ]),
  ]);

export const enterLeaveRight = trigger('enterLeaveRight', [
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate('1s ease-in', style({transform: 'translateX(0)'}))
      ]),
      transition('* => void', [
        style({transform: 'translateX(0)'}),
        animate('1s ease-in', style({transform: 'translateX(100%)'}))
      ]),
  ]);

import {Component, OnInit, Input, trigger, animate, style, state, transition} from '@angular/core';
import {Article} from "./article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  animations: [
  trigger('flyInOut', [
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate('500ms ease-in')
    ]),
    // transition('* => void', [
    //   animate('1000ms ease-out', style({transform: 'translateX(100%)'}))
    // ])
  ]),
    trigger('scaleOut', [
      state('inactive', style({
        transform: 'scale(1)',

      })),
      state('active',   style({
        transform: 'scale(1.1)',

        background: 'green'
      })),
      transition('inactive => active', animate('150ms ease-in')),
      transition('active => inactive', animate('150ms ease-out'))
    ])
],
  host : {
    class : 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article : Article;
  scaled = 'inactive';

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  scaleIn() {
    this.scaled = 'active';
  }

  scaleOut() {
    this.scaled = 'inactive';
  }

  ngOnInit() {
  }

}

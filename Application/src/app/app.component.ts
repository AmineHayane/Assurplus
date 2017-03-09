import { Component, trigger, animate, transition, style } from '@angular/core';
import {Article} from "./article/article.model";
import {ArticleComponent} from "./article/article.component";
import 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  articles : Article[];

  constructor() {
    this.articles = [
      new Article('Angular2', 'http://angular.io', 10),
      new Article('Fullstack', 'http://fullstack.io', 8),
      new Article('AngularJS', 'http://angularjs.org', 6)
    ];
  }

  addArticle(title: HTMLInputElement, link : HTMLInputElement): boolean {
    console.log(`Adding article with title: ${title.value} and link : ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles() : Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);

  }

}

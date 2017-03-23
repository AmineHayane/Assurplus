import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {MaterialModule} from "@angular/material";
import 'hammerjs';
import { TestngsemComponent } from './testngsem/testngsem.component';
import {NgSemanticModule} from "ng-semantic/ng-semantic";
import {TrackScrollDirective} from "./directives/trackscroll.directive";
import { CarouselComponent } from './carousel/carousel.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll/ng2-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TestngsemComponent,
    TrackScrollDirective,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NgSemanticModule,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

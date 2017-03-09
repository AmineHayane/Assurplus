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

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TestngsemComponent,
    TrackScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    NgSemanticModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

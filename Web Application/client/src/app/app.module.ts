import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import {MaterialModule} from "@angular/material";
import 'hammerjs';
import { TestngsemComponent } from './testngsem/testngsem.component';
import {TrackScrollDirective} from "./directives/trackscroll.directive";
import { CarouselComponent } from './carousel/carousel.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll/ng2-page-scroll';
import { FooterComponent } from './footer/footer.component';
import {ResponsiveModule} from "ng2-responsive";
import { SignupComponent } from './signup/signup.component';
import { AuthenticationService } from './services/authentication.service'
import {RouterModule} from "@angular/router";

import { ROUTES } from "./routes/app.routing";
import {SignupService} from "./signup/signup.service";
import { LoginComponent } from './login/login.component';
import {FileSelectDirective, FileDropDirective} from "ng2-file-upload/ng2-file-upload";
import { FileuploadComponent } from './fileupload/fileupload.component';
import {SuiProgressModule, SuiModule} from "ng2-semantic-ui";
import {UploadsService} from "./fileupload/uploads.service";

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    TestngsemComponent,
    TrackScrollDirective,
    CarouselComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    FileSelectDirective,
    FileDropDirective,
    FileuploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    Ng2PageScrollModule.forRoot(),
    ResponsiveModule,
    RouterModule.forRoot(ROUTES),
    SuiModule,
    SuiProgressModule
  ],
  providers: [AuthenticationService, SignupService, UploadsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
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
import {MaDirectiveDirective} from "./directives/ma-directive.directive";
import {CoffrefortComponent} from "./coffrefort/coffrefort.component";
import {MoncompteComponent} from "./moncompte/moncompte.component";
import {FormulaireInscriptionComponent} from "./formulaire-inscription/formulaire-inscription.component";
import {TableauDeBordComponent} from "./tableau-de-bord/tableau-de-bord.component";
import {ProduitComponent} from "./produit/produit.component";
import {InformationsProduitComponent} from "./informations-produit/informations-produit.component";
import {ValidationComponent} from "./validation/validation.component";
import {MonserviceService} from "./monservice.service";
import { JustificatifsComponent } from './justificatifs/justificatifs.component';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import {ChartsModule} from "ng2-charts";
import {AuthGuardService} from "./services/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    TestngsemComponent,
    TrackScrollDirective,
    CarouselComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    FileSelectDirective,
    FileDropDirective,
    FileuploadComponent,
    MaDirectiveDirective,
    CoffrefortComponent,
    MoncompteComponent,
    FormulaireInscriptionComponent,
    TableauDeBordComponent,
    ProduitComponent,
    InformationsProduitComponent,
    ValidationComponent,
    JustificatifsComponent,
    PdfViewerComponent
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
    SuiProgressModule,
    ChartsModule
  ],
  providers: [AuthenticationService, SignupService, UploadsService, MonserviceService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }


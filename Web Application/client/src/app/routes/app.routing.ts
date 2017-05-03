import { SignupComponent } from '../signup/signup.component';
import { TestngsemComponent } from '../testngsem/testngsem.component';
import { LoginComponent } from '../login/login.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';
import { CoffrefortComponent } from '../coffrefort/coffrefort.component';
import { MoncompteComponent } from '../moncompte/moncompte.component';
import { FormulaireInscriptionComponent } from '../formulaire-inscription/formulaire-inscription.component';
import { TableauDeBordComponent } from '../tableau-de-bord/tableau-de-bord.component';
import { ProduitComponent } from '../produit/produit.component';
import { InformationsProduitComponent } from '../informations-produit/informations-produit.component';
import { JustificatifsComponent } from '../justificatifs/justificatifs.component';
import { ValidationComponent } from '../validation/validation.component';
import {AppComponent} from "../app.component";
import {AuthGuardService} from "../services/auth-guard.service";


// Define the routes
export const ROUTES = [
  {
    path: '',
    component : TestngsemComponent,
    useAsDefault : true
  },
  {
    path: 'root',
    component: AppComponent,
    redirectTo : ''
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    name : 'Signup',
    component: SignupComponent
  },
  {
    path: 'fileupload',
    component: FileuploadComponent
  },
  { path: 'coffrefort',   component: CoffrefortComponent, canActivate : [AuthGuardService] },
  { path: 'moncompte',   component: MoncompteComponent, canActivate : [AuthGuardService]},
  { path: 'inscription',   component: FormulaireInscriptionComponent},
  { path: 'board',  component: TableauDeBordComponent, canActivate : [AuthGuardService] },
  { path: 'ajoutProduit', component: ProduitComponent, canActivate : [AuthGuardService] },
  { path: 'informationsProduit', component: InformationsProduitComponent },
  { path: 'ajoutJustifs', component: JustificatifsComponent, canActivate : [AuthGuardService] },
  { path: 'validationProduit', component: ValidationComponent}
];


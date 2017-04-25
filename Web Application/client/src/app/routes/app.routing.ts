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


// Define the routes
export const ROUTES = [
  {
    path: '',
    component : TestngsemComponent,
    useAsDefault : true
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
  { path: 'coffrefort',   component: CoffrefortComponent },
  { path: 'moncompte',   component: MoncompteComponent},
  { path: 'inscription',   component: FormulaireInscriptionComponent},
  { path: 'board',  component: TableauDeBordComponent },
  { path: 'ajoutProduit', component: ProduitComponent },
  { path: 'informationsProduit', component: InformationsProduitComponent },
  { path: 'justificatifs', component: JustificatifsComponent },
  { path: 'validationProduit', component: ValidationComponent}
];

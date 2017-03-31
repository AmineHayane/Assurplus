import { SignupComponent } from '../signup/signup.component';
import { TestngsemComponent } from '../testngsem/testngsem.component';
import { LoginComponent } from '../login/login.component';
import { FileuploadComponent } from '../fileupload/fileupload.component';

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
  }

];

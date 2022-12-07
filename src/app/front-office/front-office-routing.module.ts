import { ReviewComponent } from './review/review.component';

import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { EventcreateComponent } from './eventcreate/eventcreate.component';
import { FrontOfficeComponent } from './front-office.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ListeventComponent } from './listevent/listevent.component';
import { ServiceComponent } from './service/service.component';
import { DeviComponent } from './devi/devi.component';
import { EspaceComponent } from './espace/espace.component';
import { LocationComponent } from './location/location.component';
import { PhotographeComponent } from './photographe/photographe.component';
import { ServeurComponent } from './serveur/serveur.component';
import { TraiteurComponent } from './traiteur/traiteur.component';
import { AnimateurComponent } from './animateur/animateur.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SignupbusinessUserComponent } from './signupbusiness-user/signupbusiness-user.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  

  { path: '',
  
    component: FrontOfficeComponent ,
    children: [
      { path: '',  component:HomeComponent },
      { path: 'service',  component:ServiceComponent },
      { path: 'CreatEvent', component: EventcreateComponent },
      { path: 'gallery',  component:GalleryComponent },
      { path: 'event',    component:ListeventComponent },
      { path: 'review',    component:ReviewComponent },
      { path: 'contact' ,   component:ContactComponent },
      { path: 'devi' ,   component:DeviComponent },
      { path: 'login/espace' ,   component:EspaceComponent },
      { path: 'login/animateur',   component:AnimateurComponent },
      { path: 'login/location' ,   component:LocationComponent},
      { path: 'login/photographe' ,   component:PhotographeComponent },
      { path: 'login/serveur' ,   component:ServeurComponent },
      { path: 'login/traiteur' ,   component:TraiteurComponent },
      // {path:'/*',component: PageNotFoundComponent},
    
      {path:'login' , component: LoginComponent},
      {path:'login/signup' , component:SignupComponent},
      {path:'login/signupbusiness-user' , component:SignupbusinessUserComponent},
      {path:'login/forgot_password' , component:ForgotComponent},
      
       ]}
      ];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontOfficeRoutingModule { }

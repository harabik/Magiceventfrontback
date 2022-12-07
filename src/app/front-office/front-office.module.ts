import { AppRoutingModule } from './../app-routing.module';


import { FrontOfficeComponent } from './front-office.component';

import {MatListModule} from '@angular/material/list';
import { ServiceComponent } from './service/service.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewComponent } from './review/review.component';
import { DeviComponent } from './devi/devi.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListeventComponent } from './listevent/listevent.component';
import { EventcreateComponent } from './eventcreate/eventcreate.component';
import { EspaceComponent } from './espace/espace.component';
import { AnimateurComponent } from './animateur/animateur.component';
import { LocationComponent } from './location/location.component';
import { PhotographeComponent } from './photographe/photographe.component';
import { ServeurComponent } from './serveur/serveur.component';
import { TraiteurComponent } from './traiteur/traiteur.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupbusinessUserComponent } from './signupbusiness-user/signupbusiness-user.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FrontOfficeRoutingModule } from './front-office-routing.module';

@NgModule({
    declarations: [
        FrontOfficeComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        GalleryComponent,
        ServiceComponent,
        ContactComponent,
        ReviewComponent,
        DeviComponent,
        PageNotFoundComponent,
        ListeventComponent,
        EventcreateComponent,
        EspaceComponent,
        AnimateurComponent,
        LocationComponent,
        PhotographeComponent,
        ServeurComponent,
        TraiteurComponent,
        LoginComponent,
        SignupComponent,
        SignupbusinessUserComponent,
        ForgotComponent,
        TraiteurComponent
    ],
    imports: [
        
        CommonModule,
        FrontOfficeRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpClientModule,
        MatIconModule,
        MatListModule,
        MatDialogModule,
        CommonModule,
        RouterModule,
        FormsModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
    ],
})
export class FrontOfficeModule { }



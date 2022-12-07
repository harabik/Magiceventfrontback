import { EventCrudComponent } from './event-crud/event-crud.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BackOfficeComponent } from './back-office.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


const routes: Routes = [

      { path: '',  
      component: BackOfficeComponent,
     children : [
      // { path: 'admin'  ,    component: AdmindhashComponent },
         { path: 'crudevents',  component: EventCrudComponent },
         { path: 'sidebar',     component: SidebarComponent },
         { path: 'navbar',     component:NavBarComponent },



         
        
    
     ]}
 ];

  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }

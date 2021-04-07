import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { FounderComponent } from './founder/founder.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { ProgramsComponent } from './programs/programs.component';
import { GroupTherapyComponent } from './group-therapy/group-therapy.component';
import { AboutComponent } from './about/about.component';

 const routes: Routes = [
    {path: '',
    component: HomePageComponent
    },
    {
      path: 'nav',
      component: NavComponent
    },
    {
      path: 'nav/about',
      component: AboutComponent
    },
    {
      path: 'nav/group-therapy',
      component: GroupTherapyComponent
    },
    {
      path: 'nav/programs',
      component: ProgramsComponent
    },
    {
      path: 'nav/founder',
      component: FounderComponent
    },
    {
      path: 'nav/contacts',
      component: ContactsComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

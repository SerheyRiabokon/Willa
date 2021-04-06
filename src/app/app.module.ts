import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FounderComponent } from './founder/founder.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavComponent } from './nav/nav.component';
import { ProgramsComponent } from './programs/programs.component';
import { GroupTherapyComponent } from './group-therapy/group-therapy.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HeaderChevroneComponent } from './header-chevrone/header-chevrone.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    FounderComponent,
    HomePageComponent,
    NavComponent,
    ProgramsComponent,
    GroupTherapyComponent,
    AboutComponent,
    HeaderComponent,
    HeaderChevroneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

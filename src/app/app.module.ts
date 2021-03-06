import { Component, NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleComponent } from './article/article.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ClientComponent } from './client/client.component';
import { BcComponent } from './bc/bc.component';
import { BlComponent } from './bl/bl.component';
import { BrComponent } from './br/br.component';
import { BretourComponent } from './bretour/bretour.component';
import { FactureComponent } from './facture/facture.component';
import { AvoirComponent } from './avoir/avoir.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FamilleArticleComponent } from './famille-article/famille-article.component';
import { HomeappComponent } from './homeapp/homeapp.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    ArticleComponent,
    FournisseurComponent,
    ClientComponent,
    BcComponent,
    BlComponent,
    BrComponent,
    BretourComponent,
    FactureComponent,
    AvoirComponent,
    FamilleArticleComponent,
    HomeappComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    NgxSpinnerModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

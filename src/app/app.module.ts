import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

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
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FamilleArticleComponent } from './famille-article/famille-article.component';
import { HomeappComponent } from './homeapp/homeapp.component';

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
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

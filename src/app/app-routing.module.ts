import { HomeappComponent } from './homeapp/homeapp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ClientComponent } from './client/client.component';
import { AvoirComponent } from './avoir/avoir.component';
import { BcComponent } from './bc/bc.component';
import { BlComponent } from './bl/bl.component';
import { BrComponent } from './br/br.component';
import { BretourComponent } from './bretour/bretour.component';
import { FactureComponent } from './facture/facture.component';
import { FamilleArticleComponent } from './famille-article/famille-article.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: HomeComponent, children:[
    {path:'homeapp', component: HomeappComponent},
  {path:'article', component: ArticleComponent},
  {path:'famille-article', component: FamilleArticleComponent},
  {path:'fournisseur', component: FournisseurComponent},
  {path:'client', component:ClientComponent},
  {path:'avoir', component: AvoirComponent},
  {path:'bc', component: BcComponent},
  {path:'bl', component: BlComponent},
  {path:'br', component: BrComponent},
  {path:'bretour', component: BretourComponent},
  {path:'facture', component: FactureComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { InformationComponent } from './information-component/information-component';
import { FirstComponent } from './information-component/first-component/first-component';
import { SecondComponent } from './information-component/second-component/second-component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  {path: 'information', component: InformationComponent,
children:
[
  {path:'component1', component: FirstComponent},
  {path:'component2', component: SecondComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

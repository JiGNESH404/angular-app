import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { InformationComponent } from './information-component/information-component';
import { FirstComponent } from './information-component/first-component/first-component';
import { SecondComponent } from './information-component/second-component/second-component';
import { FourthComponent } from './information-component/fourth-component/fourth-component';
import { ThirdComponent } from './information-component/third-component/third-component';
import { FifthComponent } from './information-component/fifth-component/fifth-component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  {path: 'information/:id', component: InformationComponent,
children:
[
  {path:'component1', component: FirstComponent},
  {path:'component2', component: SecondComponent},
  {path:'component3', component: ThirdComponent},
  {path:'component4', component: FourthComponent},
  {path:'component5', component: FifthComponent},

]},
{path:'**', redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

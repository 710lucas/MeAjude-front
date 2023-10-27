import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CampanhaDetailsComponent } from './campanha-details/campanha-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CampanhaCreatorComponent } from './campanha-creator/campanha-creator.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "home", component: HomeComponent},
  {path: "campanhas/:id", component: CampanhaDetailsComponent},
  {path: "sign-up", component: SignUpComponent},
  {path: "add-campanha", component: CampanhaCreatorComponent},
  {path: "", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

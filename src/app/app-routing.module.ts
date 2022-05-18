import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingListComponent } from './rating-list/rating-list.component';
import { SurvayComponent } from './survay/survay.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'ratings', component: RatingListComponent},
  {path: 'welcome', component: WelcomeComponent},

  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'survay',component:SurvayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

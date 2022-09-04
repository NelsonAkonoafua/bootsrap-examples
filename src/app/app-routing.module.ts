import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
   
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'about', component:AboutComponent}, 
  {path: 'skills', component:SkillsComponent},
  {path: 'experience', component:ExperienceComponent},
  {path: 'contact', component:ContactComponent},
  {path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]
})
export class AppRoutingModule { }


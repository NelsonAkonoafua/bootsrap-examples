import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  
  {path: 'about', component:AboutComponent},
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  {path: 'skills', component:SkillsComponent},
  { path: '', redirectTo: '/skills', pathMatch: 'full' },
  {path: 'experience', component:ExperienceComponent},
  { path: '', redirectTo: '/experience', pathMatch: 'full' },
  {path: 'contact', component:ContactComponent},
  { path: '', redirectTo: '/contact', pathMatch: 'full' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

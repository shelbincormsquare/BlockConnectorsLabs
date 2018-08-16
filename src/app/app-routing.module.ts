import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  // Main redirect
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: PublicLayoutComponent,
    children: [
      { path: 'home', component: HomepageComponent },
    ]
  },

  // Handle all other routes
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

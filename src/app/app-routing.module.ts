import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/global/componenets/home/home.component';
import { ContactComponent } from './modules/global/componenets/contact/contact.component';
import { AboutComponent } from './modules/global/componenets/about/about.component';
import { LoginComponent } from './shared/componenets/login/login.component';
import { DisplayLogsComponent } from './shared/componenets/display-logs/display-logs.component';
import { TestLogManagerComponent } from './shared/componenets/test-log-manager/test-log-manager.component';
import { PageNotFoundComponent } from './shared/componenets/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'display-logs',
    component: DisplayLogsComponent
  },
  {
    path: 'test-log-manager',
    component: TestLogManagerComponent
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

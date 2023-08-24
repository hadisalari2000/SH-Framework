import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { PostsModule } from './modules/posts/posts.module';
import { UaaModule } from './modules/uaa/uaa.module';
import { GlobalModule } from './modules/global/global.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './modules/global/componenets/home/home.component';
import { AboutComponent } from './modules/global/componenets/about/about.component';
import { ContactComponent } from './modules/global/componenets/contact/contact.component';
import { AlertComponent } from './shared/componenets/alert/alert.component';
import { LoginComponent } from './shared/componenets/login/login.component';
import { NavbarComponent } from './shared/componenets/navbar/navbar.component';
import { DisplayLogsComponent } from './shared/componenets/display-logs/display-logs.component';
import { PageNotFoundComponent } from './shared/componenets/page-not-found/page-not-found.component';
import { TestLogManagerComponent } from './shared/componenets/test-log-manager/test-log-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AlertComponent,
    LoginComponent,
    NavbarComponent,
    DisplayLogsComponent,
    PageNotFoundComponent,
    TestLogManagerComponent,
  ],
  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    UaaModule,
    PostsModule,
    GlobalModule,
    
    //این باید آخرین ماژول باشد برای اینکه برای
    //Routing
    //داستان پیش نیاد
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

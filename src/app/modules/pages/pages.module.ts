import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FolderDetailComponent } from './components/folder-detail/folder-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [WelcomeComponent, LoginComponent, HomeComponent, FolderDetailComponent, RegisterComponent]
})
export class PagesModule { }

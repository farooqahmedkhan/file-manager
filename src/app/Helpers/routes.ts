import { Routes, ROUTES } from '@angular/router';
import { FileListComponent } from '../file-list/file-list.component';
import { WelcomeComponent } from '../modules/pages/components/welcome/welcome.component';
import { HomeComponent } from '../modules/pages/components/home/home.component';
import { LoginComponent } from '../modules/pages/components/login/login.component';
import { FolderDetailComponent } from '../modules/pages/components/folder-detail/folder-detail.component';
import { RegisterComponent } from '../modules/pages/components/register/register.component';

export const routes: Routes = [    
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'folder/:id', component: FolderDetailComponent },
    { path: '', component: WelcomeComponent }
];
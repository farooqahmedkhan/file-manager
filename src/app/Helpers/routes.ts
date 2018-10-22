import { Routes, ROUTES } from '@angular/router';
import { FileListComponent } from '../file-list/file-list.component';

export const routes: Routes = [
    { path: 'folder/:id', component: FileListComponent},
    { path: '', component: FileListComponent}
];
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FileListComponent } from './file-list/file-list.component';
import { CurrentUploadsComponent } from './current-uploads/current-uploads.component';
import { FileRowComponent } from './file-row/file-row.component';
import { CurrentUploadItemComponent } from './current-upload-item/current-upload-item.component';
import { environment } from '../environments/environment.prod';
import { FirebaseService } from './services/firebase.service';
import { DropzoneDirective } from './dropzone.directive';
import { AppRouterModule } from './modules/app-router/app-router.module';
import { PagesModule } from './modules/pages/pages.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FileListComponent,
    CurrentUploadsComponent,
    FileRowComponent,
    CurrentUploadItemComponent,
    DropzoneDirective
  ],
  imports: [
    BrowserModule,
    SuiModule,
    AngularFireModule.initializeApp(environment.firebase.config),       
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MomentModule,
    FormsModule,
    RouterModule,
    AppRouterModule,
    PagesModule
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  
}

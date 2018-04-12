import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { environment} from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';
import { UploadComponent } from './upload/upload.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuard } from './services/authentication-guard.service';
import { UploadService } from './services/upload.service';
import { ImageService } from './services/image.service';

import { appRoutes } from '../routes';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ProfileComponent,
    GalleryComponent,
    AdminComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
    
 ],
  providers: [AuthenticationGuard,
    AuthenticationService,
    ImageService,
    UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }

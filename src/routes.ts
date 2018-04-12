import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { UploadComponent } from './app/upload/upload.component';
import { AppComponent } from './app/app.component';
import { ProfileComponent } from './app/profile/profile.component';
//import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { AdminComponent } from './app/admin/admin.component';
import { MessageComponent } from './app/message/message.component';
import { AuthenticationGuard } from './app/services/authentication-guard.service';

export const appRoutes: Routes = [
    { path:'home', component: AppComponent },
    { path:'profile', component:ProfileComponent},
    {  path:'message',component:MessageComponent},
    { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]},
    { path: '', redirectTo: '/', pathMatch: 'full'},
    { path: 'gallery', component: GalleryComponent},
    { path: 'login', component: AdminComponent}
];
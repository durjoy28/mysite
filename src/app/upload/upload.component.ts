import { Component, OnInit } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { AuthenticationService } from '../services/authentication.service';
import { Upload } from '../models/upload.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as _ from 'lodash'; // to help loop over files more succinctly

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit{

  files: FileList;
  upload: Upload;
  user: Observable<firebase.User>;
  constructor(private uploadService: UploadService, private authService: AuthenticationService, private router: Router) { }
   
  ngOnInit() {
    this.user = this.authService.authUser();
  }

  handleFiles(event) {
    this.files = event.target.files;
  }

  uploadFiles() {
    const filesToUpload = this.files;
    const filesIdx = _.range(filesToUpload.length);
    _.each(filesIdx, (idx) => {
      // console.log(filesToUpload[idx]);
      this.upload = new Upload(filesToUpload[idx]);
      this.uploadService.uploadFile(this.upload);
    });
  }
  logOut() {
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }
}

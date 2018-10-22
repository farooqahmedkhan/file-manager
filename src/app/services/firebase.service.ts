import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { UploadHandler } from '../interfaces/upload-handler.interface';
import { environment } from '../../environments/environment';
import { AngularFireDatabase } from '@angular/fire/database';
import { FSObject } from '../interfaces/user-file.interface';
import { FirebaseAuth } from '@angular/fire';
import { of } from 'rxjs';
import { CONSTANTS } from '../interfaces/constants';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseAuthUser: any = null;
  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) {}

  // login(){ this.db.database.app.auth().signInAnonymously().then((v: firebase.auth.UserCredential) => this.firebaseAuthUser = v);}

  uploadFile(path: string, data: any): UploadHandler {     
    return { 
      File: { Data: data, StorageRef: this.storage.ref(environment.firebase.base_folder + path) },
      Task: this.storage.upload(environment.firebase.base_folder + path, data) 
    };
  }

  /**
   * 
   * @param path Get files list from a specific folder
   */
  getFiles(path: string){ return this.db.list<any>('files');}  

  /**
   * 
   * @param userFile The file object that need to be saved
   */
  saveFile(userFile: FSObject) { this.db.list<any>('files').set(userFile.uuid, userFile);}  
  
  /**
   * 
   * @param baseFolder Parent Folder, NULL if it is on root level
   * @param folderName Folder name
   */
  createFolder(baseFolder: string, folderName) { this.saveFile(FSObject.createFolder(baseFolder, folderName));}

  /**
   * 
   * @param userFile File or Folder that needs to be removed
   */
  remove(userFile: FSObject) {         
    let arr = [];
    
    if(userFile.type == CONSTANTS.FS_OBJECT_TYPE.FOLDER){
      arr.push(this.storage.storage.refFromURL(userFile.download_url).delete()); // delete file from firebase storage
    }

    arr.push(this.db.list<any>('files').remove(userFile.uuid)); // delete file from firebase realtime database
    
    return Promise.all(arr);
  }
}

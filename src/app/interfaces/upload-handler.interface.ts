import { AngularFireUploadTask, AngularFireStorageReference } from "@angular/fire/storage";

export interface UploadHandler {
    File: {
        Data: any,
        StorageRef: AngularFireStorageReference
    },
    Task: AngularFireUploadTask
}
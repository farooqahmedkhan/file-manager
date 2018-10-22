import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FileSizeHelper } from '../Helpers/filesize';
import { FirebaseService } from '../services/firebase.service';
import { UploadHandler } from '../interfaces/upload-handler.interface';
import { CONSTANTS } from '../interfaces/constants';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { finalize } from 'rxjs/operators';
import { FSObject } from '../interfaces/user-file.interface';

@Component({
  selector: 'app-current-upload-item',
  templateUrl: './current-upload-item.component.html',
  styleUrls: ['./current-upload-item.component.css']
})
export class CurrentUploadItemComponent implements OnInit, OnChanges {
  public _file: File = null;
  public UploadStatus: number = CONSTANTS.UPLOAD_FILE_STATUS.NOT_APPLICABLE;
  private uploadHandler: UploadHandler = null;
  private _uploadedBytes: string = '0MB';
  private _uploadPercentage: number = 0;
  private userFile: FSObject;

  @Input('file-data') fileData: any;
  @Output('outbound-listener') outBoundListener = new EventEmitter();

  constructor(private uploadService: FirebaseService) {}

  ngOnInit() {
    this.UploadStatus = CONSTANTS.UPLOAD_FILE_STATUS.IN_PROGRESS;
    this.uploadHandler = this.uploadService.uploadFile(this.FileName, this._file);    

    // file upload progress & formatting
    this.uploadHandler.Task.percentageChanges().subscribe((i: number) => {    
      this._uploadedBytes = FileSizeHelper(this._file.size * (i / 100)).human('si');
      this._uploadPercentage = Math.round(i);      
      if(this._uploadPercentage == 100) { this.UploadStatus = CONSTANTS.UPLOAD_FILE_STATUS.COMPLETE;}
    });

    // error handler
    this.uploadHandler.Task
    .catch((a: Error) => this.UploadStatus = CONSTANTS.UPLOAD_FILE_STATUS.FAILED)
    .then((success: any) => {
      this.uploadHandler.File.StorageRef.getDownloadURL().subscribe((v: any) => {
        this.userFile.download_url = v;
        this.userFile.size = this.FileSize;
        this.uploadService.saveFile(this.userFile);      
        this.outBoundListener.emit({type: 'upload-complete'});
      }); 
    });        
  }

  ngOnChanges(simpleChanges: SimpleChanges){ 
    this._file = simpleChanges.fileData.currentValue;
    this.userFile = new FSObject(this._file);    
  }

  // computed
  get FileName() { return this._file.name;}
  get FileSize() { return FileSizeHelper(this._file.size).human('si');}
  get DisplayName() { let fileNameArr = this.FileName.split('.'); return fileNameArr[0].substr(0, 25) + '--.' + fileNameArr[1];}
  get TotalUploadedSize(){ return this._uploadedBytes;}    
  get TotalUploadedPercentage() { return this._uploadPercentage;}
}

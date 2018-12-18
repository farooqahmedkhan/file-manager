import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FSObject } from '../interfaces/user-file.interface';
import { IconHelper } from '../Helpers/icons';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  public fileList: FSObject[] = [];
  public searchString: string = '';
  private currentFolder: string = '';
  private _fileListBKP: FSObject[] = [];
  public isLoadingFileList: boolean = false;
  public checkUncheckAllFiles: boolean = false;
  public fileRowComponentData: any = {};
  public BreadCrumbs: FSObject[] = [];

  constructor(private uploadService: FirebaseService) { }
  ngOnInit() { this.refreshData('');}

  checkAllFiles(e: any){ this.fileList.forEach((v: FSObject, i: number, arr: FSObject[]) => v.checked = this.checkUncheckAllFiles);}
  get SelectedFiles(){ return this.fileList.filter((v: FSObject, i: number, arr: FSObject[]) => v.checked); }

  public search(event: any){
    switch(event.keyCode){
      case 13:
        if(this.searchString.length > 0)
          this.fileList = this._fileListBKP.filter((f) => f.name.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1);
        else
          this.fileList = this._fileListBKP
        break;
      default:
        console.log(event)
        event.preventDefault();
        return false;
    }
  }

  refreshData(base_folder: any){
    this.isLoadingFileList = true;
    
    let list = this.uploadService.getFiles(base_folder);    
    list.valueChanges()
    .subscribe((resArray: FSObject[]) => {
      this.isLoadingFileList = false;
      this._fileListBKP = this.fileList = resArray;

      this.fileList.forEach((f) => console.log("File Type => ", f.type)); // just logs all file types
    });
  }

  /**
   * Utility functions visible on grid header
   */

   public AddNewFolder(event: any){     
     // open a prompt and take folder name
     let folderName = prompt('Please enter folder name', 'My Folder');
     if(folderName.length > 0)
       this.uploadService.createFolder(this.currentFolder, folderName);      // creates folder in firebase realtime db
   }

   public RemoveFileListItem(event: any){
     if(confirm('This will permanently delete selected files from database. Do you confirm?')){       
       let selectedFiles = this.fileList.filter((f) => f.checked);       
       selectedFiles.forEach((v, i, src) => { 
         this.uploadService.remove(v).then((res) => console.log('Remove Item Response =>', res));
       });
     }
   }

   public getIconName(fileType: string){ return IconHelper.getFileIcon(fileType);}   
}

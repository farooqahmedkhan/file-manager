import { UUID } from 'angular2-uuid';
import { IconHelper } from '../Helpers/icons';

/**
 * File System Object, this can be a File OR Folder
 */
export class FSObject {
    uuid: string;           // unique file identifier
    type: string;           // file extension
    user: string;           // user information
    size: string;           // file size in bytes
    name: string;           // file name
    checked: boolean;       // temprary variable for file select/un-select
    storage_ref: any;       // firebase storage reference
    last_modified: number;  // timestamp
    download_url: string;   // file download URL
    root_reference: string;  // support for file/folder heirarchy

    constructor(file: File){ 
        if(file != null){
            Object.assign(this, { 
                uuid: UUID.UUID(),
                name: file.name,
                type: (file.type || file.name.split('.').pop()),
                last_modified: file.lastModified,
                root_reference: ""
            });
        }       
    }

    static createFolder(base: string, name: string): FSObject {
        let folderObject = new FSObject(null);        
        
        folderObject.size = '-';        
        folderObject.name = name;
        folderObject.type = 'folder';
        folderObject.download_url = '';        
        folderObject.uuid = UUID.UUID();
        folderObject.root_reference = base;                
        folderObject.last_modified = Date.now();        
        
        return folderObject;
    }

    public get fileIcon() { return IconHelper.getFileIcon(this.type);}
}
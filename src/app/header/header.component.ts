import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  
  public Data: any = { UploadingFiles: false}    
  @Input('inbound-listener') inBoundListener: any;
  @Output('outbound-listener') outBoundListener = new EventEmitter();
  
  constructor() { }
  
  ngOnInit() { }
  
  ngOnChanges(changes: SimpleChanges): void {    }

  selectFiles(event: any){
    let files = event.target.files;
    this.Data.UploadingFiles = true;
    this.outBoundListener.emit({ type: environment.component_events.INIT_FILE_UPLOAD,data: files});    
  }
}

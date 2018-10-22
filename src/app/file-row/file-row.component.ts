import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { FSObject } from '../interfaces/user-file.interface';

@Component({
  selector: 'app-file-row',
  templateUrl: './file-row.component.html',
  styleUrls: ['./file-row.component.css']
})
export class FileRowComponent implements OnInit, OnChanges {  
  public file: FSObject;
  @Input('file-data') fileData: any;
  @Output('outbound-listener') outBoundListener = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(simpleChanges: SimpleChanges) { this.file = simpleChanges.fileData.currentValue;}
}

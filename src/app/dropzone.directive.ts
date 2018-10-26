import { Directive, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Directive({
  selector: '[app-drop-zone]'
})
export class DropzoneDirective implements OnInit {    
  @Output('outbound-listener') outBoundListener = new EventEmitter();
  public self: any;
  constructor(private e: ElementRef) {        
    e.nativeElement.ondrop      = (event) => this.drop(event)
    e.nativeElement.ondragover  = (event) => this.dragOver(event)
    e.nativeElement.ondragenter = (event) => this.dragEnter(event)
    e.nativeElement.ondragleave = (event) => this.dragLeave(event)        
    this.self = this;
  }
  
  ngOnInit(): void { }

  private drop(event: any){    
    let files: File[] = []; // temprary cache for dropped files

    if (event.stopPropagation) {
      event.stopPropagation(); // Stops some browsers from redirecting.
    }
    
    event.currentTarget.classList.remove('over');    // remove the dotted background, once user release the content (drop-end)

    // process dropped items
    if(event.dataTransfer.items){
      for(let i = 0; i< event.dataTransfer.items.length; i++){
        if(event.dataTransfer.items[i].kind == "file"){
          files.push(event.dataTransfer.items[i].getAsFile());
        }
      }

      if(files.length > 0){        
        this.outBoundListener.emit({ type: environment.component_events.INIT_FILE_UPLOAD, data: files});                
      }
    }

    return false;
  }

  private dragOver(e){
      if(e.preventDefault)
          e.preventDefault();    
      
      e.dataTransfer.dropEffect = 'move';
      return false;
  }

  private dragEnter(event: any) {     
    event.currentTarget.classList.add('over');    
  }

  private dragLeave(event: any) {
    console.log('drag leave called');
    event.currentTarget.classList.remove('over');    
  }
}

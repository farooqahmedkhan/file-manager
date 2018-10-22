import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'file-manager';  

  /*
   * Component Shared Variables, Only Intended For Data Sharing
   */
  public headerComponentData: any;
  public currentUploadsComponentData: any;

  listenHeaderComponent(event: any){    
    switch(event.type){
      case environment.component_events.INIT_FILE_UPLOAD:
        this.currentUploadsComponentData = event.data;
        break;
      default:
        console.error('Invalid event type');
    }
  }

  listenCurrentUploadsComponent(event: any){
    switch(event.type) {
      default:
        console.error('Invalid event type');
    }
  }

  constructor(){
        
  }
}

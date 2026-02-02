import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSegment, IonLabel, IonSegmentButton, IonSegmentContent, IonSegmentView, IonIcon, IonFooter } from '@ionic/angular/standalone';
import { todoSegment } from '../types';
import { addIcons } from 'ionicons';
import { checkmark,library,playCircle,radio,search,timeOutline,todayOutline, warningOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonContent, IonSegment, IonLabel, IonSegmentButton, IonIcon],
})
export class HomePage {
  constructor() {
    addIcons({checkmark,timeOutline,todayOutline,warningOutline,search,radio,library,playCircle})
  }
  
  todoSegment:todoSegment[]=[
    {id:1,name:"today",value:"Today",icon:"today-outline" ,color:""},
    {id:2,name:"pending",value:"Pending",icon:"time-outline" ,color:""},
    {id:3,name:"overdue",value:"Over Due",icon:"warning-outline" ,color:"warning"},
    {id:4,name:"completed",value:"Completed",icon:"checkmark" ,color:"success"},
  ]
}

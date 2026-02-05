import { Component } from '@angular/core';
import { IonContent, IonSegment, IonLabel, IonSegmentButton, IonIcon, IonButton, IonFab, IonFabButton, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonInput, IonDatetime, IonDatetimeButton, IonList, IonSelect, IonSelectOption, IonTextarea } from '@ionic/angular/standalone';
import { todoSegment } from '../types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent,ReactiveFormsModule, IonSegment, IonLabel, IonSegmentButton, IonIcon, IonButton, IonFab, IonFabButton, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonInput, IonDatetime, IonDatetimeButton, IonList, IonSelect, IonSelectOption, IonTextarea, ɵInternalFormsSharedModule],
})
export class HomePage {
  todoForm:any;
  todoSegment:todoSegment[]=[
    {id:1,name:"today",value:"Today",icon:"today-outline" ,color:"secondary"},
    {id:2,name:"pending",value:"Pending",icon:"time-outline" ,color:"tertiary"},
    {id:3,name:"overdue",value:"Over Due",icon:"warning-outline" ,color:"warning"},
    {id:4,name:"completed",value:"Completed",icon:"checkmark" ,color:"success"},
  ]
  ngOnInit(){
    this.todoForm=new FormGroup({
      task:new FormControl('',[Validators.required]),
      dueDate:new FormControl(Date.now().toString(),[]),
      priority:new FormControl('',[Validators.required]),
      comment:new FormControl('',[]),
    })
  }
  
}

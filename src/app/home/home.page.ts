import { Component, NgModule } from '@angular/core';
import { IonContent, IonSegment, IonLabel, IonSegmentButton, IonIcon, IonButton, IonFab, IonFabButton, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonInput, IonDatetime, IonDatetimeButton, IonList, IonSelect, IonSelectOption, IonTextarea, IonThumbnail } from '@ionic/angular/standalone';
import { todoSegment } from '../types';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { Capacitor } from '@capacitor/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, ReactiveFormsModule, IonSegment, IonLabel, IonSegmentButton, IonIcon, IonButton, IonFab, IonFabButton, IonModal, IonHeader, IonToolbar, IonButtons, IonTitle, IonItem, IonInput, IonDatetime, IonDatetimeButton, IonList, IonSelect, IonSelectOption, IonTextarea, ɵInternalFormsSharedModule, IonThumbnail],
})
export class HomePage {
  todoForm!:FormGroup;
  date:any;
  todoSegment:todoSegment[]=[
    {id:1,name:"today",value:"Today",icon:"today-outline" ,color:"secondary"},
    {id:2,name:"pending",value:"Pending",icon:"time-outline" ,color:"tertiary"},
    {id:3,name:"overdue",value:"Over Due",icon:"warning-outline" ,color:"warning"},
    {id:4,name:"completed",value:"Completed",icon:"checkmark" ,color:"success"},
  ]
  ngOnInit(){
    this.todoForm=new FormGroup({
      task:new FormControl('',[Validators.required,Validators.minLength(5)]),
      dueDate:new FormControl( new Date().toISOString()),
      priority:new FormControl('',[Validators.required]),
      comment:new FormControl(''),
      image:new FormControl(''),
    })
  }
  async takePicture() {
    const isWeb = Capacitor.getPlatform() === 'web';
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: isWeb ? CameraSource.Photos : CameraSource.Camera,
      allowEditing: !isWeb,
    });

    if (!image.webPath) return;
    this.todoForm.get('image')?.setValue(image.webPath);
  }
  getTask(){
    if (this.todoForm.valid && this.todoForm.get('task')?.value.trim()) {
      console.log(this.todoForm.value)
    }
  }
  trimValue(name: string) {
  const control = this.todoForm.get(name);
  if (control) {
    const val = control.value as string;
    if (val) {
      const trimmed = val.trim();
      control.setValue(trimmed);
    }
  }
}

  
}

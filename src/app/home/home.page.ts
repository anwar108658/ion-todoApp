import { Component } from '@angular/core';
import { IonContent, IonSegment, IonLabel, IonSegmentButton, IonIcon, IonButton, IonHeader, IonToolbar } from '@ionic/angular/standalone';
import { todoSegment } from '../types';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonContent, IonSegment, IonLabel, IonSegmentButton, IonIcon, IonButton, IonHeader, IonToolbar],
})
export class HomePage {
  public imageSrc: string[] = [''];
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source:CameraSource.Camera,
    });
    const imageUrl = image.webPath;
    this.imageSrc.push(imageUrl!);
  };
  
  todoSegment:todoSegment[]=[
    {id:1,name:"today",value:"Today",icon:"today-outline" ,color:""},
    {id:2,name:"pending",value:"Pending",icon:"time-outline" ,color:""},
    {id:3,name:"overdue",value:"Over Due",icon:"warning-outline" ,color:"warning"},
    {id:4,name:"completed",value:"Completed",icon:"checkmark" ,color:"success"},
  ]
}

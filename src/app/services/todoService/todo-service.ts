import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public imageSrc: string[] = [''];
  async takePicture() {
    const isWeb = Capacitor.getPlatform() === 'web';
    const image = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: isWeb ? CameraSource.Photos : CameraSource.Camera,
      allowEditing: !isWeb,
    });

    if (!image.webPath) return;
    this.imageSrc.push(image.webPath);
  }
}

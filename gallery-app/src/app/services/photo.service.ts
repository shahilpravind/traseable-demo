import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

import { Plugins, CameraResultType, Capacitor, FilesystemDirectory, 
  CameraPhoto, CameraSource } from '@capacitor/core';

const { Camera, Filesystem, Storage } = Plugins;

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  public photos: Photo[] = [];

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private http: HttpClient) {  }

  async openToast() {
    const toast = await this.toastCtrl.create({
      message: "Unable to connect to server",
      duration: 5000
    });

    toast.present();
  }

  public addPhotoToList(imagePath:string, caption:string, date:string) {
    let dateObj = new Date(date);
    date = dateObj.getDate() + " " + monthNames[dateObj.getMonth()] + " " + dateObj.getFullYear();
    
    this.photos.push({
      filepath: imagePath,
      caption: caption,
      date: date,
    });
  }

  public pushPhotoToList(imagePath:string, caption:string, date:string) {
    let dateObj = new Date(date);
    date = dateObj.getDate() + " " + monthNames[dateObj.getMonth()] + " " + dateObj.getFullYear();
    
    this.photos.unshift({
      filepath: imagePath,
      caption: caption,
      date: date,
    });
  }

  public async takePhoto() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    const caption = await this.presentPrompt().then(data => { return data; });

    this.sendPost(capturedPhoto.webPath, caption);
  }

  public async sendPost(webPath:string, caption:string) {
    const blob = await fetch(webPath).then((resp:any) => resp.blob());
    const formData = new FormData();
    formData.append('image', blob);
    formData.append('caption', caption);

    this.http.post('http://localhost:8000/api/gallery/new', formData).subscribe((resp:any) => {
      this.pushPhotoToList(resp.data.imagePath, resp.data.caption, resp.data.created_at);
    }, (error) => {
      console.log(error);
      this.openToast();
    });
  }

  private async presentPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Caption',
      inputs: [
        {
          type: 'text',
          name: 'caption'
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: (data) => {
            return data.caption;
          }
        }
      ]
    });

    let cap:string;
    await alert.present();
    await alert.onDidDismiss().then((data) => { cap = data.data.values.caption });
    return cap;
  }
}

interface Photo {
  filepath: string;
  caption: string;
  date: string;
}

import { Component } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from '../services/photo.service';
import { PostModalComponent } from 'src/app/post-modal/post-modal.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  photos = this.photoService.photos;
  nextUrl = null;

  constructor(public photoService: PhotoService, private http: HttpClient, private modalCtrl: ModalController, private themeService: ThemeService, private plt: Platform) {
    this.getGallery();
  }

  public async getGallery() {
    await this.http.get('http://localhost:8000/api/gallery/').subscribe((resp:any) => {
      this.nextUrl = resp.links.first;
      this.getNextPage();
    }, (error) => {
      this.photoService.openToast();
    });
  }

  public getNextPage() {
    if (this.nextUrl !== null) {
      this.http.get(this.nextUrl).subscribe((resp:any) => {
        for (let key in resp.data) {
          this.photoService.addPhotoToList(resp.data[key].imagePath, resp.data[key].caption, resp.data[key].created_at);
        }
  
        this.nextUrl = resp.links.next;
      }, (error) => {
        this.photoService.openToast();
      });
    }
  }

  public async loadData(event) {
    await this.getNextPage();
    event.target.complete();
  }

  addNewImage() {
    this.photoService.takePhoto();
  }

  async postPreview(img, date, caption) {
      this.modalCtrl.create({
        component: PostModalComponent,
        componentProps: { img: img, date: date, caption: caption }
      }).then(modalEl => {
        modalEl.present();
      });
  }

  toggleDarkMode() {
    this.themeService.toggleAppTheme();
  }
}

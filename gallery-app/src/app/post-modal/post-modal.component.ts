import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss'],
})
export class PostModalComponent implements OnInit {
  @Input() img: string;
  @Input() date: string;
  @Input() caption:string;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}

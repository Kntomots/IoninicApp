import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {

  dynamicContent: string = 'Initial Content';
  reverseContent: boolean = false;
  showCard1Flag = false;
  showCard2Flag = false;

  showCard1() {
    this.showCard1Flag = true;
    this.showCard2Flag = false;
  }

  showCard2() {
    this.showCard1Flag = false;
    this.showCard2Flag = true;
  }

  changeContent() {
    if (this.reverseContent) {
    this.dynamicContent = '<ion-card><ion-card-header><ion-card-title>Card Title</ion-card-title><ion-card-subtitle>Card Subtitle</ion-card-subtitle></ion-card-header><ion-card-content>Heres a small text description for the card content. Nothing more, nothing less. </ion-card-content></ion-card>'
      this.reverseContent = false;
    } else {
      this.dynamicContent = 'New Content';
      this.reverseContent = true;
    }
  }
  
}



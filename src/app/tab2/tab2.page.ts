import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent]
})

export class Tab2Page {

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

}

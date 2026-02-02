import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonFooter, IonHeader, IonTabs, IonTabBar, IonTabButton, IonIcon, IonTab, IonToolbar, IonTitle, IonContent, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmark, library, playCircle, radio, search, timeOutline, todayOutline, warningOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, IonHeader, IonToolbar, IonContent],
})
export class AppComponent {
  constructor() {
    addIcons({checkmark,timeOutline,todayOutline,warningOutline,search,radio,library,playCircle})
  }
}

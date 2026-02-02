import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon , IonLabel]
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

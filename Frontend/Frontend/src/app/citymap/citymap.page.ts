import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavigationService } from '../service/navigation.service';
import { ExploreContainerComponent } from "../explore-container/explore-container.component";

@Component({
    selector: 'app-citymap',
    templateUrl: './citymap.page.html',
    styleUrls: ['./citymap.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ExploreContainerComponent]
})
export class CitymapPage implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit():void {

  }
  navigate(location: string) {
    this.navigationService.navigate(location);
  }
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lookposts',
  templateUrl: './lookposts.page.html',
  styleUrls: ['./lookposts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LookpostsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

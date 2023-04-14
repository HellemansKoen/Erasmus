import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-managebins',
  templateUrl: './managebins.page.html',
  styleUrls: ['./managebins.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ManagebinsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

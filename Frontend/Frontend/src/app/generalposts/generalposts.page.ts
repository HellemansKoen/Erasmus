import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-generalposts',
  templateUrl: './generalposts.page.html',
  styleUrls: ['./generalposts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class GeneralpostsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

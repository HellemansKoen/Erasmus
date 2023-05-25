import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cityposts',
  templateUrl: './cityposts.page.html',
  styleUrls: ['./cityposts.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CitypostsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

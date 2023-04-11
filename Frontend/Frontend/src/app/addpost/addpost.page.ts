import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GarbagebinService } from '../service/garbagebin.service';
import { GarbageBin } from '../models/Garbagebin';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddpostPage implements OnInit {

  constructor( private garbagebinService: GarbagebinService) { }

  ngOnInit() {
  }
  save(){
    var bin = new GarbageBin("20","15");
    var temp = this.garbagebinService.addBin(bin);
    console.log(temp);
    console.log(bin);
  }

}

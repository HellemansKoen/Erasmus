import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GarbagebinService } from '../service/garbagebin.service';
import { VoteService } from '../service/vote.service';

@Component({
  selector: 'app-singlebininfo',
  templateUrl: './singlebininfo.page.html',
  styleUrls: ['./singlebininfo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SinglebininfoPage implements OnInit {

  binId = 0

  constructor(private garbagebinService: GarbagebinService, private voteService: VoteService) {
  }

  ngOnInit() {
    this.binId = this.garbagebinService.binId
  }

  confirm() {
    this.voteService.vote("UP", localStorage.getItem("jwtToken") || "", this.binId)
  }

  decline() {   
    this.voteService.vote("DOWN", localStorage.getItem("jwtToken") || "", this.binId)
  }
}

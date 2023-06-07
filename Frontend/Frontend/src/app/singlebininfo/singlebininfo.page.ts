import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GarbagebinService } from '../service/garbagebin.service';
import { VoteService } from '../service/vote.service';
import { NavigationService } from '../service/navigation.service';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-singlebininfo',
  templateUrl: './singlebininfo.page.html',
  styleUrls: ['./singlebininfo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SinglebininfoPage implements OnInit {

  binId = 0
  map: Leaflet.Map | undefined
  cat = ""
  
  constructor(private garbagebinService: GarbagebinService, private voteService: VoteService, private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.binId = this.garbagebinService.binId;
      let text = this.garbagebinService.kindBin.toString().toLowerCase();
      this.cat = text.charAt(0).toUpperCase() + text.substring(1);
      let empty = document.getElementById("empty")
      let full = document.getElementById("full")
      if (empty != null && full != null) {
        if (this.garbagebinService.binFull == "empty") {
          empty.style.display = "none"
          full.style.display = "block"
        } else {
          empty.style.display = "block"
          full.style.display = "none"
      }
    }
  }

  confirm() {
    this.voteService.vote("UP", localStorage.getItem("jwtToken") || "", this.binId).subscribe()
    this.navigate("citymap")
  }

  decline() {
    this.voteService.vote("DOWN", localStorage.getItem("jwtToken") || "", this.binId).subscribe()
    this.navigate("citymap")
  }

  full() {
    this.garbagebinService.full("full", this.binId).subscribe()
  }

  empty() {
    this.garbagebinService.full("empty", this.binId).subscribe()
  }

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap(): void {
    this.map?.remove();
    this.map = Leaflet.map('map', {
      minZoom: 15, maxZoom: 18
    }).setView([Number(this.garbagebinService.latSingleBin), Number(this.garbagebinService.lngSingleBin)], 20);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    this.map.locate({ setView: false, watch: false })
      .on('locationfound', (e) => {
        console.log(e.accuracy)
        this.currentBin();
      })
      .on('locationerror', (e) => {
        console.log(e);
        alert("Location access denied")
      })
  }
  currentBin() {
    if (this.map != null) {
      console.log(132);
      var myIcon = Leaflet.icon({
        iconUrl: '../../assets/images/FullbinPointer.png',
        iconSize: [27, 43]
      });
      Leaflet.marker([Number(this.garbagebinService.latSingleBin), Number(this.garbagebinService.lngSingleBin)], { icon: myIcon }).addTo(this.map);
    }
  }

  navigate(url: string) {
    this.navigationService.navigate(url);
  }
}

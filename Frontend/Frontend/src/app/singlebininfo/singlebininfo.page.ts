import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GarbagebinService } from '../service/garbagebin.service';
import { VoteService } from '../service/vote.service';
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

  constructor(private garbagebinService: GarbagebinService, private voteService: VoteService) {
  }

  ngOnInit() {
    this.binId = this.garbagebinService.binId;
  }

  confirm() {
    this.voteService.vote("UP", localStorage.getItem("jwtToken") || "", this.binId).subscribe()
  }

  decline() {
    this.voteService.vote("DOWN", localStorage.getItem("jwtToken") || "", this.binId).subscribe()
  }

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap(): void {
    this.map?.remove();
    this.map = Leaflet.map('map', {
      minZoom: 15, maxZoom: 18,
    }).setView([Number(this.garbagebinService.latSingleBin), Number(this.garbagebinService.lngSingleBin)], 20);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);
    this.map.locate({ setView: false, watch: false })
      .on('locationfound', (e) => {
        var latlng = Leaflet.latLng(e.latlng.lat, e.latlng.lng);
        this.map?.setView(latlng, 18);
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
        iconUrl: '../../assets/images/binPointer.png',
        iconSize: [50, 50]
      });
      Leaflet.marker([Number(this.garbagebinService.latSingleBin), Number(this.garbagebinService.lngSingleBin)], { icon: myIcon }).addTo(this.map);
    }
  }
}
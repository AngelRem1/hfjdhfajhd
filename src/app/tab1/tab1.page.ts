import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, AfterContentInit {
  map;
  @ViewChild('mapElement') mapElement;
  constructor() {

  }



  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
  }
}
import { Component, OnInit } from "@angular/core";
import * as L from "leaflet";
import { LayerGroup, tileLayer } from "leaflet";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  options: L.MapOptions = {
    zoom: 8,
    center: L.latLng(49.8567, -100.9651),
    layers: [
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
    ]
  };
  map: L.Map;
  markersLayer = new L.LayerGroup();
  sMarkersLayer: LayerGroup;
  zoomLevel = 9;
  iconUrl = "https://decisionfarm.ca/assets/images/marker-icon-2x.png";
  stations = [
    {
      id: "CAMBOT0548",
      name: "Kenton (MAFRI)",
      lat: "50.01870",
      lng: "-100.59260",
      installed: 1,
      active: 1,
      province: "MB",
      type: "WIN"
    },
    {
      id: "CAMBSWELKH",
      name: "Elkhorn (WIN)",
      lat: "49.92680",
      lng: "-101.20290",
      installed: 1,
      active: 1,
      province: "MB",
      type: "WIN"
    },
    {
      id: "CAMBSWPRSN",
      name: "Pierson (WIN)",
      lat: "49.17600",
      lng: "-101.27430",
      installed: 1,
      active: 1,
      province: "MB",
      type: "WIN"
    },
    {
      id: "CAMBSWVRDN",
      name: "Virden (WIN)",
      lat: "49.85670",
      lng: "-100.96510",
      installed: 1,
      active: 1,
      province: "MB",
      type: "WIN"
    },
    {
      id: "CASKSCI002",
      name: "Welwyn (WIN)",
      lat: "50.28534",
      lng: "-101.55290",
      installed: 1,
      active: 1,
      province: "SK",
      type: "WIN"
    },
    {
      id: "CASKSCI008",
      name: "Storthoaks (WIN)",
      lat: "49.45841",
      lng: "-101.64184",
      installed: 1,
      active: 1,
      province: "SK",
      type: "SK"
    },
    {
      id: "CASKSCI027",
      name: "Fairlight (WIN)",
      lat: "49.84212",
      lng: "-101.74210",
      installed: 1,
      active: 1,
      province: "SK",
      type: "WIN"
    },
    {
      id: "CAMBECCWEI",
      name: "MELITA (EC)",
      lat: "49.28333",
      lng: "-100.98333",
      installed: "NULL",
      active: "NULL",
      province: "MB",
      type: "EC"
    }
  ];

  createStations() {
    this.sMarkersLayer = new L.LayerGroup();

    for (const s of this.stations) {
      let icon;
      icon = new L.DivIcon({
        html: `<img src='${this.iconUrl}'/> <span>${s.name}</span>`
      });
      const marker = L.marker([s.lat, s.lng], { icon });
      this.sMarkersLayer.addLayer(marker);
    }
    this.markersLayer.addLayer(this.sMarkersLayer);
  }

  onMapReady(map: L.Map) {
    setTimeout(() => {
      map.invalidateSize();
      this.map = map;
      map.addLayer(this.markersLayer);
      this.createStations();
    }, 200);
  }

  ngOnInit() {}
}

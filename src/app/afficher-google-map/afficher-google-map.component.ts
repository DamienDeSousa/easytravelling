import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { } from '@types/googlemaps';
import * as $ from 'jquery';

declare var google: any;

@Component({
  selector: 'app-afficher-google-map',
  templateUrl: './afficher-google-map.component.html',
  styleUrls: ['./afficher-google-map.component.css']
})
export class AfficherGoogleMapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;
  map: any;
  //service: any;

  options = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 0
  };

  @Input() rayon: number;
  @Input() categorie: string;
  
  
  constructor() 
  {
    
  }

  ngOnInit() 
  {
    var _this = this;
    var map;
    if(window.navigator.geolocation)
    {
      
      window.navigator.geolocation.getCurrentPosition(function(pos) {
        var crd = pos.coords;
        map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(crd.latitude, crd.longitude),
          zoom: 15
        });
        //var service = new google.maps.places.PlacesService(_this.map);
      }, this.error, this.options);
    }
    else
    {
      map = new google.maps.Map(document.getElementById('map'), {
        center: new google.maps.LatLng(this.lat, this.lng),
        zoom: 15
      });
    }
  }

  error(err)
  {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    
    for (let property in changes) 
    {
      if(property === 'rayon' || property === 'categorie')
      {
        if(this.rayon != undefined && this.categorie != undefined)
        {
          var _this = this;
          var map; var infowindow; var lat; var lng;
          if(window.navigator.geolocation)
          {
            window.navigator.geolocation.getCurrentPosition(function(pos) {
              var crd = pos.coords;
              lat = crd.latitude;
              lng = crd.longitude;
              map = new google.maps.Map(document.getElementById('map'), {
                center: new google.maps.LatLng(crd.latitude, crd.longitude),
                zoom: 15
              });

              infowindow = new google.maps.InfoWindow();
              var service = new google.maps.places.PlacesService(map);
              service.nearbySearch({
              location: {lat: lat, lng: lng},
              radius: _this.rayon,
              type: _this.categorie
              }, function(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) 
                {
                  for(let place of results)
                  {
                    console.log(place);
                    var placeLoc = place.geometry.location;
                    var marker = new google.maps.Marker({
                      map: map,
                      position: place.geometry.location
                    });
                    
                    google.maps.event.addListener(marker, 'click', function() {
                      infowindow.setContent(place.name);
                      infowindow.open(_this.map, this);
                    });
                  }
                }
              });
            }, this.error, this.options);
          } 
        }
      }
    }
  }
}

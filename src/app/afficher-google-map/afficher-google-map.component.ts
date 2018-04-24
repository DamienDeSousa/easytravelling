import { Component, OnInit, ViewChild, Input, SimpleChanges } from '@angular/core';
import { } from '@types/googlemaps';

declare var google: any;

@Component({
  selector: 'app-afficher-google-map',
  templateUrl: './afficher-google-map.component.html',
  styleUrls: ['./afficher-google-map.component.css']
})
export class AfficherGoogleMapComponent implements OnInit {
  lat: number = 51.678418;
  lng: number = 7.809007;

  @Input() rayon: number;
  @Input() categorie: string;
  
  
  constructor() 
  {
  
  }

  ngOnInit() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(43.071584, -89.380120),
      zoom: 15
    });

    /*var infowindow = new google.maps.InfoWindow();

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: {lat: 43.071584, lng: -89.380120},
      radius: 2000,
      type: 'restaurant'
    }, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) 
      {
        for(let place of results)
        {
          var placeLoc = place.geometry.location;
          var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
          });
          
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
          });
        }
      }
    });*/
  }
  
  ngOnChanges(changes: SimpleChanges) {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng(43.071584, -89.380120),
      zoom: 15
    });

    var infowindow = new google.maps.InfoWindow();

    var service = new google.maps.places.PlacesService(map);
    
    for (let property in changes) 
    {
      if(property === 'rayon' || property === 'categorie')
      {
        if(this.rayon == undefined || this.categorie == undefined)
        {
          console.log('undefined');
        }
        else
        {
          console.log('defini');
          service.nearbySearch({
          location: {lat: 43.071584, lng: -89.380120},
          radius: this.rayon,
          type: this.categorie
          }, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) 
            {
              for(let place of results)
              {
                var placeLoc = place.geometry.location;
                var marker = new google.maps.Marker({
                  map: map,
                  position: place.geometry.location
                });
                
                google.maps.event.addListener(marker, 'click', function() {
                  infowindow.setContent(place.name);
                  infowindow.open(map, this);
                });
              }
            }
          });
        }
          
      }
    }
  }
}

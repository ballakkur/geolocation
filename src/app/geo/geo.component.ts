import { Component, OnInit, AfterViewChecked, } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AppService } from '../app.service';

@Component({
  selector: 'app-geo',
  templateUrl: './geo.component.html',
  styleUrls: ['./geo.component.css']
})
export class GeoComponent implements OnInit{

    location
  constructor(public appservice:AppService) { }

  ngOnInit() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 1
      };
      
function success(pos) {
    var crd = pos.coords;
    // this.location = pos.coords;
  
    console.log('Your current position is:');
    
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
   }
  /* ngAfterViewChecked(){
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
function success(pos) {
    var crd = pos.coords;
    // this.location = pos.coords;
  
    console.log('Your current position is:');
    // this.location = crd;
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);
  } */
}






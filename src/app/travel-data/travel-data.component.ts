import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-travel-data',
  templateUrl: './travel-data.component.html',
  styleUrls: ['./travel-data.component.css']
})
export class TravelDataComponent implements OnInit {

  data: any;
  locations : string[] = [];
  locationData = "";
  constructor(private dataservice : DataServiceService) { 

  }
  ngOnInit(): void {
    this.dataservice.getTravelData().subscribe(result => {
      this.data = result;
      this.data.forEach(cs =>{
        this.locations.push(cs.location);
      })
      console.log(this.locations);
    })
  }

  updateValues(location : string){
    console.log(location);
    this.data.forEach(cs=>{
      if(cs.location == location){
        this.locationData = cs.data;
      }

    })
  }
}

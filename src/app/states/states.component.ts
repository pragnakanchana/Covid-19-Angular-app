import { Component, OnInit , ViewChild} from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { IndiaStateSummary, DistrictData } from '../models/global-data';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  data : IndiaStateSummary[] = [];
  states : string[] = [];
  totalconfirmedSt : number = 0 ;
  totalactiveSt : number =0 ;
  totaldeceasedSt : number = 0;
  totalrecoveredSt : number = 0;
  distdata : DistrictData[] = [];
  constructor(private dataservice : DataServiceService) { }

  ngOnInit(): void {
    this.dataservice.getIndianData().subscribe(result => {
      this.data = result;
      this.data.forEach(cs =>{
        this.states.push(cs.state);
      })

    })


  }

  updateValues(state : string){
    console.log(state);
    this.data.forEach(cs=>{
      if(cs.state == state){
        this.totalconfirmedSt = cs.stConfirmed;
        this.totaldeceasedSt = cs.stDeceased;
        this.totalactiveSt = cs.stActive;
        this.totalrecoveredSt = cs.stRecovered;
        this.distdata = cs.dstData;
      }

    })
  }

  

}

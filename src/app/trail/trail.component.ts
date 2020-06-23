import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';


@Component({
  selector: 'app-trail',
  templateUrl: './trail.component.html',
  styleUrls: ['./trail.component.css']
})
export class TrailComponent implements OnInit {

  data : Object;
  constructor(private dataService : DataServiceService) { }
  xyz : any;
  totalconfirmedInd : number = 0 ;
  totalactiveInd : number =0 ;
  totaldeceasedInd : number = 0;
  totalrecoveredInd : number = 0;
  ngOnInit(): void {
  
    this.dataService.getIndianData()
    .subscribe(
      {
        next : (result) => {     

          console.log(result);
          for(let i of result){
            this.totalconfirmedInd += i.stConfirmed;
            this.totalactiveInd += i.stActive;
            this.totaldeceasedInd += i.stDeceased;
            this.totalrecoveredInd += i.stRecovered;
          }
          console.log(this.totalconfirmedInd);
          console.log(this.totalactiveInd);
          console.log(this.totaldeceasedInd);
          
          
        }
      }
    )
  }

}

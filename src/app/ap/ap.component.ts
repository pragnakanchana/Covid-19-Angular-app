import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-ap',
  templateUrl: './ap.component.html',
  styleUrls: ['./ap.component.css']
})
export class ApComponent implements OnInit {

  totalConfirmed =0;
  totalRecovered =0 ;
  totalDeaths = 0;
  constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {
    
    this.dataService.getGlobalData()
    .subscribe(
      {
        next : (result) => {
          console.log(result);
          this.totalConfirmed = result[14].confirmed;
          this.totalRecovered = result[14].recovered;
          this.totalDeaths = result[14].deaths;
        }
      }
    )
  }

}

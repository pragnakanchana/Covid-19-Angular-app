import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmedGlobal:Number;
  totalRecoveredGlobal: Number;
  totalDeathsGlobal: Number;
  totalConfirmedIndia : Number = 0;
  totalRecoveredIndia: Number = 0;
  totalDeathsIndia: Number = 0;
  data : any;
  info : any;
   datatable = [];
  chart = {
    PieChart : "PieChart",
    ColumnChart : "ColumnChart" , 
    height : 500,
    width : 1125,
    pieHole: 0.4
  }
  
  options: {
    height : 500,
    
  }
  
  color : string;
  constructor(private dataservice : DataServiceService) { }

  //for piechart
  initChart(caseType : string){
    
    this.datatable = [];
    //this.datatable.push(["State" , "Cases"])
    this.info.forEach(cs => {
      let value: number;
      
        if(caseType === "c" && cs.stConfirmed >= 0){
          value= cs.stConfirmed
          this.color = "#131CEC";
          
        }
        if(caseType === "r"  && cs.stRecovered >= 0){
          value = cs.stRecovered
          this.color = "#13EC1F ";
          
        }
        if(caseType === "d" && cs.stDeceased >= 0){
          value = cs.stDeceased
          this.color = "#EC1313";
        }
        this.datatable.push([
          cs.state , value
        ])
    })
    console.log(caseType)
    console.log(this.datatable);
    
    
  }

  ngOnInit(): void {
    

    this.dataservice.getTotalCount().subscribe(result => {
      this.data = result;
      this.totalConfirmedGlobal = this.data.TotalConfirmed;
      this.totalRecoveredGlobal = this.data.TotalRecovered;
      this.totalDeathsGlobal = this.data.TotalDeaths;

    })

    this.dataservice.getIndianData().subscribe(result => {
      this.info = result;
      console.log(this.info);
      this.info.forEach(cs=>{
        
          this.totalConfirmedIndia += cs.stConfirmed;
          this.totalDeathsIndia += cs.stDeceased;
          this.totalRecoveredIndia += cs.stRecovered;
        
      })
      this.initChart('c');
    })
  }

  updateChart(input : HTMLInputElement){
    //console.log(input.value);
    this.initChart(input.value)
    
    
  }
}

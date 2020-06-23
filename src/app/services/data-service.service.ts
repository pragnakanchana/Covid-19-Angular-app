import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { GlobalDataSummary, IndiaStateSummary, DistrictData } from '../models/global-data';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private dataUrl = 'https://corona-andhra-pradesh.herokuapp.com/covid19-ap-dist';
  constructor(private http : HttpClient) { }
  private IndUrl = 'https://api.covid19india.org/v2/state_district_wise.json';
  private globalcounturl = 'https://api.covid19api.com/world/total';
  private traveldata = 'https://www.trackcorona.live/api/travel';
  //for ap totalcases data in apcomponent
  getTravelData(){
    return this.http.get(this.traveldata).pipe(
      map(result =>{
        return result.data;
      })
    )
  }
  getGlobalData(){
    return this.http.get(this.dataUrl ).pipe(
      map(result => {
        let data : GlobalDataSummary[] = [];
        let row = result;
        
        for (let i of row) {
          if(i[0] != 'Name of the District' ){
            data.push({
              district : i[0],
              confirmed : +i[1],
              recovered : +i[2],
              deaths : +i[3],

            })
          }
          
        } 
        return <GlobalDataSummary[]>Object.values(data);
      })
    )
  }
  


  getIndianData(){

    return this.http.get(this.IndUrl ).pipe(
      map(result => {
        let data : IndiaStateSummary[] = [];
        let row = result;
        let x : DistrictData[] = [];
        let sum1 = 0;
        let sum2 = 0;
        let sum3 = 0;
        let sum4 = 0;
        for (let i of row) {
          x = i.districtData;
          sum1 = 0;
          sum2 = 0;
          sum3 =0;
          sum4 = 0;
            for(let j of x){
              sum1 += j.confirmed;
              sum2 += j.active;
              sum3 += j.deceased;
              sum4 += j.recovered;
            }
            data.push({
              state : i.state,
              statecode : i.statecode,
              dstData : i.districtData ,
              stConfirmed : +sum1,
              stActive : +sum2,
              stDeceased : +sum3,
              stRecovered : +sum4
            })

        }  
        
        return <IndiaStateSummary[]>Object.values(data);
        //return result;
      })             
        
    )
    
    
  }
  
  getTotalCount(){
    return this.http.get(this.globalcounturl ).pipe(
      map(result => {
        return result;
      })
    )
  }
  
  
    

}

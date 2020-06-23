export interface GlobalDataSummary{
    district ?: string;
    confirmed ?: number;
    recovered ?: number;
    deaths ?: number;
    
}

export interface IndiaStateSummary{
    state ?: string;
    statecode ?: string ;
    dstData ?: DistrictData[] ;
    stConfirmed ?: number ;
    stActive ?: number ;
    stDeceased ?: number;
    stRecovered ?: number;
}

export interface DistrictData{
    district ?: string;
    active ?: number;
    confirmed ?: number;
    deceased ?: number;
    recovered ?: number;
}
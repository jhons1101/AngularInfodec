import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MockDataService {

  data:any = {};
  fileLoad =  false;

  constructor(private http:HttpClient) {
    
    http.get("../../assets/dataLocal/MOCK_DATA.json")
    .subscribe(resp => {
      this.data = resp;
      this.fileLoad = true;
    });
  }
}

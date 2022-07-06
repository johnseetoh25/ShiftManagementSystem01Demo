import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ShiftHandoverModels } from '../models/shift-handover-models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  // shift handover
  postShiftHandover(data: any){
    return this.http.post<any>("http://localhost:3000/shifthandoverList/", data);
  }

  getShiftHandover(){
    return this.http.get<any>("http://localhost:3000/shifthandoverList/");
  }

  editShiftHandover(data: any, id:number){
    return this.http.put<any>("http://localhost:3000/shifthandoverList/"+id, data);
  }

  getOneShiftHandoverbyID(id: number){
    return this.http.get<any>("http://localhost:3000/shifthandoverList/"+id);
  }

  // Approval Details
  getApprovalDetailsbyID(id: number){
    return this.http.get<ShiftHandoverModels>("http://localhost:3000/shifthandoverList/"+id);
  }


}

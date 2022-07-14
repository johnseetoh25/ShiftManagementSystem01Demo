import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ShiftHandoverModels } from '../models/shift-handover-models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  // shift handover
  postShiftHandover(body: ShiftHandoverModels = <ShiftHandoverModels>{}): Observable<any>{
    return this.http.post("http://localhost:3000/shifthandoverList/", body);
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

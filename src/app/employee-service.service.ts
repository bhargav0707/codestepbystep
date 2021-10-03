import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  apiUrl = 'http://localhost:3000/posts';
  
  constructor(private http : HttpClient) {}
  getList(){
    // console.warn("some data to be shown");
   return this.http.get(this.apiUrl);
  }

  saveEmployee(data: any){
     return this.http.post(this.apiUrl,data);
  }

  deleteEmployee(id:any){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getEmployee(id:any){
    return this.http.get(`${this.apiUrl}/${id}`);
  }
 updateEmployee(id:any,data:any){
   return this.http.put(`${this.apiUrl}/${id}`,data);
 }
}

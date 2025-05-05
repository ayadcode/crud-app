import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) {}
  GetAll() {
    return this.http.get<Employee[]>(this.apiUrl);
  }
  Get(empId: number) {
    return this.http.get<Employee>(this.apiUrl + '/' + empId);
  }
  Create(data: Employee) {
    return this.http.post(this.apiUrl, data);
  }
  Update(data: Employee) {
    return this.http.put(this.apiUrl + '/' + data.id, data);
  }
  Delete(empId: Employee) {
    return this.http.delete(this.apiUrl + '/' + empId);
  }
}

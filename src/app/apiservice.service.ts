import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpData } from './emp-data';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  getData(): Observable<any>{
    return this._http.get('https://mocki.io/v1/5f17fddc-76a9-4722-b3fb-3be840bcb828');
  }
}

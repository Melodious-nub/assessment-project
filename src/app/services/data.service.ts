import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'https://devsutraapi.azurewebsites.net';

  constructor(private http: HttpClient) { }

  // all apis end points handaled here

  login(data: any): Observable<any> {
    return this.http.post(this.baseUrl+'/api/v1/Registration/login', data);
  }
}

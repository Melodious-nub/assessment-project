import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = 'https://devsutraapi.azurewebsites.net';
  private dummyUser = {
    email: 'test@example.com',
    password: 'Admin123',
    token: 'dummy-jwt-token-12345',
  };

  constructor(private http: HttpClient) { }

  // all apis end points handaled here

  // Mock login function
  login(form: any): Observable<{ success: boolean; data?: { token: any } }> {
    const { email, password } = form.value;

    // Check if credentials match the dummy user
    if (email === this.dummyUser.email && password === this.dummyUser.password) {
      return of({
        success: true,
        data: { token: this.dummyUser.token },
      }).pipe(delay(1000)); // Adding a delay to simulate a network call
    } else {
      return of({ success: false }).pipe(delay(1000));
    }
  }
}

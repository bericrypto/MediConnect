import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/mediconnect/models/User';
import { UserRegistrationDTO } from 'src/app/mediconnect/models/UserRegistrationDTO';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/user`;

  constructor(private http: HttpClient) {}

  // Test expects POST -> `${environment.apiUrl}/user/login`
  login(user: Partial<User>): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user);
  }

  // Test expects POST -> `${environment.apiUrl}/user/register` and string response
  createUser(user: UserRegistrationDTO): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/register`, user, {
      responseType: 'text' as 'json',
    });
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}

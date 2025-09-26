import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { User } from "src/app/mediconnect/models/User";
import { UserRegistrationDTO } from "src/app/mediconnect/models/UserRegistrationDTO";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private loginUrl = `${environment.apiUrl}`;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  login(user: Partial<User>): Observable<{ [key: string]: string }> {
    return this.http.post<{ token: string }>(
      `${this.loginUrl}/user/login`,
      user,
      this.httpOptions
    );
  }

  getToken() {
    return localStorage.getItem("token");
  }

  getRole() {
    return localStorage.getItem("role");
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('user_id');
    localStorage.removeItem('doctor_id');
    localStorage.removeItem('patient_id');
  }

  createUser(user: UserRegistrationDTO): Observable<any> {
    return this.http.post<UserRegistrationDTO>(`${this.loginUrl}/user/register`, user);
  }
}

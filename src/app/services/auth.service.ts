import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;  // Auth API base URL

  constructor(private http: HttpClient) {}

  // Login method to authenticate the user and store the token
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  // Check if the user is authenticated (i.e., if the token exists)
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  // Get the authentication token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Logout the user by clearing the token
  logout(): void {
    localStorage.removeItem('token');
  }

  // Optionally, you could create a method to validate JWT on the server
  // validateToken(): Observable<any> {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${this.getToken()}`);
  //   return this.http.get<any>(`${this.apiUrl}/validate-token`, { headers });
  // }
}

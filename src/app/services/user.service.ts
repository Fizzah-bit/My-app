import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // 👈 dummy API

  constructor(private http: HttpClient) {}

  // Get users
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Post user (agar add karna ho)
  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
  // Delete user
deleteUser(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

getselectuser(id:string):Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/${id}`);
}
 

// Update user
updateUser(id: string, user: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, user);
}


}


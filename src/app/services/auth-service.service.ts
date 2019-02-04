import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { responseFromApi, users } from '../interface';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Object;
  authToken: any;
  url = '/users';

  constructor(private http: HttpClient) { }

  // function to register the user
  getRegister(user: any) {
    const url = this.url + '/register';
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(url, user, { headers : headers});
  }
  // function to get authenticated
  getAuthenticated(user) {
    const url = this.url + '/authenticate';
    const headers = new HttpHeaders();
    headers.append('Content-Tpe', 'applicaltion/json');
    return this.http.post<responseFromApi>(url, user, {headers: headers});
  }

  // function to get users
  getUsers() {
    const url = this.url + '/profile';
    this.loadToken();
    const headers = new HttpHeaders();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers: headers});
  }

  // function to get user from local storage
  getUsersLocalStorage() {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user;
  }

  // function to store the data
  storeUserData(token, user) {
    // saving data into local storage
    localStorage.setItem('id_token', token);
    // localstorage can only store strings so convert object into strings
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // function to logout
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    return false;
  }
  // function to check logged in
  loggedIn() {
    return tokenNotExpired('id_token');
  }

  // function to load token from local storage
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);
  }
}

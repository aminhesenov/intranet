import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {AlertifyjsService} from './alertifyjs.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {LoginUser} from '../Models/loginUser';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {News} from '../Models/news';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://172.16.60.51/adra/oauth/token';
  newsUrl = 'http://172.16.60.51/intranet/news';
  jwtHelper = new JwtHelperService();
  constructor(private http: HttpClient, private router: Router, private alertifyService: AlertifyjsService) {
  }
login(model: any) {

  // headers = new Headers();
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Basic ' + btoa('clientId:secret')
  });
  const params = new HttpParams()
    .set('username', model.username)
    .set('password', model.password)
    .set('grant_type', 'password');
  return this.http.post(this.baseUrl, {model}, {headers, params}).pipe(
    map((response: any) => {
      const  user = response;
      if (user) {
        localStorage.setItem('access_token', user.access_token);
      }
    })
  );
}
getNews(): Observable<News[]> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + localStorage.getItem('access_token')
  });
  return this.http.get<News[]>(this.newsUrl, {headers});
}
}



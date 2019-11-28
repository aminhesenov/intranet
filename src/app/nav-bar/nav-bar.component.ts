import { Component, OnInit } from '@angular/core';
import {AlertifyjsService} from '../Service/alertifyjs.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private  alertify: AlertifyjsService) { }

  ngOnInit() {
  }
  logOut() {
    localStorage.removeItem('access_token');
    this.alertify.warning('Sistemdən çıxdınız!');
  }
}

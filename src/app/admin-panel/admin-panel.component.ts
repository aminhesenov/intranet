import { Component, OnInit } from '@angular/core';
import {AuthService} from '../Service/auth.service';
import {AlertifyjsService} from '../Service/alertifyjs.service';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  fullname = 'Amin  Hasanov';
  signOut = 'Çıxış';
  constructor(private authService: AuthService, private alertify: AlertifyjsService) { }
   menulist: any[] = [
     {personalInformation: 'Şəxsi məlumatlar', news: 'Xəbərlər', post: 'Paylaşımlar', activate: 'Fəaliyyətlər', ideaComplaint: 'İdeya və şikayətlər', reserve: 'Rezervasiyalar', marquee: 'Elanlar', setting: 'Parametrlər' }
    ]
   ngOnInit() {
  }
  logOut() {
    localStorage.removeItem('access_token');
    this.alertify.warning('Sistemdən çıxdınız!');

  }
}

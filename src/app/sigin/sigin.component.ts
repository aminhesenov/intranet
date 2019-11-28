import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Sign} from './Sign';
import {AuthService} from '../Service/auth.service';
import {AlertifyjsService} from '../Service/alertifyjs.service';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {
  model: any = {};
  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private alertify: AlertifyjsService) {
  }

  sign: Sign = new Sign();
  loginUser: any = {};
  signItems: Sign[] = [
    {userName: 'İstifadəçi adı', password: 'Şifrə', signIn: 'Daxil ol'}
  ];
  inculudeForm: FormGroup;

  createAddForm() {
    this.inculudeForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.createAddForm();
    this.model.grant_type = 'password';
  }

  add() {
    if (this.inculudeForm.valid) {
      this.sign = Object.assign({}, this.inculudeForm.value);
    }
  }

  login() {

    this.authService.login(this.model).subscribe(next => {
      this.router.navigateByUrl('/sigin/intranet/homepage');
      this.alertify.success('Sistemə daxil oldunuz');
      }, error => {
        this.alertify.error('İstifadəçi adı və ya şifrə yanlışdır!');
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
}


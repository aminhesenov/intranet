import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertifyjsService} from '../../../Service/alertifyjs.service';
import {AddAdvertisements} from './addAdvertisements';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css']
})
export class MarqueeComponent implements OnInit {
  advertisement: AddAdvertisements = new AddAdvertisements();
Advertisement: AddAdvertisements [] = [
  {Title: 'Başlıq', Status: 'Status', Description: 'Mövzu', Document: 'Sənəd əlavə edin'}
]
  constructor(private formBuilder: FormBuilder, alertify: AlertifyjsService) { }
  inculudeForm: FormGroup;
  ngOnInit() {
    this.createAddForm();
  }
  createAddForm() {
    this.inculudeForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      document: ['', Validators.required]
    });
  }
  add() {
    if (this.inculudeForm.valid) {
      this.advertisement = Object.assign({}, this.inculudeForm.value);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertifyjsService} from '../../../Service/alertifyjs.service';
import {AddNewsItems} from './addNewsItems';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, alertify: AlertifyjsService) { }
  addnewsItems: AddNewsItems = new AddNewsItems();
  inculudeForm: FormGroup;
  ngOnInit() {
    this.createAddForm();
  }
  createAddForm() {
    this.inculudeForm = this.formBuilder.group({
      Title: ['', Validators.required],
      NewsLink: ['', Validators.required],
      Picture: ['', Validators.required]
    });
  }
  add() {
    if (this.inculudeForm.valid) {
      this.addnewsItems = Object.assign({}, this.inculudeForm.value);
    }
  }
}

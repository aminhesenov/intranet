import { Component, OnInit } from '@angular/core';
import {Advertisements} from './advertisements';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {
  //  table Title
  Number = '№';
  Title = 'Başlıq';
  Description = 'Mövzu';
  Status = 'Status';
  Edit = 'Redaktə et';
  Delete = 'Sil';
  constructor() { }
  advertisements: Advertisements [] = [
    {number: 1, title: 'Maashlar verildi', description: 'Bu ayin sonuna dogru olan melumatlardan aydindir.', status: 'Vacib', edit: 'assets/edit.png', delete: 'assets/delete.png'},
    {number: 2, title: 'Maashlar verildi', description: 'Bu ayin sonuna dogru olan melumatlardan aydindir.', status: 'Vacib', edit: 'assets/edit.png', delete: 'assets/delete.png'}
  ]
  ngOnInit() {
  }

}

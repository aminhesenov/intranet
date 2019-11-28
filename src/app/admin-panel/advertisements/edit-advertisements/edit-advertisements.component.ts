import { Component, OnInit } from '@angular/core';
import {EditAdvertisementsItems} from './editAdvertisementsItems';

@Component({
  selector: 'app-edit-advertisements',
  templateUrl: './edit-advertisements.component.html',
  styleUrls: ['./edit-advertisements.component.css']
})
export class EditAdvertisementsComponent implements OnInit {

  constructor() { }
  title = 'Başlıq';
  status = 'Status';
  description = 'Mövzu';
  document = 'Sənəd əlavə edin';
  // data
  editAdvertisements: EditAdvertisementsItems[] = [
    {Title: 'Maashlar verildi', Status: 'Vacib', Description: 'Bu ay olan butun hadiseler onu demeye haqq verir ki bu tam dourudur.', Document: 'assets/document.pdf'}
  ]
  ngOnInit() {
  }

}

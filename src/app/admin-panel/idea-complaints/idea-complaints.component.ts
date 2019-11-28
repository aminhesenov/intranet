import { Component, OnInit } from '@angular/core';
import {IdeaCompalintsDetails} from './idea-compalintsDetails';

@Component({
  selector: 'app-idea-complaints',
  templateUrl: './idea-complaints.component.html',
  styleUrls: ['./idea-complaints.component.css']
})
export class IdeaComplaintsComponent implements OnInit {
  Number = '№';
  Author = 'Müəllif';
  Title = 'Başlıq';
  Description = 'Mövzu';
  Type = 'Növü';
  More = 'Ətraflı';
  Delete = 'Sil';
  constructor() { }
  details: IdeaCompalintsDetails[] = [
    {number: 1, author: 'Amin Hasanov', title: 'Qapali mekanda siqaret cekmeyek', description: 'Xaish olunur her kese bu meseleye ciddi nezer etsin.', type: 'Şikayət', more: 'assets/more.png', delete: 'assets/delete.png'},
    {number: 2, author: 'Amin Hasanov', title: 'Qapali mekanda siqaret cekmeyek', description: 'Xaish olunur her kese bu meseleye ciddi nezer etsin.', type: 'Şikayət', more: 'assets/more.png', delete: 'assets/delete.png'}
  ];
  ngOnInit() {
  }

}

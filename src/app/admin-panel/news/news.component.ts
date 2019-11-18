import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  // news add button
  addButton: any = '+ Əlavə et';
  // table header
  numberTitle = '№';
  pictureTitle = 'Təsvir';
  newsTitle = 'Başlıq';
  edit = 'Redaktə et';
  deleteTitle = 'Sil';
  news: any[] = [
    {number: '1', picture: 'assets/logo.png', title: 'Rəqəmsal reklam qurğuları Azərbaycanda istehsal olunacaq. Bu barede olan melumatlara esasen gorunur.', editIcon: 'assets/edit.png', deleteIcon: 'assets/delete.png'},
    {number: '2', picture: 'assets/cardPicture.jpg', title: 'Rəqəmsal reklam qurğuları Azərbaycanda istehsal olunacaq', editIcon: 'assets/edit.png', deleteIcon: 'assets/delete.png'}
  ]
  constructor() { }

  ngOnInit() {
  }

}

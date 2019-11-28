import { Component, OnInit } from '@angular/core';
import {ActivitiesDetails} from './activitiesDetails';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  number = '№';
  picture = 'Təsvir';
  Author = 'Müəllif';
  Title = 'Başlıq';
  Description = 'Mövzu';
  More = 'Ətraflı';
  Delete = 'Sil';
  constructor() { }
  activities: ActivitiesDetails [] = [
    {activitiesNumber: 1, activitiesPicture: 'assets/cardPicture.jpg', activitiesAuthor: 'Amin Hasanov', activitiesTitle: 'Bu hefte sonu xengele geden varmi?', activitiesDescription: 'Getmek isteyen bazar gunu saat 14:00-da xengelanda olsun.', activitiesMore: 'assets/more.png', activitiesDelete: 'assets/delete.png'},
    {activitiesNumber: 2, activitiesPicture: 'assets/cardPicture.jpg', activitiesAuthor: 'Amin Hasanov', activitiesTitle: 'Bu hefte sonu xengele geden varmi?', activitiesDescription: 'Getmek isteyen bazar gunu saat 14:00-da xengelanda olsun.', activitiesMore: 'assets/more.png', activitiesDelete: 'assets/delete.png'}
  ]
  ngOnInit() {
  }

}

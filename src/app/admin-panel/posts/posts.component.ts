import { Component, OnInit } from '@angular/core';
import {PostDetails} from './postDetails';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor() { }
  number = '№';
  picture = 'Təsvir';
  Author = 'Müəllif';
  Title = 'Başlıq';
  Description = 'Mövzu';
  More = 'Ətraflı';
  Delete = 'Sil';
 postDetail: PostDetails [] = [
   {postNumber: 1, postPicture: 'assets/cardPicture.jpg', postAuthor: 'Amin Hasanov', postTitle: 'Yeni əlavələrdən sonra intranet istifadədir', postDescription: 'Yeni əlavələrdən sonra intranet istifadədir.Yeni əlavələrdən sonra intranet istifadədir.', postMore: 'assets/more.png', postDelete: 'assets/delete.png'},
   {postNumber: 2, postPicture: 'assets/cardPicture.jpg', postAuthor: 'Amin Hasanov', postTitle: 'Yeni əlavələrdən sonra intranet istifadədir', postDescription: 'Yeni əlavələrdən sonra intranet istifadədir.Yeni əlavələrdən sonra intranet istifadədir.', postMore: 'assets/more.png', postDelete: 'assets/delete.png'}
 ]
  ngOnInit() {
  }

}

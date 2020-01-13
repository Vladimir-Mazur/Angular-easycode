import { Component } from '@angular/core';

@Component({
  selector: 'my-photo',
  templateUrl: './my-photo.component.html',
  styleUrls: ['./my-photo.component.css']
})
export class MyPhoto {
  photo = 'assets/img/my-photo.jpg';
  name = 'Мазур Владимир Владимирович'
}
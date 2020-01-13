import { Component } from '@angular/core';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class Education {
  title = "Информация об образовании";
  education = 'Я обучаюсь в МБОУ школе №17 города Феодосии, республики Крым'
}
import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [NgStyle],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.style.scss',
})
export default class ProgressBarComponent {
  percentage = input<number>(0);
}

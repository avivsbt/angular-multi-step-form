import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { WrapperStepsComponent } from './components/wrapper-steps/wrapper-steps.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [WrapperStepsComponent],
})
export class AppComponent implements OnChanges {
  constructor() {}

  ngOnChanges(e: SimpleChanges) {
    console.log(e);
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'wrapper-steps',
  standalone: true,
  imports: [],
  templateUrl: './wrapper-steps.component.html',
  styleUrl: './wrapper-steps.component.css',
})
export class WrapperStepsComponent {
  @Input() public position: 'top' | 'left' = 'left';
}

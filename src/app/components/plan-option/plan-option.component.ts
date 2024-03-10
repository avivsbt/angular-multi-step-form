import { Component, Input } from '@angular/core';

@Component({
  selector: 'plan-option',
  standalone: true,
  imports: [],
  templateUrl: './plan-option.component.html',
  styleUrl: './plan-option.component.css'
})
export class PlanOptionComponent {
  @Input({ required: true }) public name: string = "";
  @Input({ required: true }) public price: number = 0;
}

import { Component, Input, inject } from '@angular/core';
import { MultiStepFormService } from '../../services/multi-step-form.service';

@Component({
  selector: 'plan-option',
  standalone: true,
  imports: [],
  templateUrl: './plan-option.component.html',
  styleUrl: './plan-option.component.css'
})
export class PlanOptionComponent {
  public multiStepFormService = inject(MultiStepFormService);
  @Input({ required: true }) public name: string = "";
  @Input({ required: true }) public price: number = 0;
}

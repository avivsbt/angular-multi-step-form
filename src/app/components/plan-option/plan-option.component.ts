import { Component, Input, inject } from '@angular/core';
import { MultiStepFormService } from '../../services/multi-step-form.service';
import { IPlan } from '../../types';

@Component({
  selector: 'plan-option',
  standalone: true,
  imports: [],
  templateUrl: './plan-option.component.html',
  styleUrl: './plan-option.component.css'
})
export class PlanOptionComponent {
  public multiStepFormService = inject(MultiStepFormService);
  @Input({ required: true }) public plan: IPlan = {} as IPlan;
}

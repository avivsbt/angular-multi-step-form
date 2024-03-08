import { Component } from '@angular/core';
import { DescriptionStepComponent } from '../../components/description-step/description-step.component';

@Component({
  selector: 'plan',
  standalone: true,
  imports: [DescriptionStepComponent],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent {

}

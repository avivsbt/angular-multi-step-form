import { Component } from '@angular/core';
import { DescriptionStepComponent } from '../../components/description-step/description-step.component';

@Component({
  selector: 'add-ons',
  standalone: true,
  imports: [DescriptionStepComponent],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css'
})
export class AddOnsComponent {

}

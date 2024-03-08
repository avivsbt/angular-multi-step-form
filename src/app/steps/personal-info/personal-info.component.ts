import { Component } from '@angular/core';
import { DescriptionStepComponent } from '../../components/description-step/description-step.component';

@Component({
  selector: 'personal-info',
  standalone: true,
  imports: [DescriptionStepComponent],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {

}

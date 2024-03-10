import { Component } from '@angular/core';
import { DescriptionStepComponent } from '../../components/description-step/description-step.component';
import { WrapperButtonsComponent } from '../../components/wrapper-buttons/wrapper-buttons.component';
import { FormButtonComponent } from '../../components/form-button/form-button.component';

@Component({
  selector: 'finishing-up',
  standalone: true,
  imports: [
    DescriptionStepComponent,
    FormButtonComponent,
    WrapperButtonsComponent
  ],
  templateUrl: './finishing-up.component.html',
  styleUrl: './finishing-up.component.css'
})
export class FinishingUpComponent {

}

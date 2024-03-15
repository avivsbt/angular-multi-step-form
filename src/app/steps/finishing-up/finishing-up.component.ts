import { Component, Input, computed, input } from '@angular/core';
import { DescriptionStepComponent } from '../../components/description-step/description-step.component';
import { WrapperButtonsComponent } from '../../components/wrapper-buttons/wrapper-buttons.component';
import { FormButtonComponent } from '../../components/form-button/form-button.component';
import { JsonPipe } from '@angular/common';
import { FormValue } from '../../types';

@Component({
  selector: 'finishing-up',
  standalone: true,
  imports: [
    DescriptionStepComponent,
    FormButtonComponent,
    WrapperButtonsComponent,
    JsonPipe
  ],
  templateUrl: './finishing-up.component.html',
  styleUrl: './finishing-up.component.css'
})


export class FinishingUpComponent {
  public formValue = input<FormValue>();
  @Input({ required: true }) public disabled: boolean = true;
}

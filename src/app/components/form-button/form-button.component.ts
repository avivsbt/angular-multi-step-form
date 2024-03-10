import { Component, Input, inject } from '@angular/core';
import { MultiStepFormService } from '../../services/multi-step-form.service';

@Component({
  selector: 'form-button',
  standalone: true,
  imports: [],
  templateUrl: './form-button.component.html',
  styleUrl: './form-button.component.css'
})
export class FormButtonComponent {
  public multiStepFormService = inject(MultiStepFormService);
  @Input({ required: true }) public button: 'back' | 'next' | 'confirm' = 'next';
  @Input() public typeButton: 'button' | 'submit' = 'button';

  onClick(): void {
    if(this.button === 'next') {
      this.multiStepFormService.nextStep();
    }
    if(this.button === 'back') {
      this.multiStepFormService.previousStep();
    }
  }
}

import { Component, inject } from '@angular/core';
import { MultiStepFormService } from '../../services/multi-step-form.service';
import { AddOnsComponent } from '../../steps/add-ons/add-ons.component';
import { FinishingUpComponent } from '../../steps/finishing-up/finishing-up.component';
import { PersonalInfoComponent } from '../../steps/personal-info/personal-info.component';
import { PlanComponent } from '../../steps/plan/plan.component';
import { ThankYouComponent } from '../../steps/thank-you/thank-you.component';
import { ESteps } from '../../types';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegexPhoneNumber } from '../../shared/lib';

@Component({
  selector: 'step-form',
  standalone: true,
  imports: [
    PersonalInfoComponent,
    PlanComponent,
    AddOnsComponent,
    FinishingUpComponent,
    ThankYouComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './step-form.component.html',
  styleUrl: './step-form.component.css'
})
export class StepFormComponent {
  public multiStepFormService = inject(MultiStepFormService);
  private fb = inject(FormBuilder);
  public readonly step: typeof ESteps = ESteps;

  public multiStepForm = this.fb.group({
    personalInfo: this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    })
  });

  onSubmit(): void {
    console.log(
      'submitted form',
      this.multiStepForm.value,
      this.multiStepForm.invalid
    );
  }
}

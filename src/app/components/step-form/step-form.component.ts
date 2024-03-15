import { Component, inject } from '@angular/core';
import { MultiStepFormService } from '../../services/multi-step-form.service';
import { AddOnsComponent } from '../../steps/add-ons/add-ons.component';
import { FinishingUpComponent } from '../../steps/finishing-up/finishing-up.component';
import { PersonalInfoComponent } from '../../steps/personal-info/personal-info.component';
import { PlanComponent } from '../../steps/plan/plan.component';
import { ThankYouComponent } from '../../steps/thank-you/thank-you.component';
import { ESteps } from '../../types';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone: ['', Validators.required]
    }),
    plan: this.fb.group({
      plan: ['arcade', Validators.required],
    }),
    addOns: this.fb.group({
      onlineService: false,
      largerStorage: false,
      customizableProfile: false
    })
  });

  onSubmit(): void {
    this.multiStepFormService.setStep(ESteps.ThankYou);
    console.log('submitted form',this.multiStepForm.value);
  }
}

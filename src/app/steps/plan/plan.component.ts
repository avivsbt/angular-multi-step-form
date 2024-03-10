import { Component, Input, OnInit, inject } from '@angular/core';
import { DescriptionStepComponent } from '../../components/description-step/description-step.component';
import { FormGroupDirective, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormButtonComponent } from '../../components/form-button/form-button.component';
import { plans } from '../../shared/data/data';
import { IPlan } from '../../types';
import { WrapperButtonsComponent } from '../../components/wrapper-buttons/wrapper-buttons.component';
import { PlanOptionComponent } from '../../components/plan-option/plan-option.component';
import { PeriodComponent } from '../../components/period/period.component';
import { MultiStepFormService } from '../../services/multi-step-form.service';

@Component({
  selector: 'plan',
  standalone: true,
  imports: [
    DescriptionStepComponent,
    ReactiveFormsModule,
    FormButtonComponent,
    WrapperButtonsComponent,
    PlanOptionComponent,
    PeriodComponent
  ],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent implements OnInit {
  private rootFormGroup = inject(FormGroupDirective);
  public multiStepFormService = inject(MultiStepFormService);
  @Input({ required: true }) public formGroupName: string = "";
  public form!: FormGroup;
  public plans: IPlan[] = plans;

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}

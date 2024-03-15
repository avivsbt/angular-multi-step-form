import { Component, Input, computed, inject, input } from '@angular/core';
import { DescriptionStepComponent } from '../../components/description-step/description-step.component';
import { WrapperButtonsComponent } from '../../components/wrapper-buttons/wrapper-buttons.component';
import { FormButtonComponent } from '../../components/form-button/form-button.component';
import { JsonPipe } from '@angular/common';
import { ESteps, FormValue, IPlan, IaddOns } from '../../types';
import { MultiStepFormService } from '../../services/multi-step-form.service';
import { addOnses, plans } from '../../shared/data/data';

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
  public multiStepFormService = inject(MultiStepFormService);
  public formValue = input<FormValue | any>();
  @Input({ required: true }) public disabled: boolean = true;

  public plan = computed(() => plans.find(plan => plan.value === this.formValue()?.plan?.plan) as IPlan);

  public filteredAddOns = computed(() => addOnses.filter(addOn => this.formValue().addOns[addOn.formControlName]));

  public total = computed(() => {
    let planSum: number = this.multiStepFormService.isYearly() ? this.plan()?.yearly : this.plan()?.monthly;
    
    let addonsSum: number = this.filteredAddOns().reduce((acc, obj) => {
      let price = this.multiStepFormService.isYearly() ? obj.yearly : obj.monthly
      return acc + price
    }, 0);

    return planSum + addonsSum
  });

  onChangePlan(): void {
    this.multiStepFormService.setStep(ESteps.Plan);
  }

}

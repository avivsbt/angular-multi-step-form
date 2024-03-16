import { ChangeDetectionStrategy, Component, Input, OnInit, computed, inject, input } from '@angular/core';
import { DescriptionStepComponent } from '../../components/description-step/description-step.component';
import { WrapperButtonsComponent } from '../../components/wrapper-buttons/wrapper-buttons.component';
import { FormButtonComponent } from '../../components/form-button/form-button.component';
import { JsonPipe } from '@angular/common';
import { ESteps, FormValue, IPlan, IaddOns } from '../../types';
import { MultiStepFormService } from '../../services/multi-step-form.service';
import { addOnses, plans } from '../../data/data'
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'finishing-up',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    DescriptionStepComponent,
    FormButtonComponent,
    WrapperButtonsComponent,
    JsonPipe
  ],
  templateUrl: './finishing-up.component.html',
  styleUrl: './finishing-up.component.css'
})


export class FinishingUpComponent implements OnInit {
  public multiStepFormService = inject(MultiStepFormService);
  private rootFormGroup = inject(FormGroupDirective);

  public formValue = input<FormValue | any>();
  @Input({ required: true }) public invalid: boolean = true;


  @Input({ required: true }) public formGroupName: string = "";
  public form!: FormGroup;

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

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  onChangePlan(): void {
    this.multiStepFormService.setStep(ESteps.Plan);
  }

}

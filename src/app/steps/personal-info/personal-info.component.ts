import { Component, Input, OnInit, inject, input } from '@angular/core';
import { DescriptionStepComponent } from '../../components/description-step/description-step.component';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { FormButtonComponent } from '../../components/form-button/form-button.component';
import { MultiStepFormService } from '../../services/multi-step-form.service';

@Component({
  selector: 'personal-info',
  standalone: true,
  imports: [
    DescriptionStepComponent,
    ReactiveFormsModule,
    FormButtonComponent
  ],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent implements OnInit {
  private rootFormGroup = inject(FormGroupDirective);
  @Input({ required: true }) public formGroupName: string = "";
  public form!: FormGroup;

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}

import { Component, Input, OnInit, inject } from '@angular/core';
import { DescriptionStepComponent } from '../../components/description-step/description-step.component';
import { FormGroupDirective, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormButtonComponent } from '../../components/form-button/form-button.component';
import { WrapperButtonsComponent } from '../../components/wrapper-buttons/wrapper-buttons.component';
import { IaddOns } from '../../types';
import { addOnses } from '../../shared/data/data';

@Component({
  selector: 'add-ons',
  standalone: true,
  imports: [
    DescriptionStepComponent,
    ReactiveFormsModule,
    FormButtonComponent,
    WrapperButtonsComponent
  ],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.css'
})
export class AddOnsComponent implements OnInit {
  private rootFormGroup = inject(FormGroupDirective);
  @Input({ required: true }) public formGroupName: string = "";
  public form!: FormGroup;
  public addOnses: IaddOns[] = addOnses;

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }
}

import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MultiStepFormService } from '../../services/multi-step-form.service';
import { IaddOns } from '../../types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'add-ons-option',
  standalone: true,
  imports: [NgClass],
  templateUrl: './add-ons-option.component.html',
  styleUrl: './add-ons-option.component.css'
})
export class AddOnsOptionComponent {
  public multiStepFormService = inject(MultiStepFormService);
  @Input() public addOns: IaddOns = {} as IaddOns;
  @Input() public selected: boolean = false;
  @Output() public onSelected = new EventEmitter<string>();
}

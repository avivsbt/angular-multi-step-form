import { NgClass } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MultiStepFormService } from '../../services/multi-step-form.service';
import { ESteps } from '../../types';

@Component({
  selector: 'step-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './step-item.component.html',
  styleUrl: './step-item.component.css'
})
export class StepItemComponent {

  @Input() public step: number = ESteps.PersonalInfo;
  @Input() public text: string = "";
  @Input() public information: boolean = false;
  public readonly steps: typeof ESteps = ESteps;

  public multiStepFormService = inject(MultiStepFormService);

  onSelected(): void {
    if (this.multiStepFormService.step() === ESteps.ThankYou) return;
    this.multiStepFormService.setStep(this.step);
  }

}

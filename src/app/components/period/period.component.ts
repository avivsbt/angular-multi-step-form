import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { MultiStepFormService } from '../../services/multi-step-form.service';

@Component({
  selector: 'period',
  standalone: true,
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './period.component.html',
  styleUrl: './period.component.css'
})
export class PeriodComponent {
  public multiStepFormService = inject(MultiStepFormService);

  onSwitch(): void {
    this.multiStepFormService.updatePeriod();
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StepItemComponent } from '../step-item/step-item.component';

@Component({
  selector: 'wrapper-steps',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StepItemComponent],
  templateUrl: './wrapper-steps.component.html',
  styleUrl: './wrapper-steps.component.css',
})
export class WrapperStepsComponent {
  @Input() public position: 'top' | 'left' = 'left';
}

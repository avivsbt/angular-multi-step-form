import { Component, Input } from '@angular/core';

@Component({
  selector: 'description-step',
  standalone: true,
  imports: [],
  templateUrl: './description-step.component.html',
  styleUrl: './description-step.component.css'
})
export class DescriptionStepComponent {

  @Input() public title: string = "";
  @Input() public description: string = "";

}

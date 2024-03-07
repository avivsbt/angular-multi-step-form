import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'step-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './step-item.component.html',
  styleUrl: './step-item.component.css'
})
export class StepItemComponent {

  @Input() public num: number = 1;
  @Input() public text: string = "";
  @Input() public information: boolean = false;
  @Input() public selected: number = 1;
  @Output() public selectedEvent = new EventEmitter<number>();

  onSelected(): void {
    this.selectedEvent.emit(this.num);
  }
}

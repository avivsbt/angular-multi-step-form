import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'thank-you',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.css'
})
export class ThankYouComponent {

}

import { Component, OnInit, inject, signal } from '@angular/core';
import { WrapperStepsComponent } from './components/wrapper-steps/wrapper-steps.component';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout"
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [WrapperStepsComponent, NgClass],
})
export class AppComponent implements OnInit {

  private breakpointobserver = inject(BreakpointObserver);

  public isMobile = signal<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    this.breakpointobserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isMobile.set(result.matches);
    });
  }
}

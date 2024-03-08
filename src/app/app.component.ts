import { Component, OnInit, inject, signal } from '@angular/core';
import { WrapperStepsComponent } from './components/wrapper-steps/wrapper-steps.component';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout"
import { NgClass } from '@angular/common';
import { PersonalInfoComponent } from './steps/personal-info/personal-info.component';
import { PlanComponent } from './steps/plan/plan.component';
import { AddOnsComponent } from './steps/add-ons/add-ons.component';
import { FinishingUpComponent } from './steps/finishing-up/finishing-up.component';
import { ThankYouComponent } from './steps/thank-you/thank-you.component';
import { MultiStepFormService } from './services/multi-step-form.service';
import { StepsForm } from './types';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    WrapperStepsComponent,
    NgClass,
    PersonalInfoComponent,
    PlanComponent,
    AddOnsComponent,
    FinishingUpComponent,
    ThankYouComponent,
  ],
})
export class AppComponent implements OnInit {

  private breakpointobserver = inject(BreakpointObserver);
  public multiStepFormService = inject(MultiStepFormService);
  
  public isMobile = signal<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    this.breakpointobserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isMobile.set(result.matches);
    });
  }
}

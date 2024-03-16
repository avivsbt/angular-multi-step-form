import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { MultiStepFormService } from '../../services/multi-step-form.service';
import { IPlan } from '../../types';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';

@Component({
  selector: 'plan-option',
  standalone: true,
  imports: [NgClass],
  templateUrl: './plan-option.component.html',
  styleUrl: './plan-option.component.css'
})
export class PlanOptionComponent implements OnInit {
  public multiStepFormService = inject(MultiStepFormService);
  @Input({ required: true }) public plan: IPlan = {} as IPlan;

  private breakpointobserver = inject(BreakpointObserver);
  public isMobile = signal<boolean>(false);

  ngOnInit(): void {
    this.breakpointobserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isMobile.set(result.matches);
    });
  }
}

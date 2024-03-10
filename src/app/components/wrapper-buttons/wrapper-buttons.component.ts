import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';

@Component({
  selector: 'wrapper-buttons',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wrapper-buttons.component.html',
  styleUrl: './wrapper-buttons.component.css'
})
export class WrapperButtonsComponent implements OnInit {

  private breakpointobserver = inject(BreakpointObserver);
  public isMobile = signal<boolean>(false);

  constructor() { }

  ngOnInit(): void {
    this.breakpointobserver.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe(result => {
      this.isMobile.set(result.matches);
    });
  }
}

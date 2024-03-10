import { Injectable, signal } from "@angular/core";
import { ESteps } from "../types";

@Injectable({ providedIn: 'root' })
export class MultiStepFormService {
    public step = signal(ESteps.Plan);

    public nextStep(): void {
        this.step.update(prev => prev + 1);
        
    }

    public previousStep(): void {
        this.step.update(prev => prev - 1);
    }

    public setStep(step: number): void {
        this.step.set(step)
    }
}
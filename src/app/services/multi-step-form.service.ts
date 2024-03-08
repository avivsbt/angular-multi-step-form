import { Injectable, signal } from "@angular/core";
import { ESteps } from "../types";

@Injectable({ providedIn: 'root' })
export class MultiStepFormService {
    public step = signal(ESteps.PersonalInfo);

    public nextStep(): void {
        this.step.update(prev => prev++);
    }

    public previousStep(): void {
        this.step.update(prev => prev--);
    }

    public setStep(step: number): void {
        this.step.set(step)
    }
}
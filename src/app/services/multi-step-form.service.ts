import { Injectable, signal } from "@angular/core";
import { StepsForm } from "../types";

@Injectable({ providedIn: 'root' })
export class MultiStepFormService {
    public step = signal(StepsForm.PersonalInfo);

}
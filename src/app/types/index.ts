export enum ESteps {
    PersonalInfo = 1,
    Plan = 2,
    AddOns = 3,
    FinishingUp = 4,
    ThankYou = 5
}

export interface IPlan {
    value: string;
    name: string;
    monthly: number;
    yearly: number;
}

export interface IaddOns {
    value: boolean;
    name: string;
    formControlName: string;
    description: string;
    monthly: number;
    yearly: number;
}



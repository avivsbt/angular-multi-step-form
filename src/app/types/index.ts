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
    Monthly: number;
    Yearly: number;
}

export interface IaddOns {
    value: boolean;
    name: string;
    formControlName: string;
    description: string;
    Monthly: number;
    Yearly: number;
}


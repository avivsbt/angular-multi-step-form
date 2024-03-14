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

export type FormValue = Partial<{
    personalInfo: Partial<{
        name: string | null;
        email: string | null;
        phone: string | null;
    }>;
    plan: Partial<{
        plan: string | null;
    }>;
    addOns: Partial<{
        onlineService: boolean | null;
        largerStorage: boolean | null;
        customizableProfile: boolean | null;
    }>;
}>


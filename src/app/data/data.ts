import { IPlan, IaddOns } from "../types";

export const plans: IPlan[] = [
    { value: "arcade", name: "Arcade", monthly: 9, yearly: 90 },
    { value: "advanced", name: "Advanced", monthly: 12, yearly: 120 },
    { value: "pro", name: "Pro", monthly: 15, yearly: 150 }
];

export const addOnses: IaddOns[] = [
    { formControlName: "onlineService", value: false, name: "Online service", description: "Access to multiplayer games", monthly: 1, yearly: 10 },
    { formControlName: "largerStorage", value: false, name: "Larger storage", description: "Extra 1TB of cloud save", monthly: 2, yearly: 20 },
    { formControlName: "customizableProfile", value: false, name: "Customizable profile", description: "Custom theme on your profile", monthly: 2, yearly: 20 },
]
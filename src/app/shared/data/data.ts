import { IPlan, IaddOns } from "../../types";

export const plans: IPlan[] = [
    { value: "arcade", name: "Arcade", Monthly: 9, Yearly: 90 },
    { value: "advanced", name: "Advanced", Monthly: 12, Yearly: 120 },
    { value: "pro", name: "Pro", Monthly: 15, Yearly: 150 }
];

export const addOnses: IaddOns[] = [
    { formControlName: "onlineService", value: false, name: "Online service", description: "Access to multiplayer games", Monthly: 1, Yearly: 10 },
    { formControlName: "largerStorage", value: false, name: "Larger storage", description: "Extra 1TB of cloud save", Monthly: 2, Yearly: 20 },
    { formControlName: "customizableProfile", value: false, name: "Customizable profile", description: "Custom theme on your profile", Monthly: 2, Yearly: 20 },
]
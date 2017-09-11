import { Charger } from './anything';

export class Mobile implements Charger {
    DC_SUPPLY: number = 5;

    powerSupply(): number {
        return 230;
    }
}

let ch : Charger = new Mobile();

let ch1: Charger = {
    DC_SUPPLY: 5,
    powerSupply: () => 230
}; 

ch1 = ch;
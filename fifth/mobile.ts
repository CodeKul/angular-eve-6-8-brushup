import { Charger } from './anything';

export class Mobile implements Charger {
    DC_SUPPLY: number = 5;

    powerSupply(): number {
        return 230;
    }
}
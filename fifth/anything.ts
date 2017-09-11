export interface Charger {
    DC_SUPPLY: number;
    
    powerSupply(): number;
}
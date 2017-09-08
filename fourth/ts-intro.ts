let salAn: number = 10;
//salAn = '10m'; invalid in ts

function getSl(): number {
    return salAn;
}

class Details {
    fees : number; // state

    constructor() {
        this.fees = 100;
    }

    getFees() { // behaviour 
        return this.fees; 
    }
}

let det : Details = new Details();
export class Files {

    // private size: number;

    constructor(
        private size: number,
        private data = '100'
    ) {

    }

    public assignSize(size: number) {
        this.size = size;
    }

    public fileSize() {
        return this.size;
    }

    
    public get dataVal() : string {
        return this.data;
    }

    public set dataVal(dt : string) {
        this.data = dt;
    }
}

let fl: Files = new Files(100);
console.log(fl.dataVal)
fl.dataVal = '10';

export const PI = 3.17;
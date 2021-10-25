import { getValue } from "./main.js";

// Inheritance Concept
class Person {
    constructor(nama,nim) {
        this.nama = nama;
        this.nim = nim;
        
    }
}
// Inheritance (4 Pilar OOP)
class childPerson extends Person {
    constructor(nama,nim) {
        super(nama,nim);
        this.ipkCollection = [];
    }

    calculate() {
        let result = 0;
        this.ipkCollection.push(parseFloat(getValue()))
        for (let ipkCollections of this.ipkCollection) {
            result += ipkCollections;
            result = result / this.ipkCollection.length;
        }
        return result.toFixed(2);
    }
}

export {Person,childPerson};
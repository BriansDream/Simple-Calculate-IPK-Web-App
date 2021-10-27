// import {nameStudent,nimStudent} from "./main.js";

// Inheritance Concept
class Person {
    constructor(nama,nim) {
        this.nama = nama;
        this.nim = nim;
        
    }
}
// Inheritance (4 Pilar OOP)
class childPerson extends Person {
    constructor() {
    super();
      
        this.ipkCollection = [];
    }

    calculate() {
        let temp = 0;
        let result = null;
     
        for (let ipkValues of this.ipkCollection) {
           
            temp += ipkValues;
            result = temp / this.ipkCollection.length;
        }
        return result.toFixed(2);
    }
    mean() {
        let mean = null;
       
            if(this.ipkCollection.length % 2 === 0) {
                mean = (this.ipkCollection[(this.ipkCollection.length / 2) - 1] + this.ipkCollection[(this.ipkCollection.length / 2)]) / 2;
            } else {
                mean = this.ipkCollection[(this.ipkCollection.length/2)-1]
            }
       return mean.toFixed(2);
    }
    
}


export {childPerson};

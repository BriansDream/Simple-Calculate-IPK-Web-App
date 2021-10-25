
  const userName = prompt("Input your username").valueOf();
  const userNim = prompt("Input your NIM").valueOf();



// IPK Value
function getValue(){
let ipkSem1 = document.querySelector('.sem1').value;
let ipkSem2 = document.querySelector('.sem2').value;
let ipkSem3 = document.querySelector('.sem3').value;
let ipkSem4 = document.querySelector('.sem4').value;
let ipkSem5 = document.querySelector('.sem5').value;
let ipkSem6 = document.querySelector('.sem6').value;
let ipkSem7 = document.querySelector('.sem7').value;
let ipkSem8 = document.querySelector('.sem8').value;
    return ipkSem1,ipkSem2,ipkSem3,ipkSem4,ipkSem5,ipkSem6,ipkSem7,ipkSem8;
}

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



const runApp = () => {
    const btnResult = document.querySelector('.btnResult');
    btnResult.addEventListener('click', (event) => {
        const firstStudent = new childPerson(userName,userNim);
      
        alert(`Hai ${firstStudent.nama} Nim: ${firstStudent.nim} IPK mu ${firstStudent.calculate()}`);
        event.preventDefault();
    })
}





runApp()
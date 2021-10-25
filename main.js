
import { Person,childPerson } from "./Person.js";

const userName = prompt("Input your username").valueOf();
const userNim = prompt("Input your NIM").valueOf();

// IPK Value
function getValue(){

let ipkSem1 = parseFloat(document.querySelector('.sem1').value);
let ipkSem3 = parseFloat(document.querySelector('.sem1').value);
let ipkSem2 = parseFloat(document.querySelector('.sem1').value);
let ipkSem4 = parseFloat(document.querySelector('.sem1').value);
let ipkSem5 = parseFloat(document.querySelector('.sem1').value);
let ipkSem6 = parseFloat(document.querySelector('.sem1').value);
let ipkSem7 = parseFloat(document.querySelector('.sem1').value);
let ipkSem8 = parseFloat(document.querySelector('.sem1').value);
    return ipkSem1,ipkSem2,ipkSem3,ipkSem4,ipkSem5,ipkSem6,ipkSem7,ipkSem8;
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

export { getValue};
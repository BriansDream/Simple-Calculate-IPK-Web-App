import { childPerson } from "./Person.js";
import { putHistory, renderHistory } from "./storage.js";
// Instance Object from class
const firstStudent = new childPerson()
// IPK Value

function ipk() {
    let ipkSem1 = document.querySelector('.sem1').value;
    let ipkSem2 = document.querySelector('.sem2').value;
    let ipkSem3 = document.querySelector('.sem3').value;
    let ipkSem4 = document.querySelector('.sem4').value;
    let ipkSem5 = document.querySelector('.sem5').value;
    let ipkSem6 = document.querySelector('.sem6').value;
    let ipkSem7 = document.querySelector('.sem7').value;
    let ipkSem8 = document.querySelector('.sem8').value;
    
    // Validation for for empty input field
    if(ipkSem1 == null || ipkSem1 == "", ipkSem2 == null || ipkSem2 == "", ipkSem3 == null || ipkSem3 == "",ipkSem4 == null || ipkSem4 == "", ipkSem5 == null || ipkSem5 == "", ipkSem6 == null || ipkSem6 == "",ipkSem7 == null || ipkSem7 == "", ipkSem8 == null || ipkSem8 == "") {
        alert("Please fill all required field");
        return false;
    }

    firstStudent.ipkCollection.unshift(parseFloat(ipkSem1),parseFloat(ipkSem2),parseFloat(ipkSem3),parseFloat(ipkSem4),parseFloat(ipkSem5),parseFloat(ipkSem6),parseFloat(ipkSem7),parseFloat(ipkSem8));
    return firstStudent.ipkCollection;   
}


    
const runApp = () => {
    const btnResult = document.querySelector('.btnResult');
    btnResult.addEventListener('click', (event) => {
      
        ipk();
        let resultIPK = firstStudent.calculate();
        let resultMEAN = firstStudent.mean();
        const historyValue = {
            historyIPK: null,
            historyMean: null,
        }
        historyValue.historyIPK = resultIPK;
        historyValue.historyMean = resultMEAN;
        
        
       putHistory(historyValue);
       renderHistory();
       
    })

}

runApp()

export {firstStudent,ipk}
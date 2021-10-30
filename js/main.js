
const IPKWEBAPP = {
    displayIpkValue: "",
    ipkCollection: [],
  
    ipkCalculation() {
        let temp = 0;
        let result= 0;
        for (let collectionIPK of IPKWEBAPP.ipkCollection) {
                temp += collectionIPK;
                result = temp /  IPKWEBAPP.ipkCollection.length;
        }
        return result.toFixed(2);
 
    },
    MeanValue() {
                let ValueMean = 0;
                for(let index= 0; index < IPKWEBAPP.ipkCollection.length; index++) {
                    if(this.ipkCollection.length % 2 == 0) {
                        ValueMean = (this.ipkCollection[(this.ipkCollection.length / 2) + 1] + this.ipkCollection[this.ipkCollection.length / 2]) / 2;
                    } else {
                        ValueMean = this.ipkCollection[this.ipkCollection.length / 2]
                    }
                }
                return ValueMean.toFixed(2);
        }


}

const updateDisplayIPK = () => {
    
}

function getIpkValue() {
    const sem1 = document.querySelector('.sem1').value;
    const sem2 = document.querySelector('.sem2').value;
    const sem3 = document.querySelector('.sem3').value;
    const sem4 = document.querySelector('.sem4').value;
    const sem5 = document.querySelector('.sem5').value;
    const sem6 = document.querySelector('.sem6').value;
    const sem7 = document.querySelector('.sem7').value;
    const sem8 = document.querySelector('.sem8').value;

    // Check if there is field empty
    if(sem1 == '' || sem1 == null, sem2 == '' || sem2 == null, 
    sem3 == '' || sem3 == null, sem4 == '' || sem4 == null, 
    sem5 == '' || sem5 == null, sem6 == '' || sem6 == null, 
    sem7 == '' || sem7 == null, sem8 == '' || sem8 == null) {
            alert('You have to fill all these field');
            return false;
    } else {
        IPKWEBAPP.ipkCollection.unshift(parseFloat(sem1),parseFloat(sem2)
        ,parseFloat(sem3),parseFloat(sem4),parseFloat(sem5),parseFloat(sem6),parseFloat(sem7),parseFloat(sem8));
        return IPKWEBAPP.ipkCollection;
    }
}

const clickButton = () => {
    const btnResult = document.querySelector('.btnResult');
    btnResult.addEventListener('click',(event) => {
        getIpkValue();
        console.log(IPKWEBAPP.MeanValue());
       
    })
}

clickButton();

console.log(IPKWEBAPP.ipkCollection.length);
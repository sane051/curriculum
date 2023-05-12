let numbers = [2, 5, 12, 13, 15, 18, 22];

function isEven(){
    let i= 0;
    while(i<=6){
    if(numbers[i]%2==0){
    console.log(numbers[i] + "は偶数です");
}i++;
    }
}

isEven();

class car {
     constructor(gasorin,number) {
        this.gasorin =gasorin;
        this.number = number;
     }
     getNumGas(){
        console.log(`ガソリンは${this.gasorin}です。ナンバーは${this.number}です`);
     }
}
let gethuman = new car("1234","2243");
gethuman.getNumGas();


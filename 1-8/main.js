

class Taiyaki{
    constructor(name){
        this.name = name;
    }
nakami(){
    console.log(`中身は${this.name}です`);
}
}
let anko = new Taiyaki('あんこ');
let cream = new Taiyaki('クリーム');
let cheese = new Taiyaki('チーズ');

anko.nakami();
cream.nakami();
cheese.nakami();


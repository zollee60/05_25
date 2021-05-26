let countMizoBox = document.querySelector("#count");
let countCocoBox = document.querySelector("#count2");
let minusMizo = document.querySelector("#minus");
let minusCoco = document.querySelector("#minus2");
let plusMizo = document.querySelector("#plus");
let plusCoco = document.querySelector("#plus2");
let calcBtn = document.querySelector("#calc");
let resultHeader = document.querySelector("#vegosszeg");

function incMizo(){
    // parseInt() fv. használata
    let newCount = parseInt(countMizoBox.value) + 1;
    countMizoBox.value = newCount;
}

function incCoco(){
    // parseInt() fv. használata
    let newCount = parseInt(countCocoBox.value) + 1;
    countCocoBox.value = newCount;
}

function decMizo(){
    // parseInt() fv. használata
    if(parseInt(countMizoBox.value) > 0){
        let newCount = parseInt(countMizoBox.value) - 1;
        countMizoBox.value = newCount;
    }
}

function decCoco(){
    // parseInt() fv. használata
    if(parseInt(countCocoBox.value) > 0) {
        let newCount = parseInt(countCocoBox.value) - 1;
        countCocoBox.value = newCount;
    }
}

function calculate(){
    let countMizo = parseInt(countMizoBox.value);
    let countCoco = parseInt(countCocoBox.value);
    let mizoForint = countMizo * 450;
    let cocoForint = countCoco * 40000;
    let sum = mizoForint + cocoForint;

    resultHeader.innerText = `Fizetendő: ${sum} Ft`;
}

function init(){
    countMizoBox.value = 0;
    countCocoBox.value = 0;
}

plusMizo.addEventListener("click", incMizo);
minusMizo.addEventListener("click", decMizo);

plusCoco.addEventListener("click", incCoco);
minusCoco.addEventListener("click", decCoco);

calcBtn.addEventListener("click", calculate);

// Oldal betoltésekor torténjen -->
window.addEventListener("load", init);
//casing section//
function updateCaseNumber(incrising){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
    
    if(incrising == true){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    //update case price
    const casePrice = document.getElementById('case-price');
    casePrice.innerText = caseNumber * 59;
};
//case plus item button//
document.getElementById('case-plus').addEventListener('click',function(){
    updateCaseNumber(true)
    calculateTotal();
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumber(false)
    calculateTotal();
});
function getInputValue(product){
    const productNumber = document.getElementById(product + '-number');
    const productInput = parseInt(productNumber.value);
    return productInput;
}

function calculateTotal() {

    const iphoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = iphoneTotal + caseTotal;
    console.log(subTotal);
}

// iphone section//
function updateIphoneNumber(isIncrise){
    const iphoneInput = document.getElementById('iphone-number');
    let iphoneNumber = iphoneInput.value;
    if(isIncrise == true){
        iphoneNumber = parseInt(iphoneNumber) + 1;
    }
    else if(iphoneNumber > 0){
        iphoneNumber = parseInt(iphoneNumber) - 1;
    }
    iphoneInput.value = iphoneNumber;

    //update iphone price
    const iphonePrice = document.getElementById('iphone-price');
    iphonePrice.innerText = iphoneNumber * 1219;
};

//iphone pluse Button
document.getElementById('iphone-plus').addEventListener('click', function(){
    updateIphoneNumber(true);
    calculateTotal();
    
});

//iphone minus button
document.getElementById('iphone-minus').addEventListener('click', function(){
    updateIphoneNumber(false);
    calculateTotal();
});
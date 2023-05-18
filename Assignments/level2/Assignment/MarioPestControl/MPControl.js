const tBaddiesCaught = document.getElementById('tBaddiesCaught');
const totalInvoiceSubmit = document.getElementById('button'); 
const clearInvoiceSubmit = document.getElementById('clearInvoice'); 
const totalInvoiceAmount = document.getElementById('totalInvoiceAmount'); 

const totalBaddies = document.getElementById('tBaddiesCaught');

const goombaQty = document.getElementById('goombaQtyTotalCaught'); 
const boboombsQty = document.getElementById('boboombsQtyTotalCaught'); 
const cheepCheepsQty = document.getElementById('cheepCheepsQtyTotalCaught'); 

const goombaTotalPriceOwed = document.getElementById('goombaTotalPriceOwed'); 
const boboombsTotalPriceOwed = document.getElementById('boboombsTotalPriceOwed'); 
const cheepCheepsTotalPriceOwed = document.getElementById('cheepCheepsTotalPriceOwed'); 

const goombaQtyPrice = document.getElementById('gQtyCost'); 
const boboombsQtyPrice = document.getElementById('bQtyCost'); 
const cheepCheepsQtyPrice = document.getElementById('cQtyCost'); 

function calculateTotalPrice() { 
    const goombaQty = parseInt(goombaQtyTotalCaught.value); 
    const boboombsQty = parseInt(boboombsQtyTotalCaught.value); 
    const cheepCheepsQty = parseInt(cheepCheepsQtyTotalCaught.value); 

    const goombaPrice = parseInt(gQtyCost.value); 
    const boboombsPrice = parseInt(bQtyCost.value); 
    const cheepCheepsPrice = parseInt(cQtyCost.value); 

    goombaTotalPriceOwed = goombaQty * goombaPrice; 
    boboombsTotalPriceOwed = boboombsQty * boboombsPrice; 
    cheepCheepsTotalPriceOwed = cheepCheepsQty * cheepCheepsPrice; 

    tBaddiesCaught = goombaQty + boboombsQty + cheepCheepsQty;
} 

function clearInvoice() { 
    goombaQty.value = 0; 
    goombaTotalPriceOwed.value = 0; 
    boboombsQty.value = 0; 
    boboombsTotalPriceOwed.value = 0; 
    cheepCheepsQty.value = 0; 
    cheepCheepsTotalPriceOwed.value = 0; 
    totalBaddies.value = 0; 
    totalInvoiceAmount.value = 0; 
};

totalInvoiceAmount.value = goombaTotalPriceOwed.value + boboombsTotalPriceOwed.value + cheepCheepsTotalPriceOwed.value;
goombaQty.addEventListener('change', (e) => {
    goombaTotalPriceOwed.value = goombaQty.value * goombaQtyPrice.value;
}); 

boboombsQty.addEventListener('change', (e) => {
    boboombsTotalPriceOwed.value = boboombsQty.value * boboombsQtyPrice.value;
});

cheepCheepsQty.addEventListener('change', (e) => {
    cheepCheepsTotalPriceOwed.value = cheepCheepsQty.value * cheepCheepsQtyPrice.value;
});

totalBaddies.addEventListener('change', (e) => {
    tBaddiesCaught.value = cheepCheepsQty.value + boboombsQty.value + goombaQty.value;
});

totalInvoiceSubmit.addEventListener('click', (e) => { 
    e.preventDefault(); 
    if (totalInvoiceAmount.value > "0") { 
        clearInvoice(); 
        alert("You have submitted your invoice to Princess Peach. Please wait 30 days for payment."); 
    } else { 
        alert("You have not entered any Baddies Found!"); 
    }  
});
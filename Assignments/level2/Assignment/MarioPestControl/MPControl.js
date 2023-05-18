const totalInvoiceSubmit = document.getElementById('totalInvoiceSubmit');
const clearInvoiceSubmit = document.getElementById('clearInvoice');

const goombaQtyAdd = document.getElementById('goombaQtyAdd');
const boboombsQtyAdd = document.getElementById('boboombsQtyAdd');
const cheepCheepsQtyAdd = document.getElementById('cheepCheepsQtyAdd');

const goombaQtyTotal = document.getElementById('goombaQtyTotal');
const boboombsQtyTotal = document.getElementById('boboombsQtyTotal');
const cheepCheepsQtyTotal = document.getElementById('cheepCheepsQtyTotal');

const goombaCoinsOwed = document.getElementById('goombaCoinsOwed');
const boboombsCoinsOwed = document.getElementById('boboombsCoinsOwed');
const cheepCheepsCoinsOwed = document.getElementById('cheepCheepsCoinsOwed');

const gQtyPrice = document.getElementById('gQtyPrice');
const bQtyPrice = document.getElementById('bQtyPrice');
const cQtyPrice = document.getElementById('cQtyPrice');

const totalInvoiceAmount = document.getElementById('totalInvoiceAmount');

function calculateTotalPrice() {
    const goombaQty = parseInt(goombaQtyTotal.value);
    const boboombsQty = parseInt(boboombsQtyTotal.value);
    const cheepCheepsQty = parseInt(cheepCheepsQtyTotal.value);

    const goombaPrice = parseInt(gQtyPrice.textContent);
    const boboombsPrice = parseInt(bQtyPrice.textContent);
    const cheepCheepsPrice = parseInt(cQtyPrice.textContent);

    const goombaTotalPrice = goombaQty * goombaPrice;
    const boboombsTotalPrice = boboombsQty * boboombsPrice;
    const cheepCheepsTotalPrice = cheepCheepsQty * cheepCheepsPrice;

    goombaCoinsOwed.value = goombaTotalPrice;
    boboombsCoinsOwed.value = boboombsTotalPrice;
    cheepCheepsCoinsOwed.value = cheepCheepsTotalPrice;

    const totalAmount = goombaTotalPrice + boboombsTotalPrice + cheepCheepsTotalPrice;
    totalInvoiceAmount.value = totalAmount;
}


function clearInvoice() {
    goombaQtyTotal.value = "0";
    goombaCoinsOwed.value = "0";
    boboombsQtyTotal.value = "0";
    boboombsCoinsOwed.value = "0";
    cheepCheepsQtyTotal.value ="0";
    cheepCheepsCoinsOwed.value = "0";
    totalBaddies.value = "0";
    totalInvoiceAmount.value = "0";
};

goombaQtyAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const goombaQty = parseInt(goombaQtyTotal.value);
    const goombaPrice = parseInt(gQtyPrice.textContent);
    const newGoombaQty = goombaQty + 1;
    goombaQtyTotal.value = newGoombaQty;
    goombaCoinsOwed.value = newGoombaQty * goombaPrice;
    calculateTotalPrice();
});

boboombsQtyAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const boboombsQty = parseInt(boboombsQtyTotal.value);
    const boboombsPrice = parseInt(bQtyPrice.textContent);
    const newBoboombsQty = boboombsQty + 1;
    boboombsQtyTotal.value = newBoboombsQty;
    boboombsCoinsOwed.value = newBoboombsQty * boboombsPrice;
    calculateTotalPrice();
});

cheepCheepsQtyAdd.addEventListener('click', (e) => {
    e.preventDefault();
    cheepCheepsQty = parseInt(cheepCheepsQtyTotal.value);
    const cheepCheepsPrice = parseInt(cQtyPrice.textContent);
    cheepCheepsQty = cheepCheepsQty + 1;
    cheepCheepsQtyTotal.value = cheepCheepsQty;
    cheepCheepsCoinsOwed.value = cheepCheepsQty * cheepCheepsPrice;
    calculateTotalPrice();
    
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
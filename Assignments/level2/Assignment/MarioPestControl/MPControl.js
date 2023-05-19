const totalInvoiceSubmit = document.getElementById('button');               //declares totalInvoiceSubmit as a constant variable and assigns button to it.
const clearInvoiceSubmit = document.getElementById('clearInvoice');         //declares clearInvoiceSubmit as a constant variable and assigns clearInvoice to it.
const totalInvoiceAmount = document.getElementById('totalInvoiceAmount');   //declares totalInvoiceAmount as a constant variable and assigns totalInvoiceAmount to it.

const tOwed = document.getElementById('tOwed');                             //declares tOwed as a constant variable and assigns tOwed to it.

const goombaQty = document.getElementById('goombaQtyTotalCaught');          //declares goombaQty as a constant variable and goombaQtyTotalCaught to it.
const goombaTotalPriceOwed = document.getElementById('goombaTotalPriceOwed'); //declares goombaTotalPriceOwed as a constant variable and assigns goombaTotalPriceOwed to it.
const goombaQtyPrice = document.getElementById('gQtyCost');                 //declares goombaQtyPrice as a constant variable and assigns gQtyCost to it.

const boboombsQty = document.getElementById('boboombsQtyTotalCaught');      //declares boboombsQty as a constant variable and boboombsQtyTotalCaught to it.
const boboombsTotalPriceOwed = document.getElementById('boboombsTotalPriceOwed'); //declares boboombsTotalPriceOwed as a constant variable and assigns boboombsTotalPriceOwed to it.
const boboombsQtyPrice = document.getElementById('bQtyCost');               //declares boboombsQtyPrice as a constant variable and assigns bQtyCost to it.

const cheepCheepsQty = document.getElementById('cheepCheepsQtyTotalCaught'); //declares cheepCheepsQty as a constant variable and cheepCheepsQtyTotalCaught to it.
const cheepCheepsTotalPriceOwed = document.getElementById('cheepCheepsTotalPriceOwed'); //declares cheepCheepsTotalPriceOwed as a constant variable and assigns cheepCheepsTotalPriceOwed to it.
const cheepCheepsQtyPrice = document.getElementById('cQtyCost');            //declares cheepCheepsQtyPrice as a constant variable and assigns cQtyCost to it.


function calculateTotalPrice() {                                            //declares calculateTotalPrice() as a function.
    const goombaQty = parseInt(goombaQtyTotalCaught.value);                 //declares goombaQty as a constant variable and passes value of goombaQtyCaught to it.
    const goombaPrice = parseInt(gQtyCost.value);                           //declares goombaPrice as a constant variable and passes value of gQtyCost to it.
    goombaTotalPriceOwed = goombaQty * goombaPrice;                         //mulitplie goombaQty and goombaPrice and assigns value to goombaTotalPriceOwed.
    const boboombsQty = parseInt(boboombsQtyTotalCaught.value);             //declares boboombsQty as a constant variable and passes value of boboombsQtyTotalCaught to it.
    const boboombsPrice = parseInt(bQtyCost.value);                         //declares boboomsPrice as a constant variable and passes value of bQtyCost to it.
    boboombsTotalPriceOwed = boboombsQty * boboombsPrice;                   //mulitiplies boboombsQty and boboombsPrice and assigns the value to boboombsTotalPriceOwed.
    const cheepCheepsQty = parseInt(cheepCheepsQtyTotalCaught.value);       //declares cheepCheepsQty as a constant variable and passes value of cheepCheepsQtyTotalCaught to it. 
    const cheepCheepsPrice = parseInt(cQtyCost.value);                      //declares cheepCheepsPrice as a constant variable and passes value of cQtyCost to it.
    cheepCheepsTotalPriceOwed = cheepCheepsQty * cheepCheepsPrice;          //mulitiplies cheepCheepsQty and cheepCheepsPrice and assigns its value to cheepCheepsTotalPriceOwed.
    tOwed.value = parseInt(goombaTotalPriceOwed.value) + parseInt(boboombsTotalPriceOwed.value) + parseInt(cheepCheepsTotalPriceOwed.value); //adds the value of goombaTotalPriceOwed, boboombsTotalPriceOwed and cheepCheepsTotalPriceOwed and assigns its value to tOwed.
} 

function clearInvoice() {                   //declares clearInvoice() object as a function.
    goombaQty.value = 0;                    //sets the initial value of goombaQty to zero.
    goombaTotalPriceOwed.value = 0;         //sets the initial value of goombaTotalPriceOwed to zero.
    boboombsQty.value = 0;                  //sets the initial value of boboombsQty to zero.
    boboombsTotalPriceOwed.value = 0;       //sets the initial value of boboombsTotalPriceOwed to zero.
    cheepCheepsQty.value = 0;               //sets the initial value of cheepCheepsQty to zero.
    cheepCheepsTotalPriceOwed.value = 0;    //sets the initial value of cheepCheepsTotalPriceOwed to zero.
    totalInvoiceAmount.value = 0;           //sets the initial value of totalInvoiceAmount to zero.
    tOwed.value = 0;                        //set the initial value of tOwed to zero.
};

goombaQty.addEventListener('change', (e) => {                           //listens for the date to change in the goombaQty input box and declares an empty function.
    goombaTotalPriceOwed.value = goombaQty.value * goombaQtyPrice.value;    //mulitplies the values of goombaQty and goombaQtyPrice and assigns the value to goombaTotalPriceOwed.
    tOwed.value = parseInt(goombaTotalPriceOwed.value) + parseInt(boboombsTotalPriceOwed.value) + parseInt(cheepCheepsTotalPriceOwed.value); //adds the value from goombaTotalPriceOwed, boboombsTotalPriceOwed and cheepCheepsTotalPriceOwed and assigns it to tOwed.
}); 

boboombsQty.addEventListener('change', (e) => {
    boboombsTotalPriceOwed.value = boboombsQty.value * boboombsQtyPrice.value;
    tOwed.value = parseInt(goombaTotalPriceOwed.value) + parseInt(boboombsTotalPriceOwed.value) + parseInt(cheepCheepsTotalPriceOwed.value);
});

cheepCheepsQty.addEventListener('change', (e) => {
    cheepCheepsTotalPriceOwed.value = cheepCheepsQty.value * cheepCheepsQtyPrice.value;
    tOwed.value = parseInt(goombaTotalPriceOwed.value) + parseInt(boboombsTotalPriceOwed.value) + parseInt(cheepCheepsTotalPriceOwed.value);
});

totalInvoiceSubmit.addEventListener('click', (e) => { //declares and empty function and listens for the submit button to be entered then assigns that to totalInvoiceSubmit.
    e.preventDefault(); //prevents from from clearing.
    if (tOwed.value > "0") {    //validates that tOwed has a value larger than zero and if it does then it display the following alert message.
        clearInvoice();   //calls the clearInvoice function.
        alert("You have submitted your invoice to Princess Peach. Please wait 30 days for payment."); 
    } else {    //if totalInvoiceSubmit does not have any data then the following alert message is displayed.
        alert("You have not entered any Baddies Found!"); 
    }  
});
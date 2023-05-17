function add() {
    var num1 = parseFloat(document.getElementById("addNum1").value);
    var num2 = parseFloat(document.getElementById("addNum2").value);
    var result = num1 + num2;
    document.getElementById("addResult").textContent = "Result: " + result;
}

function subtract() {
    var num1 = parseFloat(document.getElementById("subNum1").value);
    var num2 = parseFloat(document.getElementById("subNum2").value);
    var result = num1 - num2;
    document.getElementById("subResult").textContent = "Result: " + result;
}

function multiply() {
    var num1 = parseFloat(document.getElementById("mulNum1").value);
    var num2 = parseFloat(document.getElementById("mulNum2").value);
    var result = num1 * num2;
    document.getElementById("mulResult").textContent = "Result: " + result;
}

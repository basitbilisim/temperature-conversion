let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

function celsius(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function fahrenheit(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));
}
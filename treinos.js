// here i use dom to link the object in my variable


let valor = document.getElementById("btn");
valor = 1;
const valores = [];
function addValue() {
    valor++;
    valores.push(valor);
    console.log(valor);
}
function mostrarArray() {
    console.log(valores);
}

let inputField = document.getElementById('inputtext');
inputField.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let inputValue = inputField.value;
        alert("Input value is: " + inputValue);
    }
});




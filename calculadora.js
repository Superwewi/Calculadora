function suma() {
    const a = document.getElementById("FactorA").value;
    const b = document.getElementById("FactorB").value;
    
    const suma = parseFloat(a) + parseFloat(b);
    document.getElementById("resultado").innerText = suma;
}
function resta() {
    const a = document.getElementById("FactorA").value;
    const b = document.getElementById("FactorB").value;

    const resta = parseFloat(a) - parseFloat(b);
    document.getElementById("resultado").innerText = resta;
}
function multiplicación() {
    const a = document.getElementById("FactorA").value;
    const b = document.getElementById("FactorB").value;

    const multiplicación = parseFloat(a) * parseFloat(b);
    document.getElementById("resultado").innerText = multiplicación;
}
function división() {
    const a = document.getElementById("FactorA").value;
    const b = document.getElementById("FactorB").value;

    const división = parseFloat(a) / parseFloat(b);
    document.getElementById("resultado").innerText = división;
}
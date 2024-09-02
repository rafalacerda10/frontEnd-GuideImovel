/// Regra de 3
function calcularRegraDeTres() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    if (isNaN(a) || isNaN(b) || isNaN(c) || b === 0){
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }

    const x = (b * c) / a;
    console.log(x);
    // O resultado é truncado para duas casas decimais
    document.getElementById('resultado').innerText = x;
    }
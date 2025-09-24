function Tabuada(){
    // Seleciona todos os inputs com a classe 'form'
    const inputs = document.querySelectorAll('.form');
    const n = Number(inputs[0].value);
    const e = Number(inputs[1].value);
    const res = document.getElementById('resposta');

    if (!n || !e) {
        res.innerHTML = 'Preencha os valores.';
        return;
    }

    let resultado = '';
    for (let i = 1; i <= e; i++) {
        resultado += `${n} x ${i} = ${n * i}<br>`;
    }
    res.innerHTML = resultado;
}

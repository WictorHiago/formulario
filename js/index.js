function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    
    const pessoas = [] //aqui vai salvar nossos objetos

    function recebeEventoForm (evento){
        evento.preventDefault();
        //seleciona todos os campos pela class
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        //cria o objeto
        pessoas.push({
            nome: nome.value,//pega o valor do input
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
        //insere no html um <p> com todos os campos
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ` +
        ` ${peso.value} ${altura.value}</p>`;

    }
    //dispara um evento de submit
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();
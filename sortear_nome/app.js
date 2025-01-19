let amigos = [];
function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i=0; i<amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome === '') {
       return alert('Por favor, insira um nome.');
    }
    amigos.push(nome);
    document.getElementById('amigo').value = '';
    atualizarListaAmigos();
    console.log(`Nome adicionado: ${nome}`);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        return alert('Nenhum amigo cadastrado. Por favor, adicione um amigo.');
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

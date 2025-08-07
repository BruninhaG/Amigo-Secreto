
let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    listaAmigos.push(nome);
    input.value = "";

    atualizarLista();
}

function atualizarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";

    listaAmigos.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = "";

    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 nomes para realizar o sorteio!");
        return;
    }

    let sorteio = embaralhar([...listaAmigos]);

    let resultados = [];
    for (let i = 0; i < listaAmigos.length; i++) {
        const amigo = listaAmigos[i];
        const amigoSecreto = sorteio[i];

        if (amigo === amigoSecreto) {
            sortearAmigo();
            return;
        }

        resultados.push(`${amigo} ➡️ ${amigoSecreto}`);
    }

    resultados.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        ulResultado.appendChild(li);
    });
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

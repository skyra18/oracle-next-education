let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);

  atualizarLista();

  document.getElementById("amigo").value = "";
}

function atualizarLista() {
  let lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Não há amigos para sortear!");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  let amigoSorteado = amigos[indiceAleatorio];

  document.getElementById("resultado").innerHTML = `<p>O amigo sorteado é: ${amigoSorteado}</p>`;
}
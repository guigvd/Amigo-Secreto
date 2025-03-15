//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

const erroMessageName = () => {
    return alert("Por favor, insira um nome!!")
}

const erroMessageListaVazia = () => {
    document.getElementById("resultado").innerHTML = "Nenhum amigo disponível para sorteio!";
}

// Função para adicionar amigos
const adicionarAmigo = () => {
    nome = document.getElementById("amigo").value

    // Verifica se o campo está vazio
    if (nome === "") {
        erroMessageName()
    } else {
    amigos.push(nome)
    }

    document.getElementById("amigo").value = ""

    console.log(amigos)
    atualizarListaAmigos();
}

// Função para sortear amigo secreto
function sortearAmigo() {
    
    // Verifica se o array não está vazio
    if (amigos.length === 0) {
      erroMessageListaVazia();
      return;
    }
    
    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Atualiza o conteúdo do elemento com o resultado
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
  }


// Função para atualizar a lista de amigos
function atualizarListaAmigos() {
    // Array de amigos
    const listaAmigos = amigos;
    
    // Obter o elemento da lista (por id)
    const lista = document.getElementById("listaAmigos");
    
    // Limpar a lista existente
    lista.innerHTML = "";
    
    // Percorrer o array e adicionar cada nome como um <li>
    for (let i = 0; i < listaAmigos.length; i++) {
      const li = document.createElement("li");
      li.textContent = listaAmigos[i];
      lista.appendChild(li);
    }
  }
  

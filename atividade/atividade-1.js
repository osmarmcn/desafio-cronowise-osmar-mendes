
function processamento(lista) {
  return lista.sort((a, b) => {
   
    if (a.tipo === "URGENTE" && b.tipo !== "URGENTE") {
      return -1
    }
    if (a.tipo !== "URGENTE" && b.tipo === "URGENTE") {
      return 1
    }

    return a.timestamp - b.timestamp;
  }).map(item => item.id)
}

const entrada = [
  { id: 1, tipo: "NORMAL",  timestamp: 10 },
  { id: 2, tipo: "URGENTE", timestamp: 20 },
  { id: 3, tipo: "NORMAL",  timestamp: 15 },
  { id: 4, tipo: "URGENTE", timestamp: 5  }
]

console.log(processamento(entrada))

// atraves da função usei sort para ordenar a lista e posteriomente verificar as prioridades se era "URGENTE" e depois se era "NORMAL". Quando o tipo faço a comparação  do timestamp, assim, saber quem vem primeiro. por fim , o uso map para ordernar os ids na ordem correta.
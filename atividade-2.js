
function verificarAlertas(tempos) {
  let resultado = []
  let contador = 0

  for (let i = 0; i < tempos.length; i++) {
    if (tempos[i] > 2000) {
      contador++
    } else {
      contador = 0
    }

    if (contador === 3) {
      resultado.push(i)
    }
  }

  return resultado
}

const tempos = [300, 2100, 2300, 2500, 400, 2100, 2800, 2200]

console.log(verificarAlertas(tempos))

//Nesta função usamos um contador para contar quantos alertas temos na lista e criamos uma lista vazia para armazenar os indices. Se ele for menor que 3 ele zera o contador e se for 3 ele adiciona o indice na lista.
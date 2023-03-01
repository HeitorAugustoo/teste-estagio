function fibonacci(numero) {
    // Inicializa as variáveis a e b com os dois primeiros valores da sequência de Fibonacci
    let a = 0
    let b = 1
  
    // Verifica se o número informado é igual a 0 ou 1, que já são conhecidos na sequência de Fibonacci
    if (numero === a || numero === b) {
      return `O número ${numero} pertence à sequência de Fibonacci.`
    }
  
    // Itera sobre a sequência de Fibonacci até encontrar um valor maior ou igual ao número informado
    while (b < numero) {
      let proximo = a + b
      a = b
      b = proximo
  
      if (b === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`
      }
    }
  
    // Caso o número informado não pertença à sequência de Fibonacci
    return `O número ${numero} não pertence à sequência de Fibonacci.`
  }
  
  // Exemplo de uso
  console.log(fibonacci(10)) 
  console.log(fibonacci(55)) 
  console.log(fibonacci(89))
  
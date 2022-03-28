// Crie uma função que retorna a string "Olá,"  concatenada com 
// um argumento text(a ser passado a função) e com ponto de 
// exclamaçao "!" no final

// 1º Resolução
function cuprimentar1(nome) {
    const saudacao = 'Olá'
    return [saudacao, nome].join(', ').concat('!')
}
console.log(cuprimentar1('Alex'))


// 2º Resolução
function cumprimentar2(nome) {
    return 'Olá, ' + nome + '!'
}
console.log(cumprimentar2('Alex'))

// 3º Resolução

function cumprimentar3(nome) {
   return `Olá, ${nome}!`
}

console.log(cumprimentar3('Alex'))
const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // imprimi um array com as keys
console.log(Object.values(pessoa)) // imprimi um array com os values
console.log(Object.entries(pessoa)) // entries = Entradas

Object.entries(pessoa).forEach (([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', { // defineproperty = definir propriedade
    enumerable: true, // enumerable = Enumerável
    writable: false, // writale = Gravável
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) 
console.log(Object.keys(pessoa))  // keys = chaves

// Object.assign (ECMAScript 2015)

const dest = { a: 1}
const o1 = { b: 2 }
const o2 = { c:3, a: 4 }
const obj = Object.assign(dest, o1, o2) // assign =  atribuir

Object.freeze(obj)
obj.c = 1234
console.log(obj)

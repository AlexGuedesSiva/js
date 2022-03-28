const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivos(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())

        })
        console.log('Depois de Ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivos(caminho)
   .then(conteudo => console.log(conteudo))

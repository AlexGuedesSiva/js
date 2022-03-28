const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovados')
    }else {
        console.log('Reprovados')
    }
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!')  // Cuiaddo!!!
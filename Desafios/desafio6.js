function jurosSimples(capitalInicial, taxa, tempo){
    return capitalInicial + (capitalInicial * taxa * tempo)
}
function jurosComposto(capitalInicial, taxa, tempo){
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosComposto(100, 10/100, 2).toFixed(0));
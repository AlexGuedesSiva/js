function classificarTriagulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    }else if(lado1 == lado2 && lado2 != lado3){
        return 'Isóceles'
    } else(lado1 != lado2 && lado2 != lado3)
    return 'Escaleno'
}

console.log(classificarTriagulo(4, 4, 4))
console.log(classificarTriagulo(4, 4, 3))
console.log(classificarTriagulo(4, 5, 3))
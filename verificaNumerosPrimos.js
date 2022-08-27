
function verificaNumeroPrimo(numero) {
    var resto = 0 

    for( var x = 1; x <= numero; x++){
     if (numero % x === 0){
     resto++;}}
    if(resto === 2 ){
        console.log(`O número ${numero} é primo`)
    } else {
        console.log(`O número ${numero} não é primo`)
    }}
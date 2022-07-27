function verificaNumeroPrimo(numero) {
    var resto = 0
    for( var x = 1; x <= numero; x++){
     if (numero % x == 0){
     resto++;}}
    if(resto === 2 ){
        console.log(`O número ${numero} é primo`)
    } else {
        console.log(`O número ${numero} não é primo`)
    }
}

//Outra forma

function numeroPrimo(num) {
    var divisivel = 0;

    for(var i = 2; i < num; i++){
        if(num % i === 0){
            divisivel++
        }}
        if(divisivel === 0) {
            console.log(`O número ${num} é primo.`)
        } else {
            console.log(`O número ${num} não é primo`)
        }
}
    

     
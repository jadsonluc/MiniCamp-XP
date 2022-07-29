
function verificaNumeroPrimo(numero) {
    var resto = 0

    for( var x = 1; x <= numero; x++){
     if (numero % x === 0){
     resto++;}}
    if(resto === 2 ){
        console.log(`O número ${numero} é primo`)
    } else {
        console.log(`O número ${numero} não é primo`)
    } }


function intervaloPrimo(num1, num2) {
    var sobra = 0;
    var listaPrimo = []
    if  (num1 > num2){
        for(var i = num2; i <= num1; i++) {
        listaPrimo.push(i)
        console.log(i)
            console.log(listaPrimo)
        if(listaPrimo % i === 0){
            sobra++}}
}
    if (num1 < num2){
        for(var i = num1; i <= num2; i++){
            listaPrimo.push(i)
            console.log(i)
            console.log(listaPrimo)
        if(listaPrimo % i === 0){
            sobra++
        }
    }
}
return i
}

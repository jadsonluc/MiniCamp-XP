
function verificaDivisivel(num) {
    
    if( num % 3 === 0 || num % 5 === 0){ 
        return true
    } else {
      return false
    }
    
}

function somar(i){
var soma = 0
var lista = []

for(var i = 3; i < 1000; i++){
    if(verificaDivisivel(i)){
    soma = soma + i;
    lista.push(i)
}}

console.log(soma)
console.log(lista)}

console.log(somar())
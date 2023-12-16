let saldo = calculoPartidas(400, 299)
let rankHeroi = "Ferro"

console.log(saldo)

function calculoPartidas(vitorias, derrotas) {
    let calculo = vitorias - derrotas 
    return calculo  
}
switch(true){
    case saldo < 10:
        rankHeroi = "Ferro"
        break;
    case saldo >= 11 && saldo <= 20:
        rankHeroi = "Bronze"
        break;
    case  saldo >= 21 && saldo <= 50:
        rankHeroi = "Prata"
        break;
    case saldo >= 51 && saldo <= 80:
        rankHeroi = "Ouro"
        break;
    case saldo >= 81 && saldo <= 90:
        rankHeroi = "Diamante"
        break;
    case saldo >= 91 && saldo <= 100:
        rankHeroi = "Lendário"
        break;
    case saldo >= 101 :
        rankHeroi = "Imortal"
        break;       
}; 
console.log("O héroi tem um saldo de " + saldo + " está no nível de " + rankHeroi)

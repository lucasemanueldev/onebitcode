let parsec
let UnidadeAstronomica
let quilometros

let anoLuz = prompt("Qual a distância a ser convertida?")

let opcao = prompt(
    "em qual unidade você gostaria de converter?\n1 - Parsec\n2 - Unidade astronomica\n3 - Quilometros"
)

switch(opcao){
    case "1":
    parsec = anoLuz / 3.26
    break
    case "2":
    UnidadeAstronomica = anoLuz * 63241.077
    break
    case "3":
    quilometros =  anoLuz * Math.pow(10, 12) * 9.461
    break
    default:
        alert("opcao invalida!")
}

switch(opcao){
    case "1":
    alert("Distância em Anos Luz: " + anoLuz + " Anos Luz\n Conversão Desejada Parsec: " + parsec + " Parsecs")
    break
    case "2":
    alert("Distância em Anos Luz: " + anoLuz + " Anos Luz\n Conversão Desejada Unidade Astronomica: " + UnidadeAstronomica + " UA`s")
    break
    case "3":
alert("Distância em Anos Luz: " + anoLuz + " Anos Luz\n Conversão Desejada Quilometros: " + quilometros + " KM")
    break
    default:
}


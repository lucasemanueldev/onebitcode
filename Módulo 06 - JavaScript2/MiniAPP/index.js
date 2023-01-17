let dataPartida = prompt("Digite a data de partida (DD/MM/YYYY)")

let partida = moment(dataPartida, "DD/MM/YYYY")

let hoje = moment()

let dataConta = hoje - dataPartida

let opcao = prompt("Escolha a opção de formato a ser exibida:\n1 - segundos\n2 - minutos\n3 - horas\n4 - dias")

if(opcao == "1"){
    let segundosPartida = Math.round(dataConta / 1000)
    alert("Tempo de voo: " + segundosPartida + " segundos")
}else if(opcao == "2"){
    let minutosPartida = Math.round(dataConta / 1000 / 60)
    alert("Tempo de voo: " + minutosPartida + " minutos")
}else if(opcao == "3"){
    let horasPartida = Math.round(dataConta / 1000 / 3600)
    alert("Tempo de voo: " + horasPartida + " horas")
}else if(opcao == "4"){
    let diasPartida = Math.round(dataConta / 1000/ 3600 / 24)
    alert("Tempo de voo: " + diasPartida + " dias")
}else{
    alert("Opção Invalida!")
}
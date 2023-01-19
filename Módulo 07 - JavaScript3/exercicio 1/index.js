let dobra = 0

let nave = prompt("Digite o nome da nave: ")

let opcao = prompt("Você deseja entrar em dobra espacial?")

while(opcao === "sim" || opcao === "Sim" || opcao === "SIM"){
    opcao = prompt("Você deseja entrar em dobra espacial?")
    dobra = dobra + 1
}

alert("Nome da nave: " + nave + "\n Realizou " + dobra + " dobras")


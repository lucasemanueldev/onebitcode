class Spaceship {
    constructor(nome, crewQuantity){
        this.nome = nome
        this.crewQuantity = crewQuantity
        this.isHitched = false
        this.portasAbertas = false
    }
    hitch(){
        this.isHitched = true
        this.portasAbertas = true
    }
}

function menu(){
    let opcoes
    while (opcoes != "1" && opcoes != "2" && opcoes != "3"){
        opcoes = prompt("O que deseja fazer?\n"+
                        "1 - Engatar a nave\n" +
                        "2 - Imprimir as naves\n" +
                        "3 - Sair do programa")
    }
    return opcoes
}

function createSpaceship(){
    let SpaceshipNome = prompt("Qual o Nome da nave?")
    let crewQuantity = prompt("Qual a quantidade de tripulantes")
    let Spaceship = new Spaceship(SpaceshipNome, crewQuantity)
    return Spaceship
}

function printSpaceshipList(spaceships){
    let spaceshipList = ""
    spaceships.array.forEach(spaceship, index => {
        spaceshipList += (index + 1) + " -" + spaceship.nome + " (" + spaceship.crewQuantity + " tripulantes)\n"
    });
    alert(spaceshipLists)
}

let hitchedSpaceships = []
let opcoes

while (opcoes != "3") {
    opcoes = menu()
    switch (opcoes) {
        case "1":
            let SpaceshipToAdd = createSpaceship()
            SpaceshipToAdd.hitch()
            hitchedSpaceships.push(SpaceshipToAdd)
            break;
        case "2":
            printSpaceshipList(hitchedSpaceships)
            break;
    }
}
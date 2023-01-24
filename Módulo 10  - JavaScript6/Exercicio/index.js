let spaceship = {
    velocidade: 0,
    speedUP: function(aceleracao){
        this.velocidade += aceleracao
    }
}

function registroSpaceship(){
    spaceship.name = prompt("Informe o nome da nave: ")
    spaceship.type = prompt("Informe o tipo da nave: ")
    spaceship.velocidadeMax = Number(prompt("Informe a velocidade máxima da nave: "))
    
}

function acelerar(){
    let aceleracao = Number(prompt("Quanto você quer acelerar: "))
    spaceship.speedUP(aceleracao)
    if(spaceship.velocidade > spaceship.velocidadeMax){
        alert( "Velocidade Máxima Utrapassada!" +
               "\nVelocidade da nave: " + spaceship.velocidade + "km/s" +
               "\nVeloxidade máxima da nave: " + spaceship.velocidadeMax + "km/s" 
        
        )
    }
}

function parar(){
    alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da Nave: "
          + spaceship.velocidade + "\nVelocidade Máxima da nave: " + spaceship.velocidadeMax)
    spaceship.velocidade = 0
}

function menu(){
    let opcoes
    do {
        opcoes = prompt("Você deseja:\n1 - Acelerar\n2 - Parar")
        switch(opcoes){
            case "1":
                aceleracao()
                break
            case "2":
                parar()
                break 
            default:
                alert("Opcao inavlida")  
        }
    }while(opcoes != "2")
}

registroSpaceship()
menu()
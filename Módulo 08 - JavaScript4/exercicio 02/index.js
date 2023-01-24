function reduzir(velocidade, printer){
    let desacelerar = 20

    while(velocidade > 0){
        printer(velocidade)
        velocidade -= desacelerar
    }
    
    alert("Nave parada! Portas podem ser abertas...")
}

let naveVelocidade = 150

reduzir(naveVelocidade, function(velocidade){
    console.log("Velocidade atual: "+velocidade)
})
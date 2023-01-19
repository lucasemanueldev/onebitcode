let nome2

let nome = prompt("Qual o nome da nave?")

let caractere = prompt("Qual o caractere que você deseja substiruir?")
let caractere2 = prompt("Por qual o caractere que você deseja substiruir?")

for(let i = 0; i < nome.length; i++){
    if(nome[i] == caractere){
        nome2 += caractere2
    }else{
        nome2 += nome[i]
    }
}

alert("Novo nome da nave: " + nome2)

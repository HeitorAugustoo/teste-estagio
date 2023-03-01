const string = "Target Sistemas"

function inverteString(string) {
    var newString = ""
    for(let i = string.length -1; i >= 0; i--) {
        newString += string[i]
    }
    console.log(newString)
}

//a função inverte a string ja definida no inicio
inverteString(string)

//também se pode inserir outra string qualquer para ser invertida
inverteString('Heitor Augusto')
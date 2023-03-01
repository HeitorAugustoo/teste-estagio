const faturamento = [
	{
		"dia": 1,
		"valor": 22174.1664
	},
	{
		"dia": 2,
		"valor": 24537.6698
	},
	{
		"dia": 3,
		"valor": 26139.6134
	},
	{
		"dia": 4,
		"valor": 0.0
	},
	{
		"dia": 5,
		"valor": 0.0
	},
	{
		"dia": 6,
		"valor": 26742.6612
	},
	{
		"dia": 7,
		"valor": 0.0
	},
	{
		"dia": 8,
		"valor": 42889.2258
	},
	{
		"dia": 9,
		"valor": 46251.174
	},
	{
		"dia": 10,
		"valor": 11191.4722
	},
	{
		"dia": 11,
		"valor": 0.0
	},
	{
		"dia": 12,
		"valor": 0.0
	},
	{
		"dia": 13,
		"valor": 3847.4823
	},
	{
		"dia": 14,
		"valor": 373.7838
	},
	{
		"dia": 15,
		"valor": 2659.7563
	},
	{
		"dia": 16,
		"valor": 48924.2448
	},
	{
		"dia": 17,
		"valor": 18419.2614
	},
	{
		"dia": 18,
		"valor": 0.0
	},
	{
		"dia": 19,
		"valor": 0.0
	},
	{
		"dia": 20,
		"valor": 35240.1826
	},
	{
		"dia": 21,
		"valor": 43829.1667
	},
	{
		"dia": 22,
		"valor": 18235.6852
	},
	{
		"dia": 23,
		"valor": 4355.0662
	},
	{
		"dia": 24,
		"valor": 13327.1025
	},
	{
		"dia": 25,
		"valor": 0.0
	},
	{
		"dia": 26,
		"valor": 0.0
	},
	{
		"dia": 27,
		"valor": 25681.8318
	},
	{
		"dia": 28,
		"valor": 1718.1221
	},
	{
		"dia": 29,
		"valor": 13220.495
	},
	{
		"dia": 30,
		"valor": 8414.61
	}
]
// este trecho retorna os dias em que o valor é igual a zero
function achaSemValor() {
    for(i = 0; i < faturamento.length; i++) {
        if(faturamento[i].valor == 0) {
            let semValor = [faturamento[i].dia] 
        console.log(semValor)
        }   
    }
}

// função para encontrar o menor valor de faturamento
function achaMenorValor() {
    let menorValor  = faturamento[0].valor

    for(let i = 0; i < faturamento.length; i++) {
        if(faturamento[i].valor !== 0 && faturamento[i].valor < menorValor) {
            menorValor = faturamento[i].valor
        }
    }
    console.log(`Se ignorarmos os dias de faturamento com valor igual à zero, o menor valor de faturamento em um dia do mês é ${menorValor.toFixed(2)}`)
}

//função para achar maior valor de faturamento
function achaMaiorValor() {
    let maiorValor = faturamento[0].valor

    for(let i = 0; i < faturamento.length; i++) {
        if(faturamento[i].valor !== 0 && faturamento[i].valor > maiorValor) {
            maiorValor = faturamento[i].valor
        }
    }
    console.log(`Se ignorarmos os dias de faturamento com valor igual à zero, o maior valor de faturamento em um dia do mês é ${maiorValor.toFixed(2)}`)
}

//função para achar a media de faturamento ignorando os dias com valor zero e imprimir quantos dias do mês foram maiores que a média
function maiorQueMediaMes() {
    let total = 0;

    for(let i = 0; i < faturamento.length; i++) {
        if(faturamento[i].valor !== 0) {
            total = total + faturamento[i].valor
        }
    }

    const media = total/21 //usei 21 pois na primeira função descobri quais são os dias que o valor é zero, e são 9, entao restam 21 dias com valores válidos

    console.log(media.toFixed(2))


    let count = 0

    for(let i = 0; i < faturamento.length; i++) {
        const valorAtual = faturamento[i].valor

        if(valorAtual > media) {
            count++
        }

    }
    console.log(`Os dias do mês, cujo faturamento foi superior a média do mês, somam ${count} dias`)
}

achaSemValor()
achaMenorValor()
achaMaiorValor()
maiorQueMediaMes()

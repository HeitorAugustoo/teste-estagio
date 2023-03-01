const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

const totalDistribuidora = (sp + rj + mg + es + outros)

const porcentagemSp = (sp * 100/totalDistribuidora);
console.log(`O faturamento de São Paulo equivale a ${porcentagemSp.toFixed(3)}% do total`)

const porcentagemRj = (rj * 100/totalDistribuidora);
console.log(`O faturamento de Rio de Janeiro equivale a ${porcentagemRj.toFixed(3)}% do total`)

const porcentagemMg = (mg * 100/totalDistribuidora);
console.log(`O faturamento de Minas Gerais equivale a ${porcentagemMg.toFixed(3)}% do total`)

const porcentagemEs = (es * 100/totalDistribuidora);
console.log(`O faturamento de Espirito Santo equivale a ${porcentagemEs.toFixed(3)}% do total`)

const porcentagemOutros = (outros * 100/totalDistribuidora);
console.log(`O faturamento de Outros equivale a ${porcentagemOutros.toFixed(3)}% do total`)


import Pizza from "./models/Pizza.js"
import Receita from "./models/Receita.js"

//1. O usuário define o tamanho da pizza
const tamanho = new Pizza(45, 0.5)
const pesoPizza = tamanho.getPesoUnitario()

console.log(`O peso da pizza é:${pesoPizza}g`)
console.log('')

//2. Verificando a produção
const receita = new Receita()
const qtdeIngredientes = receita.calcularQtdeIngredientes()
const qtdePizza = receita.calcularQtdePizza(pesoPizza)

console.log(`A quantidade de pizzas médias é:${qtdePizza}`) 
console.log('')
console.log('======  Quantidade de Ingredientes  ======')
console.table(qtdeIngredientes)


let nome = prompt("qual seu nome:  " )
 let numpedido = Number(prompt("qual o numero do seu pedido:  "))
 let nomelanchonete = prompt("lanchetech")
 let nomeproduto = prompt("qual produto você quer: ")
 let preco = Number(prompt("qual o preço:  "))
 let quantidade =Number(prompt("quantos(a) você quer: "))
 const subtotal = preco * quantidade;
 let taxaembalagem = 2
 let valortotal = subtotal + taxaembalagem 
 console.log("cliente: ", nome)
 console.log("numero: ", numpedido)
 console.log("produdo:  ", nomeproduto)
console.log("quantidade:  ",quantidade)
console.log("subtotal:  ",subtotal)
console.log("valor total:  R$",valortotal.toFixed(2))
alert("subtotal:" + subtotal)


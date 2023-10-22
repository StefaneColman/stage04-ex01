/*
você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~. 

*/

 
  let numberOne = prompt(`Digite um número:`)
  let numberTwo = prompt(`Digite outro número:`)
  
  

  alert(`A soma dos dois números é: ` + (Number(numberOne) + Number (numberTwo)))
  alert(`A subtração dos dois números é: ` + (Number(numberOne) - Number (numberTwo)))
  alert(`A multiplicação dos dois números é: ` + (Number(numberOne) * Number (numberTwo)))
  alert(`A divisão dos dois números é: ` + (Number(numberOne) / Number (numberTwo)))
  alert(`O resto da divisão dos dois números é: ` + (Number(numberOne) % Number (numberTwo)))

  const sum = (Number(numberOne) + Number(numberTwo))

  if (sum % 2 === 0) {
    alert(`A soma dos dois números é par: `+ sum)
  } else {
    alert(`A soma dos dois números é ímpar: `+ sum)
  }

  if (numberOne === numberTwo) {
    alert(`Os números inseridos são iguais!`) 
  } else {
    alert(`Os números inseridos são diferentes!`)
  }
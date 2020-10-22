# exercicio_modulo
Resolução de exercícios referentes a uso de módulos javascript. Testes unitários com jest e injeção de dependências.

## Exercicio 1 
  Crie um módulo juros.js, e exporte dele uma função jurosSimples que recebe C (capital), i (juros em decimal. ex: 3,5% = 0.035) e t (tempo). E retorne o juros simples do período (C * i * t ).
  
 ## Exercicio 2
 Crie uma nova função que dado as mesmas variáveis do exercício anterior, retorne o montante total C + juros simples.
  
## Exercicio 3
Crie uma função montanteJurosCompostos que recebe C (capital), i (juros em decimal) e t (tempo) e retorno o montante para o período, dado pela fórmula: M = C * (1 +  i) ^ n​.

## Exercicio 4
O exercício anterior já retorna o montante (capital + juros). Crie uma função em juros.js que retorne somente os juros.


Para Iniciar o projeto

Para iniciar o projeto
# npm install

Altere o trecho abaixo

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  
  por *"scripts": {
    "test": "jest"
  },*

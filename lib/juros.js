const jurosSimples = (c, i, t) => {
  return c * i * t
}

const montanteComJuros = (c, i, t) => {
  const juros = jurosSimples(c, i, t)

  return c+juros
}


const jurosCompostos = (c,i,t) =>{
  const taxa = i/100
  const taxaFixed = parseFloat(taxa.toFixed(2))
  const M = c*((1+taxaFixed)**t)

  return M

}

const retornaJuros = 



module.exports = {
  jurosSimples,
  montanteComJuros,
  jurosCompostos
}
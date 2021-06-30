function dadosRecebidos(){
  var tipoTrans = document.getElementById("tipo-trans").value
  var nomeMercadoria = document.getElementById("nomeMercadoria").value
  var Valor = document.getElementById("Valor").value

  localStorage.setItem('Tipo', tipoTrans)
  localStorage.setItem('Mercadoria', nomeMercadoria)
  localStorage.setItem('Valor', Valor)
}

function insert(){

  




}
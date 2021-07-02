function dadosRecebidos(){
  var tipoTrans = document.getElementById("tipo-trans").value
  var nomeMercadoria = document.getElementById("nomeMercadoria").value
  var Valor = document.getElementById("Valor").value

  var tipo = localStorage.setItem('Tipo', tipoTrans)
  var nome = localStorage.setItem('Mercadoria', nomeMercadoria)
  var valor = localStorage.setItem('Valor', Valor)

/* Inserir Linhas na Tabela*/
  var tabela = document.getElementsByTagName("table")[0];
  var novaLinha = tabela.insertRow(0);

  var col1 = novaLinha.insertCell(0);
  var col2 = novaLinha.insertCell(1);
  var col3 = novaLinha.insertCell(2);

  col1.innerHTML =  tipoTrans
  col2.innerHTML = nomeMercadoria
  col3.innerHTML = Valor
}
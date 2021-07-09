function dadosRecebidos(){
  var tipoTrans = document.getElementById("tipo-trans").value
  var nomeMercadoria = document.getElementById("nomeMercadoria").value
  var Valor = document.getElementById("Valor").value
  var auxiliar = document.getElementById("tipo-trans").value

if(auxiliar == "Compra"){
  auxiliar = "+"
}
if(auxiliar == "Venda"){
  auxiliar = "-"
}

  if(tipoTrans ==="Selecione"||nomeMercadoria==""||Valor==""){
    alert("Preencha os Campos!")
    location.reload();
  }
  else{
       /* Inserir Linhas na Tabela*/
    var tabela = document.getElementsByTagName("table")[0];
    var novaLinha = tabela.insertRow(1);

    var col1 = novaLinha.insertCell(0);
    var col2 = novaLinha.insertCell(1);
    var col3 = novaLinha.insertCell(2);

    col1.innerHTML = auxiliar
    col2.innerHTML =  nomeMercadoria;
    col3.innerHTML = Valor;
  }
}

function limparDados(){

  localStorage.clear()
  location.reload();

}
function salvarDados(){

  var tipoTrans = document.getElementById("tipo-trans").value
  var nomeMercadoria = document.getElementById("nomeMercadoria").value
  var Valor = document.getElementById("Valor").value

  var tipo = localStorage.setItem('Tipo', tipoTrans)
  var nome = localStorage.setItem('Mercadoria', nomeMercadoria)
  var valor = localStorage.setItem('Valor', Valor)

}
function cadastro(){


}

function dadosRecebidos(){

    var tipoTrans = document.getElementById("tipo-trans").value
    var nomeMercadoria = document.getElementById("nomeMercadoria").value
    var Valor = document.getElementById("Valor").value
    var auxiliar = document.getElementById("tipo-trans").value

   if(auxiliar == "Compra"){
      auxiliar = "+"
    }
    else if(auxiliar == "Venda"){
      auxiliar = "-"
    }
    if(tipoTrans ==="Selecione"||nomeMercadoria==""||Valor==""){
      alert("Preencha os Campos!")
      location.reload();
    }else{
    var tabela = document.getElementsByTagName("table")[0];
    var novaLinha = tabela.insertRow(-1);
  
    var col1 = novaLinha.insertCell(0);
    var col2 = novaLinha.insertCell(1);
    var col3 = novaLinha.insertCell(2);
  
    col1.innerHTML = auxiliar
    col2.innerHTML =  nomeMercadoria;
    col3.innerHTML = Valor
    }
}

function limparDados(){

  localStorage.clear()
  location.reload();

}
function salvarDados(){

  let array = []
  
  let tipoStorage = document.querySelector("tipo-trans")

  let nomeStorage = document.querySelector("nomeMercadoria")
 
  let valorStorage = document.querySelector("Valor")

  array = {tipo: tipoStorage, nome:nomeStorage,valor: valorStorage}

  localStorage.setItem("table", JSON.stringify(array))

}
function cadastro(){


}

function validacao(){


}

function calcularLucro(){




}
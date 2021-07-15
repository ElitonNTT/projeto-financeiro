var lista = []
function dadosRecebidos(){

    var tipoTrans = document.getElementById("tipo-trans").value
    var nomeMercadoria = document.getElementById("nomeMercadoria").value
    var Valor = document.getElementById("Valor").value
    var auxiliar = document.getElementById("tipo-trans").value
  
    /* Validação */
   if(auxiliar == "Compra"){
      auxiliar = "+"
    }
    else if(auxiliar == "Venda"){
      auxiliar = "-"
    }
    if(tipoTrans ==="Selecione"||nomeMercadoria==""||Valor==""){
      alert("Preencha os Campos!")
      location.reload();
      
    }else{ /* Inserir linha  se passar na validação*/
    var tabela = document.getElementsByTagName("table")[0];
    var novaLinha = tabela.insertRow(-1);
  
    var col1 = novaLinha.insertCell(0);
    var col2 = novaLinha.insertCell(1);
    var col3 = novaLinha.insertCell(2);
  
    col1.innerHTML = auxiliar
    col2.innerHTML =  nomeMercadoria;
    col3.innerHTML = Valor

    lista.push({tipo:tipoTrans,nome:nomeMercadoria, valor:Valor})
    console.log("lista", lista)
    localStorage.setItem("lista", JSON.stringify(lista))
    }
}

function limparDados(){

  localStorage.clear()
  location.reload();

}
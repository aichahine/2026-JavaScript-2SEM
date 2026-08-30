function validaFormulario() {
  var entrada1=document.getElementById("idcampo1").value;
  var entrada2=document.getElementById("idcampo2").value;
  var entrada3=document.getElementById("idcampo3").value;
  
  if (entrada1 == "") {
	 document.getElementById("mensagem").innerHTML="ATENÇÃO: Informação NOME é obrigatória"; 
  }
  else if (entrada2 == "") {	
	document.getElementById("mensagem").innerHTML="ATENÇÃO: Informação CPF é obrigatória"; 
    document.getElementById("mensagem").style.color="red";
    document.getElementById("mensagem").style.fontSize="200%";
    document.getElementById("mensagem").style.fontWeight="bold";
	}
  else if (entrada3 == "") {
	 document.getElementById("mensagem").innerHTML="ATENÇÃO: Informação DATA DE NASCIMENTO é obrigatória"; 
    document.getElementById("mensagem").style.color="blue";
    document.getElementById("mensagem").style.fontStyle="italic";
     var cor=document.getElementById("mensagem").style.color;	 
	 alert(cor);
	
  
 }
  else {
	 document.getElementById("mensagem").innerText="ATENÇÃO: Formulário validado!"; 	  
  };

}

function limpaValidacao() {
	document.getElementById("mensagem").innerHTML=""; 	  
}



function confirmaForm() {
	var msgConfirmacao = "Nome: " + 
	      document.getElementById("idcampo1").value +
	      "\nCPF: " +
		  document.getElementById("idcampo2").value +
          "\nData de Nascimento: " +
		  document.getElementById("idcampo3").value +
		  "\nComentários: \n" +
		  document.getElementById("idcampo4").value;
    alert(msgConfirmacao);				
}

function mudaLabel1() {
	document.getElementById("lbl1").innerHTML="INFORMAÇÃO 1";
	document.getElementById("lbl1").style.color="magenta";
	document.getElementById("lbl1").style.fontWeight="bold";
	document.getElementById("idcampo1").value="CONTEÚDO AUTOMÁTICO";
}

function mudaLabel234() {
	document.getElementById("lbl2").innerText="INFORMAÇÃO 2";
	document.getElementById("lbl3").innerHTML="INFORMAÇÃO 3";
	document.getElementById("lbl4").innerHTML="INFORMAÇÃO 4";
}
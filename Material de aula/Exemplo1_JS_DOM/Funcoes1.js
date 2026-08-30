function clique_botao()
{
 alert("Exemplo de mensagem \ncom função alert e \nmudança de linha");
};

function escolha_de_botao()
{
var r=confirm("Escolha um botão");
if (r==true)
   {
      alert("Você pressionou o botão OK!");
   }
else
  {
      alert("Você pressionou o botão Cancelar!");
  };
};

function quadrado()
{
  var numero;
  numero = prompt("Informe o número");
  numero = Number(numero);
  if (numero==null) {
	  alert("Operação cancelada");
  }
  else {
       alert("O quadrado do número digitado é: "+(numero * numero));  
  
       if (numero<10) {
	      alert("Número digitado menor que 10");
       }
       else {
	      alert("Número digitado maior ou igual que 10");
       };	  
  };
  
};
	
function cubo()
{
  var numero;
  numero = prompt("Informe o número");
  numero = Number(numero);
  if (numero==null) {
	  alert("Operação cancelada");
  }
  else {
       alert("O cubo do número digitado é: "+(numero * numero * numero));  
  }	   
};

function captura()
{
     document.getElementById("parag1").innerHTML=
              "<u>Texto digitado:</u> ";

     document.getElementById("parag2").innerText=
	 document.getElementById("qualquer").value;    
};

function limpa_parag()
{
	document.getElementById("parag1").innerText="";
	document.getElementById("parag2").innerText="";
};

function limpa_textbox()
{
	document.getElementById("qualquer").value="SOU NOVO POR AQUI!!!!";
};



function mensagem_abertura()
{
	alert("Seja bem vindo a uma página com JavaScript!!!\n\nBela porcaria!!!");
	alert("Segunda mensagem!!!!");
	alert("Chega de mensagem!!!!");
};

function apertou_tecla()
{
	alert("Uma tecla foi apertada");
};

function modo_noturno()
{
  document.getElementById("corpo").style.backgroundColor = "black";
  document.getElementById("corpo").style.color = "white";
};

function apaga_nome()
{
  document.getElementById("primeiroNome").value = "Preencha seu nome";
};

function modo_claro()
{
  document.getElementById("corpo").style.backgroundColor = "white";
  document.getElementById("corpo").style.color = "black";
}
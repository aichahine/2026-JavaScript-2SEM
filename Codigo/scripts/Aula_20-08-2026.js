function Funcao1(){
	 var var1=prompt("Digite um número");
     if(isNaN(var1)){
	   alert("Digite apenas número"); }
	 else {
	   var1=Number(var1);
	   if(var1<1 || var1>10){
		   alert("Permitido apenas número maior que zero e menor que 11");}
	   else{ 
           for(contagem=var1;contagem>0;contagem--){
		       document.write(contagem + "<br />");
		   };
		   document.write("FIM");
       };
     };	
  };
 function Funcao2(){
     var var1=prompt("Digite o primeiro número");
	 var var2=prompt("Digite o segundo número");
     if(isNaN(var1) || isNaN(var2)){
	   alert("Digite apenas números"); }
	 else {
	   var1=Number(var1);
	   var2=Number(var2);
	   if(var1==0 && var2==0){
		   alert("Permitido apenas um número igual a zero");}
	   else if(var1>var2){
		   alert("Número " + var1 + " menos " +
				  var2 + " é igual a " +
				  (var1 - var2));}
	   else if(var2>var1){
		   alert("Número " + var2 + " menos " +
				  var1 + " é igual a " +
				  (var2 - var1));}
	   else {
		   alert("Número " + var1 + " multiplicado por " +
				  var2 + " é igual a " +
				  (var1 * var2));};	   
     };
  };
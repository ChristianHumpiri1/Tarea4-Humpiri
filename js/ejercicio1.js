var a, b;

a = parseInt(prompt("N:"));
b = 1;

   while(a>1){
	   b=a*b;
	   a=a-1;
   }
 
 document.write("El factorial es: "+b);

 
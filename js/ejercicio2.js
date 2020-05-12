
var arreglo=[],i=0,numero,respuesta,sumapositivos=0,sumanegativos=0,sumapares=0,sumaimpares=0,contadorpositivos=0,contadornegativos=0,contadorpares=0,contadorimpares=0,sumatotal=0;

do {
    arreglo[i]=Number(prompt("Numero: "));
    i++;
    respuesta=prompt("¿Deseas ingresar otro número?: ");
   } while (respuesta=="s"||respuesta=="S");

for (var i=0;i<arreglo.length;i++)
    {
    sumatotal+=arreglo[i];
    if (arreglo[i]>=0) 
        {
        sumapositivos+=arreglo[i];
        contadorpositivos++;
        }else
        {
        sumanegativos+=arreglo[i];
        contadornegativos++;
        }
    if (arreglo[i]%2==0) 
        {
        sumapares+=arreglo[i];
        contadorpares++;
        }else
        {
        sumaimpares+=arreglo[i];
        contadorimpares++;
        }
    }
    
document.write("Suma de numeros positivos: "+sumapositivos);
document.write("<br/>Cantidad de numeros positivos: "+contadorpositivos);
document.write("<br/>Suma de numeros negativos: "+sumanegativos);
document.write("<br/>cantidad de numeros negativos: "+contadornegativos);
document.write("<br/>Suma de numeros pares: "+sumapares);
document.write("<br/>cantidad de numeros pares: "+contadorpares);
document.write("<br/>Suma de numeros impares: "+sumaimpares);
document.write("<br/>Cantidad de numeros impares: "+contadorimpares);
document.write("<br/>Media: "+sumatotal/arreglo.length);
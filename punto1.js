function secret(arreglo,funcion,clave){
    if(funcion==="encrypt")
    {
        for(i=0;i<arreglo.length;i++)
        {
            arreglo[i] += clave;
        }
    }
    else if(funcion==="decrypt")
    {
        for(i=0;i<arreglo.length;i++)
        {
            arreglo[i] -= clave;
        }
    }
    console.log(arreglo)
}


secret([1, 2, 3, 1], "encrypt",1)
secret([2, 3, 4, 2], "decrypt",1)

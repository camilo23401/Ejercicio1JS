//1

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

//2

fib = (ntermino) => ntermino <= 1 ? ntermino : fib(ntermino-1) + fib(ntermino-2);
console.log(fib(10))

//3

let idAux = 0;
let mayor = 0;

function obtener(pDireccion) {
  return new Promise((resolve, reject) => {
    var peti = new XMLHttpRequest();
    peti.onload = function () {
      if (peti.readyState !== 4) {
        return;
      }
      if (peti.status >= 200 && peti.status < 300) {
        resolve(peti);
      } else {
        reject({
          status: peti.status,
          statusText: peti.statusText,
        });
      }
    };
    peti.open("GET", pDireccion);
    peti.send();
  });
}

const fetchPromise = fetch(
  "https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json"
);
fetchPromise
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const cantidadProductos = data.map((data) => data.cantidad).join("\n");
    for (i in data) {
      if (parseInt(data[i].cantidad) > mayor) {
        mayor = data[i].cantidad;
        idAux = data[i].idproducto;
      }
    }
  })
  .then((aux) => {
    const fetchPromise = fetch(
      "https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json"
    );
    fetchPromise.then((response) => {
      return response.json().then((data) => {
        for (j in data) {
          let idaux = parseInt(data[j].idproducto);
          if (idaux == idAux) {
            console.log("El producto más pedido fue " + data[j].nombreProducto + ". Se pidió " + mayor + " veces");
            break;
          }
        }
      });
    });
  });






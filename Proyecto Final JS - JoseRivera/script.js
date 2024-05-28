
//Funciones

function menuprincipal(){

    do{
    opcion = Number(prompt("\nQue deseas realizar\nOpcion 1 Comprar una Pizza\nOpción 2 Elige tu promo\nOpción 3 Revisar Catálogo\nOpción 4 Salir"))
    } while (opcion !=1 && opcion !=2 && opcion !=3 && opcion !=4)

}

function pago(precio){

    let listaPago = "Elige forma de pago:\n"

     opcionPago.forEach(function(opcPago) {
         listaPago += opcPago.id + " - " + opcPago.nombre +"\n"
     })

     do{
         opc= Number(prompt(listaPago))
     }while (opc !=1 && opc !=2 && opc !=3 && opc !=4)
    
    let total = 0

    switch(opc){
        case 1:
            total=precio*0.9
            Math.trunc(total) 
            //alert("Tiene un descuento del 10%, el total a pagar es: $" + total)
            
            alert ((total ? "Tiene un descuento del 10%, el total a pagar es: $" + total:"El pedido ha sido anulado"))

            do{
                opcion = Number(prompt("Desea agregar una bebida??\nIngrese 1 SI\nIngrese 2 NO"))
            } while (opcion !=1 && opcion !=2)
            if (opcion ==1){
                agregarbebida(total)
                break
            }
            else if (opcion ==2){
                sinbebida(total)
                break
            }   
            break      
        case 2:
            total=precio*0.95
            total=total.toFixed()
            alert("Tiene un descuento del 5%, el total a pagar es: $" + total)
            do{
                opcion = Number(prompt("Desea agregar una bebida??\nIngrese 1 SI\nIngrese 2 NO"))
            } while (opcion !=1 && opcion !=2)
            if (opcion ==1){
                agregarbebida(total)
                break
            }
            else if (opcion ==2){
                sinbebida(total)
                break
            }
            break
        case 3:
            total=precio*1.20
            alert("El total a pagar considerando interes bancario es: $"+ total)
            do{
                opcion = Number(prompt("Desea agregar una bebida??\nIngrese 1 SI\nIngrese 2 NO"))
            } while (opcion !=1 && opcion !=2)
            if (opcion ==1){
                agregarbebida(total)
                break
            }
            else if (opcion ==2){
                sinbebida(total)
                break
            }            
            break  
        
        case 4:
            salir()
   
    }
} 

function agregarbebida(total){

    //Promesas

    return new Promise ((resolve) =>{

        let totalboleta=Number(total) 
        let bebida=1500
        totalboleta=totalboleta+bebida


        const totalTotal = document.getElementById("totalFinal")
        const nuevoElemento2 = document.createElement("li")
        nuevoElemento2.textContent = "El total a pagar es: $" + (totalboleta || 0)

        console.log("El total a pagar es: $" + totalboleta)

        totalTotal.appendChild(nuevoElemento2)

        resolve (totalboleta)

    })

    }

function sinbebida(total){

    return new Promise ((resolve) =>{


    let totalboleta=Number(total) 

        const totalTotal = document.getElementById("totalFinal")
        const nuevoElemento2 = document.createElement("li")
        nuevoElemento2.textContent = "El total a pagar es: " + "$" + parseInt(totalboleta,10)
        totalTotal.appendChild(nuevoElemento2)

        console.log("El total a pagar es: $" + totalboleta)


        resolve (totalboleta)
    })

}



function despedida(){
    //alert ("Muchas gracias por comprar en Pizza's Cata, no olvide su boleta")
    const msgDespedida = "Muchas gracias por comprar en Pizza's Cata, no olvide su boleta"
    const contDespedida =  document.getElementById("despedida")
    const elementoDespedida =  document.createElement("p")

    elementoDespedida.textContent = msgDespedida
    contDespedida.appendChild (elementoDespedida)

}

function cancelado (){

    /*ACTIVIDAD 6 */

    //Se agrega Sweet alert

    document.addEventListener("DOMContentLoaded", function() {

        /* funciona pero quiero agregar una confirmación
        Swal.fire({
        title: "Advertencia!",
        text: "El pedido ha sido cancelado",
        icon: "error",
        button: "Aceptar",
    }) */

        Swal.fire({

            title:"Está seguro de cancelar el pedido??",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Si, cancelar",
            cancelButtonText: "No, no quiero"    }).then ((result) => {

                if (result.isConfirmed){
                    Swal.fire({

                        title: "cancelado",
                        icon:"success",
                        text:"El pedido ha sido cancelado"
                    })
                }


            })

    })
}

function salir(){
    
    document.addEventListener("DOMContentLoaded", function() {

        Swal.fire({
        title:"Adios!",
        text: "Que tenga buen dia, vuelva pronto",
        icon: "success",
        button: "Aceptar",
    })

    })
}


function catalogo(){
    
    let listado = "Elige la pizza que más te guste:\n"

    pizzas.forEach(function(pizza) {
        listado += pizza.id + " - " + pizza.nombre +"\n"
    })

    do{
        opc= Number(prompt(listado))
    }while (opc !=1 && opc !=2 && opc !=3 && opc !=4 && opc !=5 && opc !=6)

    switch (opc) {
        case 1:
            const res1 = pizzas.find(pizza => pizza.id===1)

            precio=7990
            alert("Los ingredientes de esta pizza son: \n" + res1.ingredientes.join(" - ") + "\nSu precio es de: "+precio)
            pago(precio)
            break

        case 2:
            const res2 = pizzas.find(pizza => pizza.id===2)

            precio=8990
            alert("Los ingredientes de esta pizza son: \n" + res2.ingredientes.join(" - ")+ "\nSu precio es de: "+precio) 
            pago(precio)
           
            break
        case 3:
            const res3 = pizzas.find(pizza => pizza.id===3)

            precio=9990
            alert("Los ingredientes de esta pizza son: \n" + res3.ingredientes.join(" - ")+ "\nSu precio es de: "+precio)    
            pago(precio)
        
            break
        case 4:
            const res4 = pizzas.find(pizza => pizza.id===4)

            precio=10990
            alert("Los ingredientes de esta pizza son: \n" + res4.ingredientes.join(" - ")+ "\nSu precio es de: "+precio)    
            pago(precio)
        
            break
        case 5:

            const res5 = pizzas.find(pizza => pizza.id===5)

            precio=11990
            alert("Los ingredientes de esta pizza son: \n" + res5.ingredientes.join(" - ")+ "\nSu precio es de: "+precio)   
            pago(precio)
        
            break

        case 6:
            alert("Los ingredientes de esta pizza los eliges tú \n") 
            pizzaPersonalizada()           
            break     
    }
}

function pizzaPersonalizada(){ //La idea es que el usuario escoja varios ingredientes

        let ingredientesSeleccionados =[]

        do{

            let listado = "Elige los ingredientes que más te gusten:\n"

            totalIngredientes.forEach(function(ingredientes) {
                    listado += ingredientes.id + " - " + ingredientes.nombre +"\n"
            })

            seleccion=Number(prompt(listado))

            const eleccion = totalIngredientes.find(ingrediente => ingrediente.id === seleccion)

            ingredientesSeleccionados.push(eleccion.nombre)


        }while (confirm("Deseas agregar otro ingrediente"))
    
        alert("Estos son tus ingredientes: " + ingredientesSeleccionados.join(", "))

        const cantidadIngredientes = ingredientesSeleccionados.length

        const numIngredientes = totalIngredientes.length
        
        if (cantidadIngredientes >0 && cantidadIngredientes <=4){
            
            let precio = 10990
            alert("el valor de la pizza es de: "+ precio)
            pago(precio)
        } else if (cantidadIngredientes >4 && cantidadIngredientes <=8 ){
            let precio = 15990
            alert("el valor de la pizza es de: "+ precio)
            pago(precio)
        } else if (cantidadIngredientes >=8 && cantidadIngredientes < numIngredientes ){
            let precio = 19990
            alert("el valor de la pizza es de: "+ precio)
            pago(precio)
        } 
}

//OBJETOS Y ARRAYS

const pizzas = [{id:1,nombre:"4 Quesos",ingredientes:["Queso Mozarella","Queso Gouda","Queso Cheddar","Queso Parmesano"]}, 
                {id:2,nombre:"Napolitana",ingredientes:["Tomate","Queso Mozarella","Jamón","Oregano"]}, 
                {id:3,nombre:"Finas Hierbas",ingredientes:["Tomate","Orégano","Albahaca","Tomillo", "Queso Mozarella"]}, 
                {id:4,nombre:"Española",ingredientes:["Tomate","Salame","Chorizo","Queso Mozarella"]}, 
                {id:5,nombre:"Especial Cata",ingredientes:["Tomate","Queso Gouda","Queso Parmesano","Cebolla","Champiñones","Espinaca"]}, 
                {id:6,nombre:"Personalizada"}]

const totalIngredientes = [{id:1, nombre:"Queso Mozarella"},
                            {id:2, nombre:"Queso Gauda"},
                            {id:3, nombre:"Queso Parmesano"},
                            {id:4, nombre:"Queso Cheddar"},
                            {id:5, nombre: "Tomate"},
                            {id:6, nombre:"Aceituna"},
                            {id:7, nombre:"Oregano"},
                            {id:8, nombre:"Jamón"},
                            {id:9, nombre:"Salame"},
                            {id:10, nombre:"Chorizo"},
                            {id:11, nombre:"Champiñon"},
                            {id:12, nombre:"Albahaca"},
                            {id:13, nombre:"Tomillo"},
                            {id:14, nombre:"Espinaca"},
                            {id:15, nombre:"Cebolla"}]

const opcionPago = [{id:1,nombre:"Efectivo"},
                    {id:2,nombre:"Debito"},
                    {id:3,nombre:"Crédito"},
                    {id:4,nombre:"Anular_Pedido"}]   

/*Clase 10*/
//ACTIVIDAD N° 3

document.addEventListener("DOMContentLoaded", function() {
    const saludosIniciales = [
        "¡Bienvenido!",
        "¡Hola como estás! Esto es Pizza's Cata",
        "Quieres Pizza? Estas en el lugar indicado, Pizza's Cata",
        "Revisa nuestras ofertas, gracias por visitar Pizza's Cata"
    ];

    function obtenerMensaje(mensajes) {
        const indice = Math.floor(Math.random() * mensajes.length)
        return mensajes[indice]
    }

    const saludoInicial = document.getElementById("saludo")

    saludoInicial.textContent = obtenerMensaje(saludosIniciales)
})

//Cambio de nombre de cliente

document.addEventListener("DOMContentLoaded", function() {
    const mensajeNombre = document.getElementById("nombreCliente")
    const btncambioNombre = document.getElementById("cambioNombre")

    btncambioNombre.addEventListener("click", function() {
        const nuevoNombre = prompt("Ingrese su nombre de Cliente:")
        if (nuevoNombre !== null) { 
            mensajeNombre.textContent = nuevoNombre
        }
    })
})

//Uso de luxon para que muestre fecha y la hora
document.addEventListener("DOMContentLoaded", function() {

    function obtenerFechaHoraActual() {
        return new Promise((resolve, reject) => {
            if (luxon) {
                const DateTime = luxon.DateTime
                const ahora = DateTime.now().toLocaleString(DateTime.DATETIME_MED)
                resolve(ahora)
            } else {
                reject('Luxon no está cargado correctamente')
            }
        })
    }

    function msjSweetAlert(mensaje) {
        return new Promise((resolve) => {
            Swal.fire({
                title: 'Información',
                text: mensaje,
                icon: 'info',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                resolve()
            })
        })
    }

    obtenerFechaHoraActual()
    .then ((fechaHora) => {

        const fechaHoraElemento = document.getElementById('fechaHora')
        fechaHoraElemento.textContent = "Fecha y hora actual: " + fechaHora

        return msjSweetAlert("Fecha y hora actual: " + fechaHora)

    })
    .then (() => {

        console.log("Ok se mostró la alerta por pantalla")
    })
    .catch ((error) => {

        console.error(error)
    })

})

// /* Actividad 7 Fetch*/

// document.addEventListener("DOMContentLoaded", function() {
//     // URL de la API
//     const url = 'https://jsonplaceholder.typicode.com/users'

//     // Realizar una solicitud fetch para obtener los datos de los usuarios
//     fetch(url)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Error en la llamada a la API')
//             }
//             return response.json()
//         })
//         .then(data => {
//             const listaUsuarios = document.getElementById('listaUsuarios')

//             // Iterar sobre los datos de los usuarios y crear elementos li para cada uno
//             data.forEach(usuario => {
//                 const usuarioElemento = document.createElement('li')
//                 usuarioElemento.textContent = `${usuario.name} - ${usuario.email}`
//                 listaUsuarios.appendChild(usuarioElemento)
//             })
//         })
//         .catch(error => {
//             console.error('Hubo un problema con la petición Fetch:', error)
//         })
// })



//Clase 12 
/**ACTIVIDAD N°4 + PRE ENTREGA**/

function promociones(){


    document.addEventListener("DOMContentLoaded", function() {
        const productoPromociones = [{id:1, nombre:"Pizza 4 Quesos", valor:9990},
                             {id:2, nombre:"Pizza Napolitana",valor:9990},
                             {id:3, nombre:"Pizza finas hierbas",valor:10990},
                             {id:4, nombre:"Pizza española",valor:10990},
                             {id:5, nombre:"Pizza especial Cata", valor:10990},
                             {id:6, nombre:"Papas Fritas chica", valor:3000},
                             {id:7, nombre:"Papas Fritas grande",valor:5000},
                             {id:8, nombre:"Bebida personal",valor:2000},
                             {id:9, nombre:"Bebida 2lts",valor:3500},
                             {id:10, nombre:"Nuggets",valor:4990},
                             {id:11, nombre:"Empanadas queso",valor:5000},
                             {id:12, nombre:"Jugo",valor:1500}] 
        
        const listadoPromociones = document.getElementById("listaPromociones")
            productoPromociones.forEach(function(productoPromo) {
            const nuevaPromo = document.createElement("li")
            nuevaPromo.textContent = "N°"+productoPromo.id  +" " + productoPromo.nombre +" " + "$"+ productoPromo.valor
            listadoPromociones.appendChild(nuevaPromo)
        });
    });

    /*agrego los productos al dom mediante prompt*/

    document.addEventListener("DOMContentLoaded", function() {
        const listaPromos = document.getElementById("listaPromos")
        const btnAgregarProducto = document.getElementById("agregaProducto")
        const btnCalcularPrecio = document.getElementById("calculaPrecio")
        const mensajePrecio = document.getElementById("totalPago")
        const btnVerPago = document.getElementById("verPago")

        
        // Storage y array
        const productosAlmacenados = localStorage.getItem("productos")
        if (productosAlmacenados) {

            const productos = JSON.parse(productosAlmacenados)

            productos.forEach(function(producto) {
                agregarProducto(producto.nombre, producto.precio)
            })
        }
    

            btnAgregarProducto.addEventListener("click", function() {
            
            const nuevoProducto = prompt("Ingrese un producto:")
            const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"))
            console.log("Nuevo producto ingresado:", nuevoProducto)
            console.log("Precio del producto ingresado:", precioProducto)
            if (nuevoProducto && precioProducto) {
                agregarProducto(nuevoProducto, precioProducto)
                guardarProductoEnStorage()
            }
            })  
    
        btnCalcularPrecio.addEventListener("click", function() {
            calculoPromocion()
        })
    
        function agregarProducto(nombre, precio) {
            const nuevoElemento = document.createElement("li")
            nuevoElemento.textContent = nombre + " - $" + precio
            listaPromos.appendChild(nuevoElemento)
        }
    
        function calculoPromocion() {
            let precioTotal = 0
            const productos = listaPromos.querySelectorAll("li")
            productos.forEach(function(producto) {
                const precio = parseFloat(producto.textContent.split(" - $")[1])
                precioTotal += precio
            })

            console.log("El precio de la promoción es: $" + precioTotal)

            mensajePrecio.textContent = "El precio de la promoción es: $" + precioTotal


                btnVerPago.addEventListener("click", function() {
                    precio = precioTotal
                    pago(precio)
                })

        }
        
        function guardarProductoEnStorage() {
            const productosIngresados = []
            const productosEnLista = listaPromos.querySelectorAll("li")
            productosEnLista.forEach(function(item) {
                const nombre = item.textContent.split(" - $")[0]
                const precio = parseFloat(item.textContent.split(" - $")[1])
                productosIngresados.push({ nombre: nombre, precio: precio })
            })
            // Convertir los productos a formato JSON y guardarlos en localStorage
            localStorage.setItem("productos", JSON.stringify(productosIngresados))
        }

    })
}

document.addEventListener("DOMContentLoaded", function() {
    const btnLimpiar = document.getElementById("limpiar")
    
    btnLimpiar.addEventListener("click", function() {
        limpiaDOM()
    });
});

function limpiaDOM() {
    const contenedor = document.getElementById("listaPromos")
    contenedor.textContent = ""
}


//PROGRAMA

alert("Bienvenido a Pizza's Cata, estos son nuestros productos")

menuprincipal()
switch (opcion){
    case 1:

        let listado = "Elige la pizza que más te guste:\n"

        pizzas.forEach(function(pizza) {
            listado += pizza.id + " - " + pizza.nombre +"\n"
        })

        numpizza=Number(prompt(listado))
        
        if (numpizza ===1){
            precio=7990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK, de lo contrario se cancelará el pedido")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===2){
            precio=8990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK, de lo contrario se cancelará el pedido")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===3){
            precio=9990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK, de lo contrario se cancelará el pedido")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===4){
            precio=10990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK, de lo contrario se cancelará el pedido")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===5){
            precio=11990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK, de lo contrario se cancelará el pedido")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===6){
            pizzaPersonalizada()
        } else {
             alert("Opcion no válida, para continuar, presione enter") 
             menuprincipal()
        }
    case 2:
        promociones()
        break
    case 3: //Nuevo Catálogo
        catalogo()
        break
    case 4:
        salir()
    
}
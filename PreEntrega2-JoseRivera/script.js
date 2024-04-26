
//Funciones

function pago(precio){
    let mediodepago=prompt("Elige tu opción de pago: \n1 Pago efectivo \n2 Tarjeta débito \n3 Crédito\n4 Anular pedido")
    let total = 0
    switch(mediodepago){
        case "1":
            total=precio*0.9
            Math.trunc(total) //Se buscó para obtener la parte entera del total
            alert("Tiene un descuento del 10%, el total a pagar es: $" + total)
            do{
                opcion = Number(prompt("Desea agregar una bebida??\nIngrese 1 SI\nIngrese 2 NO"))
            } while (opcion !=1 && opcion !=2)
            if (opcion ==1){
                agregarbebida(total)
                break
            }
            else if (opcion ==2){
                alert("Su cuenta es de: $" + total)
                despedida()
                break
            }   
            break      
        case "2":
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
                alert("Su cuenta es de: $" + total)
                despedida()
                break
            }
            break
        case "3":
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
                alert("Su cuenta es de: $" + total)
                despedida()
                break
            }            
            break  
        
        case "4":
            salir()
            break
    }
} 

function agregarbebida(total){
    let totalboleta=Number(total) 
    let bebida=1500
    totalboleta=totalboleta+bebida
    alert("Su cuenta es de: $" + totalboleta)
    despedida()
}

function despedida(){
    alert ("Muchas gracias por comprar en Pizza's Cata, no olvide su boleta")
}

function cancelado (){
    alert("El pedido ha sido cancelado")
}

function salir(){
    alert("Que tenga buen día, vuelva pronto")
}


function menuprincipal(){

    do{
    opcion = Number(prompt("\nQue deseas realizar\nOpcion 1 Comprar una Pizza\nOpción 2 Elige tu promo\nOpción 3 Revisar Catálogo\nOpción 4 Salir"))
    } while (opcion !=1 && opcion !=2 && opcion !=3 && opcion !=4)

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
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===3){
            precio=9990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===4){
            precio=10990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===5){
            precio=11990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
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
        numpromo=Number(prompt("Elige tu promo favorita: \nOpcion 1: 2 Pizzas Napolitanas + papas fritas \nOpcion 2: 2 Pizzas 4 quesos + porción de nuggets \nOpcion 3: 2 pizzas 4 quesos + papas y nuggets"))
        if (numpromo ===1){
            precio=18990
            pagar=prompt("La promo seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpromo ===2){
            precio=19990
            pagar=prompt("La promo seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpromo ===3){
            precio=21990
            pagar=prompt("La promo seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else {
             alert("Opcion no válida, para continuar, presione enter") 
             salir()
             break
        }
    case 3: //Nuevo Catálogo
        catalogo()
        break
    case 4:
        salir()
        break
}
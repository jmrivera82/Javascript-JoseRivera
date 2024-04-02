
//Funciones

function pago(precio){
    let mediodepago=prompt("Elige tu opción de pago: \n1 Pago efectivo \n2 tarjeta débito \n3 crédito")
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
    opcion = Number(prompt("\nQue deseas comprar\nOpcion 1 Pizza\nOpción 2 Elige tu promo\nOpción 3 Salir"))
    } while (opcion !=1 && opcion !=2 && opcion !=3)

}

//PROGRAMA

alert("Bienvenido a Pizza's Cata, estos son nuestros productos")

menuprincipal()
switch (opcion){
    case 1:
        numpizza=Number(prompt("Elige tu pizza favorita: \n 1 para pizza 4 quesos\n 2 pizza napolitana\n 3 pizza finas hierbas"))
        if (numpizza ===1){
            precio=9990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK, de lo contrario se cancelará el pedido")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===2){
            precio=12990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===3){
            precio=11990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
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
    case 3:
        salir()
        break
}
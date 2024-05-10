

localStorage.setItem('bienvenida','Hola!')
localStorage.setItem('es valido', true)
localStorage.setItem('un numero',20)

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

let mensaje = localStorage.getItem('bienvenida')
let bandera = localStorage.getItem('es valido')
let numero = localStorage.getItem('un numero')

console.log(mensaje)
console.log(bandera)
console.log(numero)

sessionStorage.setItem('seleccionados',[1,2,3])
sessionStorage.setItem('es valido',true)
sessionStorage.setItem('email','info@email.com')

let lista = sessionStorage.getItem('seleccionados').split(",")
let bandera2 = (sessionStorage.getItem('es valido')=='true')
let email = sessionStorage.getItem('email')

console.log (typeof lista)
console.log(typeof bandera2)
console.log(typeof email)


/*
//ciclo para recorrer 

for (let i=0 ; i< localStorage.length; i++){

    let clave = localStorage.key(i)
    console.log ("clave: "+ clave)
    console.log ("Valor: "+ localStorage.getItem(valor))
}

localStorage.setItem('bienvenida','Hola')
sessionStorage.setItem('es valido', true)

localStorage.removeItem('bienvenida')
localStorage.removeItem('es valido')
//localStorage.clear()
//sessionStorage.remove()
*/

/*
const producto1 = {id: 2, producto: "Arroz"}
localStorage.setItem("producto1", producto1) //se guarda object object

localStorage.numeroPrueba = 5

alert(localStorage.numeroPrueba)

let clave = 'toString'
localStorage[clave]= "6"
*/

/*
const producto1 = {id: 2, producto: "Arroz"}
const enJSON = JSON.stringify(producto1)

console.log(enJSON)
console.log(typeof producto1)
console.log(typeof enJSON)

localStorage.setItem("producto1", enJSON)
*/


/*
const enJSON = '{"id": 2, "producto": "Arroz"}'
const producto1  = JSON.parse(enJSON)

console.log(typeof enJSON)
console.log(typeof producto1)
console.log(producto1.producto)

const producto2 = JSON.parse(localStorage.getItem("producto1"))
console.log(producto2.id)

const productos = [{ id:1, producto: "arroz", precio: 125},
                   { id:2, producto: "fideos", precio: 70},
                   { id:3, producto: "Pan", precio:50},
                   { id:4, producto: "Flan", precio: 100}]

const guardarLocal = (clave,valor) => {localStorage.setItem(clave,valor)}

for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto))
}

guardarLocal("listaProductos", JSON.stringify(productos))

class Producto{
    constructor(obj){
        this.nombre = obj.producto.toUpperCase()
        this.precio = parseFloat(obj.precio)
    }

    sumaIVA(){
        this.precio = this.precio * 1,19
    }

}

const almacenados = JSON.parse(localStorage.getItem("listaProductos"))
const productos2 = {}

for (const objeto of almacenados)
    productos2.push(new Producto(objeto))

for (const producto of productos2)
    producto.sumaIVA()

 */   

    document.addEventListener("DOMContentLoaded", function() {
        const saludosIniciales = [
            "¡Bienvenido a Pizza's Cata!",
            "¡Hola como estás! Esto es Pizza's Cata",
            "Quieres Pizza? Estas en el lugar indicado, Pizza's Cata"
        ];
    
        function obtenerMensaje(mensajes) {
            const indice = Math.floor(Math.random() * mensajes.length)
            return mensajes[indice]
        }
    
        const saludoInicial = document.getElementById("saludo")
    
        saludoInicial.textContent = obtenerMensaje(saludosIniciales)
    })
    
    //almacenar
    
    document.addEventListener("DOMContentLoaded", function() {
        const mensajeNombre = document.getElementById("nombreCliente")
        const btncambioNombre = document.getElementById("cambioNombre")

        const mensajeAlmacenado = localStorage.getItem("mensajeNombre")
        if (mensajeAlmacenado){
            mensajeNombre.textContent = mensajeAlmacenado
        }
    
        btncambioNombre.addEventListener("click", function() {
            const nuevoNombre = prompt("Ingrese su nombre de Cliente:")
            if (nuevoNombre !== null) { 
                mensajeNombre.textContent = nuevoNombre

                localStorage.setItem("mensajeNombre",nuevoNombre)
            }
        })
    })

    console.log(localStorage.getItem("mensajeNombre"));


    const datos = [
        {id:1, nombre:"Objeto1"},
        {id:2, nombre:"Objeto2"},
        {id:3, nombre:"Objeto3"}
    ]

    const convJSON = JSON.stringify(datos)

    localStorage.setItem("datos", convJSON)

    const recuperaJSON = localStorage.getItem("datos")

    const recupera = JSON.parse(recuperaJSON)

    console.log(recupera)


/* Actividad 7 Fetch*/

document.addEventListener("DOMContentLoaded", function() {
    const listaPromociones = document.getElementById("listaPromociones")
    const btnAgregarProducto = document.getElementById("agregaProducto")
    const btnCalcularPrecio = document.getElementById("calculaPrecio")
    const mensajePrecio = document.getElementById("totalPago")
    const btnVerPago = document.getElementById("verPago")

    fetch('promociones.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(promo => {
                const nuevaPromo = document.createElement("li")
                nuevaPromo.textContent = `N°${promo.id} ${promo.nombre} $${promo.valor}`
                listaPromociones.appendChild(nuevaPromo)
            })
        })
        .catch(error => console.error('Error al cargar las promociones:', error))

    btnAgregarProducto.addEventListener("click", function() {
        const nuevoProducto = prompt("Ingrese un producto:")
        const precioProducto = parseFloat(prompt("Ingrese el precio del producto:"))
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
        nuevoElemento.textContent = `${nombre} - $${precio}`
        listaPromociones.appendChild(nuevoElemento)
    }

    function calculoPromocion() {
        let precioTotal = 0
        const productos = listaPromociones.querySelectorAll("li")
        productos.forEach(producto => {
            const precio = parseFloat(producto.textContent.split(" - $")[1])
            if (!isNaN(precio)) {
                precioTotal += precio
            }        })
        mensajePrecio.textContent = `El precio de la promoción es: $${precioTotal}`
        btnVerPago.addEventListener("click", function() {
            pago(precioTotal)
        })
    }

    function guardarProductoEnStorage() {
        const productosIngresados = [];
        const productosEnLista = listaPromociones.querySelectorAll("li")
        productosEnLista.forEach(item => {
            const nombre = item.textContent.split(" - $")[0]
            const precio = parseFloat(item.textContent.split(" - $")[1])
            productosIngresados.push({ nombre: nombre, precio: precio })
        })
        localStorage.setItem("productos", JSON.stringify(productosIngresados))
    }

    document.getElementById("limpiar").addEventListener("click", function() {
        limpiaDOM()
    })

    function limpiaDOM() {
        listaPromociones.textContent = ""
    }
})

function pago(total) {

    console.log("El total es:" + total)

    }
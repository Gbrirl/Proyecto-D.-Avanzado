// POO - Moran Reserve
class Cafe {
    constructor(nombre, precio, categoria, descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.descripcion = descripcion;
    }

    mostrarInfo() {
        console.log(`${this.nombre} - $${this.precio} | ${this.categoria}`);
        return `${this.nombre} - $${this.precio}`;
    }

    aplicarDescuento(porcentaje) {
        return this.precio * (1 - porcentaje / 100);
    }
}

// uso
const productos = [
    new Cafe("Espresso Reserve", 4.50, "Caliente", "Intenso y aromático"),
    new Cafe("Cold Brew", 5.50, "Frío", "Suave y refrescante"),
    new Cafe("Cappuccino Moran", 5.50, "Caliente", "Crema perfecta")
];


class Carrito {
    constructor() {
        this.items = [];
    }

    agregarProducto(producto) {
        this.items.push(producto);
        console.log(`${producto.nombre} agregado al carrito`);
    }

    total() {
        return this.items.reduce((sum, prod) => sum + prod.precio, 0);
    }
}

const carrito = new Carrito();


productos.forEach(p => carrito.agregarProducto(p));
console.log("Total carrito: $" + carrito.total().toFixed(2));
'''

with open('/mnt/agents/output/script.js', 'w', encoding='utf-8') as f:
    f.write(script_js)

print("✅ script.js guardado")
print("\n" + "="*50)
print("📦 TODOS LOS ARCHIVOS LISTOS:")
print("="*50)
archivos = [
    "style.css",
    "index.html", 
    "menu.html",
    "nosotros.html",
    "galeria.html",
    "ubicacion.html",
    "contacto.html",
    "script.js"
]

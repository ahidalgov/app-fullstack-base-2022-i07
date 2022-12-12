class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    toString() {
        return "Nombre: " + this.nombre + "Edad: " + this.edad;
    }
}

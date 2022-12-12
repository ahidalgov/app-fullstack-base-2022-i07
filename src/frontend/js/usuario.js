class Usuario extends Persona {
    constructor(nombre, username, email) {
        super(nombre);
        this.username = username;
        this.email = email;
    }
    getUsername() {
        return this.username;
    }
    toString() {
        return super.toString() + "Username:" + this.username;
    }
    recuperarContraseña() {
        return "puede recuperar";
    }
    modificarUsuario() {
        return "no puede realizarlo";
    }
}

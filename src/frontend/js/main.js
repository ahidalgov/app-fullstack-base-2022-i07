class Main {
    constructor(per) {
        this.framework = new Framework();
        this.personas = new Array();
        this.personas.push(per);
        console.log(this);
    }
    getPersona() {
        return this.personas;
    }
    //consultarDispositivoAlServidor(){
    //this.framework.ejecutarRequest("GET", "http://localhost:8000/devices1",this);
    //}
    cambiarEstadoDispositivoAlServidor() {
        let json = { id: 1, state: 0 };
        this.framework.ejecutarRequest("POST", "http://localhost:8000/deviceChange", this, json);
    }
    cargarGrilla(listaDisp) {
        console.log("llego info del servidor", listaDisp);
        let cajaDips = document.getElementById("cajaDisp");
        let grilla = "<ul class='collection'>";
        for (let disp of listaDisp) {
            grilla += "<li class='collection-item avatar'>";
            if (disp.type == 1) {
                grilla += "<img src='static/images/lightbulb.png' alt='' class='circle'> ";
            }
            else {
                grilla += "<img src='static/images/window.png' alt='' class='circle'> ";
            }
            grilla += ` <span class="title negrita">${disp.name}</span>
            <p>${disp.description}
            </p>
            <a href="#!" class="secondary-content">
              <div class="switch">
                  <label>
                    Off`;
            if (disp.state) {
                grilla += `<input id="cb_${disp.id}" type="checkbox" checked>`;
            }
            else {
                grilla += `<input id="cb_${disp.id}" type="checkbox">`;
            }
            grilla += `<span class="lever"></span>
                    On
                  </label>
              


                </div>
                

          </a>
          <div>
          `;
            grilla += `<button class="btn waves-effect waves-light button-view" id="eli_${disp.id}" name="hello_button">Eliminar</button>`;
            `
                
                </div>
          </li>`;
        }
        grilla += "</ul>";
        cajaDips.innerHTML = grilla;
        for (let disp of listaDisp) {
            let cb = document.getElementById("cb_" + disp.id);
            cb.addEventListener("click", this);
        }
        for (let disp of listaDisp) {
            let eliminar = document.getElementById("eli_" + disp.id);
            eliminar.addEventListener("click", this);
        }
        this.framework.ocultarCargando();
    }
    handleEvent(object) {
        let tipoEvento = object.type;
        let objEvento;
        objEvento = object.target;
        if (objEvento.id == "btnOtro") {
            console.log(objEvento.id, objEvento.textContent);
            let dispid = document.getElementById("iddisp").value;
            let nombredisp = document.getElementById("nombredisp").value;
            let json = { id: dispid, name: nombredisp };
            this.framework.ejecutarRequest("POST", "http://localhost:8000/devices6", this, json);
            alert("Se inserto el dispositivo numero:" + dispid);
        }
        else if (objEvento.id == "btnSaludar") {
            this.framework.mostrarCargando();
            //this.consultarDispositivoAlServidor();
            this.framework.ejecutarRequest("GET", "http://localhost:8000/devices1", this);
        }
        else if (objEvento.id.startsWith("cb_")) {
            let idDisp = objEvento.id.substring(3);
            let checked = objEvento.checked;
            let json = { id: idDisp, state: checked };
            this.framework.ejecutarRequest("POST", "http://localhost:8000/devices5", this, json);
            alert("Se cambio el estado del dispositivo " + idDisp + " -" + checked);
        }
        else if (objEvento.id.startsWith("eli_")) {
            let eliDisp = objEvento.id.substring(4);
            let json = { id: eliDisp };
            this.framework.ejecutarRequest("DELETE", "http://localhost:8000/devices7", this, json);
            alert("Se elimino el dispositivo " + eliDisp);
        }
    }
}
window.addEventListener("load", () => {
    let per1 = new Persona("Matias");
    per1.edad = 12;
    let main = new Main(per1);
    mostrar(main);
    let btn = document.getElementById("btnSaludar");
    btn.addEventListener("click", main);
    let btn2 = document.getElementById("btnOtro");
    btn2.addEventListener("click", main);
    /*btn.addEventListener("click",()=>{
       alert("Hola");
   });
   btn.addEventListener("click",function(){
       alert("Chau");
   });*/
    //btn.addEventListener("click",saludar);
});
/*modificar(user);
modificar(new Administrador());
ver(user);
ver(new Persona("matias"));*/
/*function saludar (){
alert("Hola y chau")

}*/
/*function ver(ac:Persona){
    ac.toString();
    
    }

function modificar(ac:Acciones){
ac.modificarUsuario();


}*/
function mostrar(main) {
    let personas = main.getPersona();
    let datosPersonas = "";
    for (let i in personas) {
        datosPersonas = datosPersonas + personas[i].toString();
    }
}

class Framework {
    ejecutarRequest(metodo, url, responseHandler, data) {
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = () => {
            if (xmlHttp.readyState == 4) {
                if (xmlHttp.status == 200) {
                    let listaDisp = JSON.parse(xmlHttp.responseText);
                    console.log("llego info del servidor", listaDisp);
                    responseHandler.cargarGrilla(listaDisp);
                    /*let cajaDips = document.getElementById("cajaDisp");*/
                    /*cajaDips.innerHTML="<h4>Dispositivos a mostrar " + listaDisp.length+":</h4>";
                    for (let disp of listaDisp){
                    cajaDips.innerHTML+="<h5>" + disp.id + "-" + disp.name + "</h5>";*/
                }
                else {
                    alert("error en la consula");
                }
            }
        };
        xmlHttp.open(metodo, url, true);
        console.log("escribir la conexion");
        if (data != undefined) {
            xmlHttp.setRequestHeader("Content-Type", "application/json");
            xmlHttp.send(JSON.stringify(data));
        }
        else {
            xmlHttp.send();
            console.log("envie la consulta");
        }
    }
    mostrarCargando() {
        let imgLoading = document.getElementById("loading");
        imgLoading.hidden = false;
    }
    ocultarCargando() {
        let imgLoading = document.getElementById("loading");
        imgLoading.hidden = true;
    }
}

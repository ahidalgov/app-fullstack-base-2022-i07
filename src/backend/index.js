//=======[ Settings, Imports & Data ]==========================================

var PORT    = 3000;

var express = require('express');
var app     = express();
var utils   = require('./mysql-connector');

// to parse application/json
app.use(express.json()); 
// to serve static files
app.use(express.static('/home/node/app/static/'));

//=======[ Main module code ]==================================================

var datos = require ('./datos.js');


app.get('/devices1/', function (request,response) {
    //console.log (datos);        
    setTimeout(()=>{
        response.send(JSON.stringify(datos)).status(200);
    },2000);
            });

            app.get('/devices3/:id', function (request,response) {
                let datosFiltrados = datos.filter(item=>item.id==request.params.id);
                response.json (datosFiltrados[0]);
                         });
                         
                         app.post('/devices5/', function (request,response) {
                            let datosFiltrados = datos.filter(item=>item.id==request.body.id);
                            if (datosFiltrados.length>0){
                                datosFiltrados[0].state =request.body.state;
                            }
                            
                            response.json (datosFiltrados[0]);
                                     });   
                                     
                                     app.post('/devices6/', function (request,response) {
                                                        
                                        datos = {
                                            id: request.body.id,
                                            name: request.body.name
                                           };
                                        
                                        response.json (datos);
                                                 });    

                                                 app.delete('/devices7/', function (request,response) {
                                                    let datosFiltrados = datos.filter(item=>item.id==request.body.id);
                                                    if (datosFiltrados.length>0){
                                                        datosFiltrados[0].name='';
                                                        datosFiltrados[0].description='';
                                                        datosFiltrados[0].state='';
                                                        datosFiltrados[0].type='';
                                                    }
                                                    
                                                    response.json (datosFiltrados[0]);
                                                             });  

app.listen(PORT, function(req, res) {
    console.log("NodeJS API running correctly");
});

//=======[ End of file ]=======================================================

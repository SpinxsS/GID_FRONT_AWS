$("#btnEventsRD").on('click', function (){
   var id = $("#listClient").val();
   var fhi = $("#startTime").val();
   var fhf = $("#endTime").val();
   
   if(empty(fhi, fhf, id)){
       
   } else{
       $("#loadEventsRD").html("");
       $("#loadEventsRD").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
       $.ajax({
           url:'http://' + readConfig()+ '/reportes/events/devices/'+ '/'+ id + '/'+ convertFh(fhi)+'/'+ convertFh(fhf) ,
           type:'GET',
           dataType:'json'
       }).always(function (data){
            if (data.length == 0) {
                toastr.warning("No hay datos, Consulte en otras Fechas");
            } else{
                eventosReport(data);
            }
       });
   }
});

/* CLIENTE */
$.ajax({
    url: 'http://' + readConfig() + '/consultas/client',
    type: 'GET',
    dataType: 'json'
}).always(function(data){
     valueCliente(data);
 });
 function valueCliente(data){
  $.each(data, function(key, val){
     $("#listClient").append("<option value='" + val.ID + "'>" + val.name_client + "</option>"); 
  });
 } 
 /*VALIDADOR VACIOS*/
function empty(fhi, fhf, cli) {
    var response = false;
    if (fhi.length === 0 || fhf.length === 0 || cli.length == 0 ) {
        toastr.error("Campos vacios");
        response = true;
    } else {
        toastr.success("Consultando datos");
    }
    return response;
}
 /*CONVERT FECHA*/
function convertFh(val) {
    var sp = val.split("-");
    return sp[0] + sp[1] + sp[2];
}
function eventosReport(data){
    var response = "";
    
    $.each(data, function(key, val){
       $.each(val.Eventos, function(keyv, eve){
                 response += tableRe(eve.cliente, eve.device ,eve.ceñal,eve.fecha, eve.fhi, eve.fhf, eve.salida, eve.circuito, eve.potencia ); 
       });
    });
     $("#loadEventsRD").html(tableAll(response));       
}
function tableRe(cli, dev,se, fec, fhi, fhf, out, cir, pot){
    var val = "<tr>\n\
            <td>"+ cli + "</td>\n\
            <td>"+ dev+ " </td>\n\
            <td>"+ se  + "</td>\n\
            <td>"+ fec + "</td>\n\
            <td>"+ fhi + "</td> \n\
            <td>"+ fhf + "</td>\n\
            <td>"+ out + "</td> \n\
            <td>"+ cir + "</td>\n\
            <td>"+ pot + "</td> \n\
            </tr>";
    return val;
}
function tableAll(data){
    return "<script src='../../models/Configs/app.configs.table.js'></script>\n\
            <table class='table table-sm table-striped text-center ' id='tableGeneral'>" +
            "<thead class='thead-dark'>"+
            "<tr>"+
            "<th>Cliente</th>"+
            "<th>Dispositivo</th>"+
            "<th>Señal</th>"+
            "<th>Fecha</th>"+
            "<th>Hora Inicio</th>"+
            "<th>Hora Fin</th>"+
            "<th>Salida</th>"+
            "<th>Descripción</th>"+
            "<th>Potencía(kW)</th>"+
            "</tr>"+
            "</thead>"+
            "<tbody>" + data + "</tbody>"+
            "</table>";
}
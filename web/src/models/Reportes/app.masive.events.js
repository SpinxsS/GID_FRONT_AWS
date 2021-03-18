$("#btnEventsRD").on('click', function (){
    var fhi= $("#startTime").val();
    var fhf = $("#endTime").val();
    
    if (empty(fhi, fhf)) {
        
    }else{
        $("#loadEventsRD").html("");
        $("#loadEventsRD").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
        $.ajax({
            url: 'http://' + readConfig() + '/reportes/events/masive/' + '/' + convertFh(fhi) + '/' + convertFh(fhf),
            type: 'GET',
            dataType: 'json'
        }).always(function (data){
            if (data.length == 0) {
                toastr.warning("No hay datos, Consulte en otras Fechas");
            } else{
                masiveEvents(data);
            }
        })
    }
});
 /*VALIDADOR VACIOS*/
function empty(fhi, fhf) {
    var response = false;
    if (fhi.length === 0 ||fhf.length === 0 ) {
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
function masiveEvents(data){
    var response = "";
    $.each(data, function (key, val){
        console.log(val);
        $.each(val.eventos, function(keyv, eve){
               response +=  tableRe(eve.cliente, eve.device, eve.ceñal, eve.fecha, eve.fhi, eve.fhf)
        });
    });
    $("#loadEventsRD").html(tableAll(response));
}
function tableRe(cli, dev, se, fec, fhi, fhf){
        var val = "<tr>\n\
            <td>"+ cli + "</td>\n\
            <td>"+ dev+ " </td>\n\
            <td>"+ se  + "</td>\n\
            <td>"+ fec + "</td>\n\
            <td>"+ fhi + "</td> \n\
            <td>"+ fhf + "</td>\n\
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
            "</tr>"+
            "</thead>"+
            "<tbody>" + data + "</tbody>"+
            "</table>";
}
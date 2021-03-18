$("#btnOutsRD").on('click',function (){
    var id = $("#listDisp").val();
    var fhi = $("#startTime").val();
    var fhf = $("#endTime").val();
    var eve = $("#listEvent").val();
    if (empty(fhi, fhf, id, eve)) {
        
    }else{
        $("#loadOutsRD").html("");
        $("#loadOutsRD").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
        /* METHOD POST AND GET*/
        $.ajax({
            url: 'http://' + readConfig()+ '/reportes/outs/views/'+ id +'/' + '/' + convertFh(fhi) + '/' + convertFh(fhf) + '/' + eve,
            type:'GET',
            dataType:'json'
        }).always(function(data){
            if (data.length == 0) {
                toastr.warning("No hay datos, Consulte en otras fechas");
            }else{
               valueReport(data); 
            }
        });
    }
});

/* SELECTION DEVICE */
$("#listClient").change(function(e){
   var id = $(this).val();
   $.ajax({
       url: 'http://' + readConfig() + '/consultas/device/unrepeat/' + id,
       type: 'GET',
       dataType: 'json'
   }).always(function(data){
        if (data.length == 0) {
            toastr.warning("No tiene Cliente Asociados, Verifique la tabla de Asociaciones");
        }else{
            valueDispo(data);
        }
   });
});

/* SELECCION NIVEL SEÑAL */
$("#listDisp").change(function(e){
   var id = $(this).val();
   $.ajax({
       url:'http://' + readConfig() + '/reportes/valInsta/nameEvents/' + id,
       type:'GET',
       dataType:'json'
   }).always(function(data){
        if (data.length === 0) {
            toastr.error("El equipo no tiene programado succesos de RD, verifique la Matriz de Configuración");
        }else{
           valuedSignal(data); 
        }
   });
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
 function valueDispo(data){
     var  res ="";
     $.each(data, function(key, val){
         res += "<option value='"+ val.ID+"'>" + val.name + "</option>";
     });
     if (res.length == 0) {
        toastr.error("No tiene dispositivos Asociados");
    }else{
        var cons= "<option value=''>Seleccione Dispositivo</option>" + res;
        $("#listDisp").html(cons);
    }
 }
 function valuedSignal(data){
     var res="";
     $.each(data, function(key, val){
         var sep = (val.name).trim().split("_");
        res += "<option value='"+sep[2]+"'>" + val.name + "</option>";
     });
     if (res.length == 0) {
        toastr.error("No tiene Matriz de configuracion");
    }else{
        var cons = "<option value =''>Seleccione Value Señal </option>" + res;
        $("#listEvent").html(cons);
     }
    
 }
 /*VALIDADOR VACIOS*/
function empty(fhi, fhf, cli, eve) {
    var response = false;
    if (fhi.length == 0 || fhf.length == 0 || cli.length == 0 || eve.length ==0) {
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
function valueReport(data){
    var response = "";
    $.each(data, function (key, val){
        response += tableRe(val.fecha,val.salidas, val.A00, val.A01,val.A02,val.A03,val.A04,val.A05,val.A06,
          val.A07,val.A08,val.A09,val.A10,val.A11,val.A12,val.A13,val.A14,val.A15,val.A16,val.A17,val.A18,val.A19,val.A20,
          val.A21,val.A22,val.A23,);
           
    });
    $("#loadOutsRD").html(tableAll(response));
}
function tableRe(fecha,salidas, A00, A01,A02,A03,A04,A05,A06,A07,A08,A09,A10,A11,A12,A13,A14,A15,A16,A17,A18,A19,A20,A21,A22,A23){
    var val = "<tr> \n\
                <td>" + (fecha) + "</td>\n\
                <td>"+ (salidas) + "</td>\n\
                <td>"+ isnull(A00) + "</td>\n\
                <td>"+ isnull(A01) + "</td>\n\
                <td>"+ isnull(A02) + "</td>\n\
                <td>"+ isnull(A03) + "</td> \n\
                <td>"+ isnull(A04) + "</td>\n\
                <td>"+ isnull(A05) + "</td>\n\
                <td>"+ isnull(A06) + "</td>\n\
                <td>"+ isnull(A07) + "</td>\n\
                <td>"+ isnull(A08) + "</td>\n\
                <td>"+ isnull(A09) + "</td>\n\
                <td>"+ isnull(A10) + "</td>\n\
                <td>"+ isnull(A11) + "</td> \n\
                <td>"+ isnull(A12) + "</td>\n\
                <td>"+ isnull(A13) + "</td>\n\
                <td>"+ isnull(A14) + "</td>\n\
                <td>"+ isnull(A15) + "</td>\n\
                <td>"+ isnull(A16) + "</td>\n\
                <td>"+ isnull(A17) + "</td>\n\
                <td>"+ isnull(A18) + "</td>\n\
                <td>"+ isnull(A19) + "</td> \n\
                <td>"+ isnull(A20) + "</td>\n\
                <td>"+ isnull(A21) + "</td>\n\
                <td>"+ isnull(A22) + "</td>\n\
                <td>"+ isnull(A23) + "</td>\n\
                </tr>";
    return val;
}
function tableAll(tdAll){
    return "<script src='../../models/Configs/app.configs.table.js'></script>\n\
            <table class='table table-sm table-striped text-center  table-responsive' id='tableGeneral'>" +
            "<thead class='thead-dark'>" +
            "<tr>"+
            "<th>FECHA(AAAA/MM/DD)</th>"+
            "<th>SALIDAS</th>"+
             "<th>00:00</th>" +
            "<th>01:00</th>" +
            "<th>02:00</th>" +
            "<th>03:00</th>" +
            "<th>04:00</th>" +
            "<th>05:00</th>" +
            "<th>06:00</th>" +
            "<th>07:00</th>" +
            "<th>08:00</th>" +
            "<th>09:00</th>" +
            "<th>10:00</th>" +
            "<th>11:00</th>" +
            "<th>12:00</th>" +
            "<th>13:00</th>" +
            "<th>14:00</th>" +
            "<th>15:00</th>" +
            "<th>16:00</th>" +
            "<th>17:00</th>" +
            "<th>18:00</th>" +
            "<th>19:00</th>" +
            "<th>20:00</th>" +
            "<th>21:00</th>" +
            "<th>22:00</th>" +
            "<th>23:00</th>" +
            "</tr>"+
            "</thead>"+
            "<tbody>" + tdAll + "</tbody>"+
            "</table>";
}
/*VALIDADOR NULO*/
function isnull(val) {
    var response = "";
    if (val === "null" || val === "" || val == null) {
        response = "N/A";
    } else {
        response = "OFF";
    }
    return response;
}
function td(val, v){
    var response = "";
    if (v == 1) {
        response = "<td class='"+ printColor(val)+"'>" + val + "</td>";
    }
    return response;
}
function printColor(status){
    var response = "";
    if (status === "N/A") {
        response = "bg-white-inp";
    }else if (status === "OFF") {
        response = "bg-danger-inp";
    }else{
        response = "bg-warning-inp";
    }
    return response;
}
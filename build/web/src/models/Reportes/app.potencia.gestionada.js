/*POTGES*/
$("#btnReportPG").on('click', function () {
    var id = $("#listDisp").val();
    var fhi = $("#startTime").val();
    var fhf = $("#endTime").val();
    if (empty(fhi, fhf, id)) {

    } else {
        /*CLEAR TABLE*/
        $("#tablePotGest").html("");
        $("#tablePotGest").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
        /*POT_GES*/
        $.ajax({
            url: 'http:///consultas/potenciaGestionada/'+id+'/' + convertFh(fhi) + '/' + convertFh(fhf),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $("#tablePotGest").html(table(valuePG(data)));
        });      
    }
});
/*VALUES POTGES*/
function valuePG(data) {
    var res = 0;
    var fecha = "",nameVariable="";
    var i = 0, j = 0;
    var hh = new Array();
    var vl = new Array();
    var table = new Array();
    $.each(data, function (key, val) {
        if (i == 0) {
            fecha = val.fecha;
            nameVariable = val.variable;
            i++;
            
        }
        
        if (fecha === val.fecha) {
            j++;
        } else {
            /* console.log(fecha);
             console.log(val.variable);
             console.log(hh);
             console.log(vl);*/
            var responseTd = "";
            var aHh = ["A00", "A01", "A02", "A03", "A04", "A05", "A06", "A07", "A08", "A09", "A10", "A11", "A12", "A13","A14", "A15", "A16", "A17", "A18", "A19", "A20", "A21", "A22", "A23"];
            responseTd += "<td>" + fecha + "</td>";
            responseTd += "<td>" + val.variable + "</td>";
            for (var w = 0; w < aHh.length; w++) {
                var idx = hh.indexOf(aHh[w]);
                if (idx == -1) {
                    responseTd += "<td>0.00</td>";
                } else {
                     var values = vl[idx];
                     responseTd += "<td>" + values + "</td>"; 
                }
            }
            var responseTr="<tr>"+responseTd+"</tr>";
            table.push(responseTr);
            //---RESET---
            responseTd="";
            responseTr="";
            hh = new Array();
            vl = new Array();
            fecha = "";
            if(nameVariable===val.variable){  }else{ res="-"; }
            i = 0;
            j = 0;
            if (i == 0) {
                fecha = val.fecha;
                nameVariable = val.variable;
                i++;
                j++;
            }
        }

        if (j > 0) {
            if (val.status === "ON") {
                res = val.VALUE.toFixed(2);
                hh.push(val.HOUR);
                vl.push("0.00");
            }
            if (val.status === "OFF") {
                hh.push(val.HOUR);
                if(res==0 || res==="-"){ vl.push("0.00"); }else{ vl.push(res);  }
            }
        }
    });
    return table;
}
/*TABLE ARMADA*/
function table(tbody){
    var td = "";
    for (var i = 0; i < tbody.length; i++) {
        td += tbody[i];
    }
    var res = "<script src='../../models/Configs/app.configs.table.js'></script>\n\
            <table class='table table-sm table-striped text-center' id='tableGeneral'>" +
            "<thead class='thead-dark'>" +
            "<tr>" + "<th>Fecha</th><th>Nombre Cir</th><th>00:00:00</th><th>01:00:00</th><th>02:00:00</th><th>03:00:00</th><th>04:00:00</th><th>05:00:00</th><th>06:00:00</th><th>07:00:00</th><th>08:00:00</th><th>09:00:00</th><th>10:00:00</th><th>11:00:00</th><th>12:00:00</th><th>13:00:00</th><th>14:00:00</th><th>15:00:00</th><th>16:00:00</th><th>17:00:00</th><th>18:00:00</th><th>19:00:00</th><th>20:00:00</th><th>21:00:00</th><th>22:00:00</th><th>23:00:00</th>" + "</tr>" +
            "</thead>" +
            "<tbody>" +
            td
            + "</tbody>"
            + "</table>";
    return res;
}
/*SELECTION CLIENTE*/
$("#listClient").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/device/' + id,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        if (data.length == 0) {
            toastr.warning("No tiene clientes asociado, revise la tabla de asociaciones");
        } else {
            valueDispos(data);
        }
    });
});
/*VALUES CLIENTE*/
$.ajax({
    url: 'http://'+readConfig()+'/consultas/client',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    valueClient(data);
});
function valueClient(data) {
    $.each(data, function (key, val) {
        $("#listClient").append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
}
function valueDispos(data) {
    var res = "";
    $.each(data, function (key, val) {
        res += "<option value='" + val.ID + "'>" + val.name + "</option>";
    });
    if (res.length == 0) {
        toastr.error("No tiene dispositivos asociados")
    } else {
        var cons = "<option value=''>Seleccionar Dispositivo</option>" + res;
        $("#listDisp").html(cons);
    }
}
/*CONVERT FECHA*/
function convertFh(val) {
    var sp = val.split("-");
    return sp[0] + sp[1] + sp[2];
}
/*VALIDADOR VACIOS*/
function empty(fhi, fhf, cli) {
    var response = false;
    if (fhi.length == 0 || fhf.length == 0 || cli.length == 0) {
        toastr.error("Campos vacios");
        response = true;
    } else {
        toastr.success("Consultando datos");
    }
    return response;
}
//LOAD
$("#loadingFileSystem").load("../../views/LineaBase/Modals/cargarArchivo.jsp");
$("#loadingBaseLine").load("../../views/LineaBase/Modals/seleccionLB.jsp");
/*CLIENTE*/
$.ajax({
    url: 'http://'+readConfig()+'/consultas/client',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    valueClientCN(data);
});
/*VALUES CLIENTE*/
function valueClientCN(data) {
    $.each(data, function (key, val) {
        $("#cnlistClient").select2({theme: 'bootstrap4'
        }).append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
}
/*DEVICE*/
$("#cnlistClient").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/device/unrepeat/' + id,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        valueDeviceCN(data);
    });
});
/*VALUES DEVICE*/
function valueDeviceCN(data) {
    var res = "";
    $("#cnlistDevice").html("");
    $.each(data, function (key, val) {
        res += "<option value='" + val.ID + "'>" + val.name + "</option>";
    });
    if (res.length == 0) {
        toastr.error("No tiene variables asociados")
    } else {
        var cons = "<option value=''>Seleccionar Dispositivo</option>" + res;
        $("#cnlistDevice").html(cons);
    }
}
/*VALIDADOR NULO*/
function isNull(val) {
    var response = "";
    if (val === "null" || val === "" || val == null) {
        response = "0";
    } else {
        response = val;
    }
    return response;
}
/*CAMPOST VACIOS*/
function emptysc(client, device, day) {
    var response = false;
    if (client.length == 0 || device.length == 0) {
        toastr.error("Campos vacios");
        response = true;
    }
    return response;
}
/*CONSULTA*/
$("#btnACnLb").on('click', function () {
    var client = $("#cnlistClient").val();
    var device = $("#cnlistDevice").val();
    if (emptysc(client, device)) {

    } else {
       $("#loadConsultTable").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
        $.ajax({
            url: 'http://'+readConfig()+'/consultas/view/baseline/' + client + '/' + device,
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            view(data);
            /*INACTIVAR*/
            $("a[rel='btnACnLbInactive']").on('click', function () {
                var client = $("#cnlistClient").val();
                var device = $("#cnlistDevice").val();
                var day = $(this).attr("val");
                
                if (emptysc(client, device)) {

                } else {
                    if (confirm("¿Desea Inactivar la linea base?")) {
                        $.ajax({
                            url: 'http://'+readConfig()+'/consultas/baseline/delete/' + device + '/' + day,
                            type: 'POST',
                            dataType: "json"
                        }).always(function (data) {
                            if (data > 0) {
                                toastr.success("Eliminado Correctamente");
                            } else {
                                toastr.error("No se pudo completar la operación");
                            }
                        });
                    }
                }
            });
        });
    }
});
/*VALUES CONSULTA*/
function view(data) {
    var res = "";
    $("#loadConsultTable").html("");

    $.each(data, function (key, val) {
        res += tableReport(val.day_desc,val.day, val.A00, val.A01, val.A02, val.A03, val.A04, val.A05, val.A06, val.A07, val.A08, val.A09, val.A10, val.A11, val.A12, val.A13, val.A14, val.A15, val.A16, val.A17, val.A18, val.A19, val.A20, val.A21, val.A22, val.A23);
    });
    var tableRes = "<script src='../../models/Configs/app.configs.table.js'></script>\n\
                    <table class='table table-sm table-striped text-center' id='tableGeneral'>\n\
                    <thead class='thead-dark'><tr><th>Dia</th><th>00:00</th><th>01:00</th><th>02:00</th><th>03:00</th><th>04:00</th>\n\
                    <th>05:00</th><th>06:00</th><th>07:00</th><th>08:00</th><th>09:00</th><th>10:00</th><th>11:00</th><th>12:00</th>\n\
                    <th>13:00</th><th>14:00</th><th>15:00</th><th>16:00</th><th>17:00</th><th>18:00</th><th>19:00</th><th>20:00</th>\n\
                    <th>21:00</th><th>22:00</th><th>23:00</th><th></th></tr></thead><tbody>" + res + "</tbody></table>";
    $("#loadConsultTable").html(tableRes);
}
/*TABLA CONSULTA*/
function tableReport(cod,day, v00, v01, v02, v03, v04, v05, v06, v07, v08, v09, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23) {
    var val = "<tr>\n\
            <td id='cod'><span class='badge badge-pill badge-info'>" + isNull(cod) + "</span></td>\n\
            <td id='00' >" + isNull(v00) + "</td> \n\
            <td id='01' >" + isNull(v01) + "</td>\n\
            <td id='02' >" + isNull(v02) + "</td>\n\
            <td id='03' >" + isNull(v03) + "</td>\n\
            <td id='04' >" + isNull(v04) + "</td>\n\
            <td id='05' >" + isNull(v05) + "</td>\n\
            <td id='06' >" + isNull(v06) + "</td> \n\
            <td id='07' >" + isNull(v07) + "</td>\n\
            <td id='08' >" + isNull(v08) + "</td>\n\
            <td id='09' >" + isNull(v09) + "</td>\n\
            <td id='10' >" + isNull(v10) + "</td>\n\
            <td id='11' >" + isNull(v11) + "</td> \n\
            <td id='12' >" + isNull(v12) + "</td> \n\
            <td id='13' >" + isNull(v13) + "</td>\n\
            <td id='14' >" + isNull(v14) + "</td>\n\
            <td id='15' >" + isNull(v15) + "</td>\n\
            <td id='16' >" + isNull(v16) + "</td>\n\
            <td id='17' >" + isNull(v17) + "</td> \n\
            <td id='18' >" + isNull(v18) + "</td> \n\
            <td id='19' >" + isNull(v19) + "</td>\n\
            <td id='20' >" + isNull(v20) + "</td>\n\
            <td id='21' >" + isNull(v21) + "</td>\n\
            <td id='22' >" + isNull(v22) + "</td>\n\
            <td id='23' >" + isNull(v23) + "</td>\n\
            <td id='dd'>\n\
                    <a rel='btnACnLbInactive' val='" + day + "'>\n\
                    <span class='badge badge-danger'>Inactivar</span>\n\
                        </a>\n\
            </td>\n\
             </tr>";
    return val;
}
$("#btnReport").on('click', function () {
    $("#loadPoscons").html("");
    $("#tableTension").html("");
    $("#tableLoad").html("");
    var id = $("#listDisp").val();
    $("#tableLoad").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
    var tc = $("#typeController").val();
    //CONSULTA DISPOSITIVO
    if (tc === "1") {
        //MONOFASICO
        $.ajax({
            url: 'http://' + readConfig() + '/reportes/valInsta/Monofasico/' + id,
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            var table = "";
            $.each(data, function (key, val) {
                table += "<tr>" + val + "</tr>";
            });
           
            $("#tableLoad").html(tableLoadd(table));
            //POS CONTROLADOR
            $.ajax({
                url: 'http://' + readConfig() + '/reportes/valInsta/PosConActual/' + id,
                type: 'GET',
                dataType: "json"
            }).always(function (data) {
                $.each(data, function (key, val) {
                    $("#loadPoscons").html(posLoad(val));
                });
            });
            //TENSIONES
            $.ajax({
                url: 'http://' + readConfig() + '/reportes/valInsta/tenMonofasico/' + id,
                type: 'GET',
                dataType: "json"
            }).always(function (data) {
                var tension = "";
                $.each(data, function (key, val) {
                    tension += "<td>" + val + "</td>";
                });
                $("#tableTension").html(tableLoadTension(tension));
            });
        });
    } else {
        //TRIFASICO
        //TABLA GENERAL
        $.ajax({
            url: 'http://' + readConfig() + '/reportes/valInsta/Trifasico/' + id,
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            var tdG = "";
            var trG = "";
            var tdName = "", tdFh = "", tableGlobal = "", tdRele = "";
            $.each(data, function (key, val) {
                if ((key == 0) || (key == 6) || (key == 12) || (key == 18)) {
                    $.each(val, function (key1, val1) {
                        tdName = tableTdTrifasico(val1);
                    });
                }
                if ((key >= 1 && key <= 3) ||
                        (key >= 7 && key <= 9) ||
                        (key >= 13 && key <= 15) ||
                        (key >= 19 && key <= 21)) {
                    $.each(val, function (key1, val1) {
                        tdG += tableTrTrifasico(tableTdTrifasico(val1));
                    });
                    trG += tableTdTrifasico(tableTrifasico(tdG));
                    tdG = "";
                }
                if ((key == 4) || (key == 10) || (key == 16) || (key == 22)) {
                    $.each(val, function (key1, val1) {
                        tdRele = tableTdTrifasico(val1);
                    });
                }
                if ((key == 5) || (key == 11) || (key == 17) || (key == 23)) {
                    $.each(val, function (key1, val1) {
                        tdFh = tableTdTrifasico(val1);
                    });
                    tableGlobal += tableTrTrifasico(tdName + trG + tdRele + tdFh);
                    trG = "";
                }
            });

            $("#tableLoad").html(tableGeneralTrifasico(tableGlobal));
        });
        //TABLA TENSIONES
        $.ajax({
            url: 'http://' + readConfig() + '/reportes/valInsta/tenTrifasico/' + id,
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            var gTension = "", tGlobal = "";
            $.each(data, function (key, val) {
                gTension += tableTdTrifasico(val);
            });

            tGlobal = tableGeneralTensiones(tableTrTrifasico(gTension));


            $("#tableTension").html(tGlobal);

        });
        //TABLA POS CON
        $.ajax({
            url: 'http://' + readConfig() + '/reportes/valInsta/PosConActual/' + id,
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#loadPoscons").html(posLoad(val));
            });
        });
    }
});
////TABLE TENSION
function tableLoadTension(val) {
    var res = "<table class='table table-sm text-center'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th> Tension 1 </th>" +
            "<th> Tension 2 </th>" +
            "<th> Tension 3 </th>" +
            "</tr>" +
            "</thead>" +
            "<tbody> <tr> " + val + " </tr> </tbody>" +
            "</table>";
    return res;
}
//TABLE RPT
function tableLoadd(val) {
    var res = "<script src='../../models/Configs/app.configs.table.js'></script>\n\
            <table class='table table-sm text-center' id='tableGeneral'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Circuito</th>" +
            "<th>Canal</th>" +
            "<th>Potencia (kW)</th>" +
            "<th>Corriente (A)</th>" +
            "<th>Fp</th>" +
            "<th>Rele</th>" +
            "<th>Ultima Hora de Actuación</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" + val + "</tbody>" +
            "</table>";
    return res;
}

function posLoad(val) {
var resColor = "";
    if (val === "MANUAL") {
        resColor = "<span class='badge badge-primary'>" + val + "</span>";
    } else {
        resColor = "<span class='badge badge-secondary'>" + val + "</span>";
    }
    var res = "<p>Posición Actual : " + resColor + "</p>";
    return res;
}
//TRIFASICO
function tableGeneralTrifasico(val) {
    var response =
            "<script src='../../models/Configs/app.configs.table.js'></script>" +
            "<table  class='table table-sm text-center' id='tableGeneral2'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th> Circuito </th>" +
            "<th> Potencia (kW) </th>  " +
            "<th> Corriente (A)</th>" +
            "<th> FP </th>" +
            "<th> Estado del rele </th>" +
            "<th> Ultima Hora de Actuación </th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            val +
            "</tbody>" +
            "</table>";
    return response;
}
///TABLA DE TENSIONES TRIFASICO
function tableGeneralTensiones(val) {
    var resp = "<table class='table table-sm text-center'>" +
            "  <thead  class='thead-dark'>" +
            "<tr> " +
            "<th> Tension 1 </th> " +
            "<th> Tension 2 </th> " +
            "<th> Tension 3 </th> " +
            "</tr> " +
            "</thead>" +
            "<tbody>" + val + "</tbody>" +
            "</table>";
    return resp;
}
function tableTdTrifasico(val) {
    return "<td>" + val + "</td>";
}
function tableTrTrifasico(val) {
    return "<tr>" + val + "</tr>";
}
function tableTrifasico(val) {
    return "<table class='table'> " + val + "</table>";
}

/*DECIMALES*/
function decimal(val) {
    var response = "";

    if (val === "" || val === "null" || val == null || val === "0") {
        response = "0.00";
    } else {
        response = val.toFixed(2);
    }
    return response;
}
/*SELECTION CLIENTE*/
$("#listClient").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://' + readConfig() + '/consultas/device/repeat/' + id,
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
$("#listDisp").change(function (e) {
    var id = $('option:selected', this).attr('tc');
    $("#typeController").val(id);
});
/*VALUES CLIENTE*/
$.ajax({
    url: 'http://' + readConfig() + '/consultas/client',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    valueClient(data);
});
function valueClient(data) {
    $.each(data, function (key, val) {
        $("#listClient").select2({theme: 'bootstrap4'
        }).append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
}
/*VALUES DISPOSITIVO*/
function valueDispos(data) {
    var res = "";
    $.each(data, function (key, val) {
        res += "<option value='" + val.ip_real + "' tc='" + val.fk_type_controller + "'>" + val.name + "</option>";
    });
    if (res.length == 0) {
        toastr.error("No tiene dispositivos asociados")
    } else {
        var cons = "<option value=''>Seleccionar Dispositivo</option>" + res;
        $("#listDisp").html(cons);
    }
}
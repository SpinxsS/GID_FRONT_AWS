/*POTGES*/
$("#btnReportET").on('click', function () {
    var id = $("#listClient").val();
    var fhi = $("#startTime").val();
    var fhf = $("#endTime").val();
    if (empty(fhi, fhf, id)) {

    } else {
        $("#loadTableEnergyTotal").html("");
        $("#loadTableEnergyTotal").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
        /*POT_GES*/
        $.ajax({
            url: 'http://'+readConfig()+'/consultas/energiaGestionadaTT/' + id + '/' + convertFh(fhi) + '/' + convertFh(fhf),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            if (data.length == 0) {
                toastr.warning("No hay datos, consulte en otras fechas");
            } else {
                valueReport(data);
            }
        });
    }
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
        $("#listClient").select2({theme: 'bootstrap4'
        }).append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
}
/*VALUES REPORT*/
function valueReport(data) {
    var response = "";
    $.each(data, function (key, val) {
        response += tableReport(val.CODIGO_SIC, val.FECHA, val.TIPO_MEDIDOR, val.TIPO_ENERGIA, val.A00, val.A01, val.A02, val.A03, val.A04, val.A05, val.A06, val.A07, val.A08, val.A09, val.A10, val.A11, val.A12, val.A13, val.A14, val.A15, val.A16, val.A17, val.A18, val.A19, val.A20, val.A21, val.A22, val.A23);
    });
    $("#loadTableEnergyTotal").html(tableAll(response));
}
function tableAll(valTr){
    return "<script src='../../models/Configs/app.configs.table.js'></script>"+
            "<table class='table table-sm table-striped text-center  table-responsive' id='tableGeneral'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>CODIGO SIC</th>" +
            "<th>FECHA (AAAA/MM/DD)</th>" +
            "<th>TIPO MEDIDOR</th>" +
            "<th>TIPO ENERGIA</th>" +
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
            "</tr>" +
            "</thead>" +
            "<tbody >" +valTr+ "</tbody>" +
            "</table>";
}
function tableReport(cod, fh, tipme, tipen, v00, v01, v02, v03, v04, v05, v06, v07, v08, v09, v10, v11, v12, v13, v14, v15, v16, v17, v18, v19, v20, v21, v22, v23) {
 var val = "<tr>\n\
            <td id='cod'>" + isNull(cod) + "</td>\n\
            \n\<td id='fh'>" + isNull(fh) + "</td>\n\
            <td id='tipme'>" + isNull(tipme) + "</td>\n\
            <td id='tipen'>" + isNull(tipen) + "</td> \n\
            <td id='00'>" + isNull(v00) + "</td> \n\
            <td id='01'>" + isNull(v01) + "</td>\n\
            <td id='02'>" + isNull(v02) + "</td>\n\
            <td id='03'>" + isNull(v03) + "</td>\n\
            <td id='04'>" + isNull(v04) + "</td>\n\
            <td id='05'>" + isNull(v05) + "</td>\n\
            <td id='06'>" + isNull(v06) + "</td> \n\
            <td id='07'>" + isNull(v07) + "</td>\n\
            <td id='08'>" + isNull(v08) + "</td>\n\
            <td id='09'>" + isNull(v09) + "</td>\n\
            <td id='10'>" + isNull(v10) + "</td>\n\
            <td id='11'>" + isNull(v11) + "</td> \n\
            <td id='12'>" + isNull(v12) + "</td> \n\
            <td id='13'>" + isNull(v13) + "</td>\n\
            <td id='14'>" + isNull(v14) + "</td>\n\
            <td id='15'>" + isNull(v15) + "</td>\n\
            <td id='16'>" + isNull(v16) + "</td>\n\
            <td id='17'>" + isNull(v17) + "</td> \n\
            <td id='18'>" + isNull(v18) + "</td> \n\
            <td id='19'>" + isNull(v19) + "</td>\n\
            <td id='20'>" + isNull(v20) + "</td>\n\
            <td id='21'>" + isNull(v21) + "</td>\n\
            <td id='22'>" + isNull(v22) + "</td>\n\
            <td id='23'>" + isNull(v23) + "</td>\n\
             </tr>";
    return val;
}
/*CONVERT FECHA*/
function convertFh(val) {
    var sp = val.split("-");
    return sp[0] + sp[1] + sp[2];
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
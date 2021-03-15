$("#btnReportPG").on('click', function () {
    var id = $("#listClient").val();
    var fhi = $("#startTime").val();
    var fhf = $("#endTime").val();
    if (empty(fhi, fhf, id)) {

    } else {
        /*CLEAR TABLE*/
        $("#tablePotGest").html(""); $("#tablePotGest").html("");
        $("#tablePotGest").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
        /*POT_GES*/
        $.ajax({

            url: 'http://'+readConfig()+'/reportes/potGes/cliente/' + id + '/' + convertFh(fhi) + '/' + convertFh(fhf),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            var globalTr = "";
            $.each(data, function (key, val) {
                globalTr += tableTrCliente(changeDias(val.dia), val.FECHA, decimal(val.A00), decimal(val.A01), decimal(val.A02), decimal(val.A03), decimal(val.A04), decimal(val.A05), decimal(val.A06), decimal(val.A07), decimal(val.A08), decimal(val.A09), decimal(val.A10), decimal(val.A11), decimal(val.A12), decimal(val.A13), decimal(val.A14), decimal(val.A15), decimal(val.A16), decimal(val.A17), decimal(val.A18), decimal(val.A19), decimal(val.A20), decimal(val.A21), decimal(val.A22), decimal(val.A23));
            });
            $("#tablePotGest").html(tableGeneral(globalTr));          
        });

    }
});
function decimal(val){
    var response="";
    
    if(val === "" || val==="null" || val == null || val==="0"){
        response = "0.00";
    }
    else{
        response = val.toFixed(2);
    }
    return response;
}
function changeDias(val) {
    var nameDia = "";
    if (val === "1" || val == 1) {
        nameDia = "Domingo";
    }
    if (val === "2" || val == 2) {
        nameDia = "Lunes";
    }
    if (val === "3" || val == 3) {
        nameDia = "Martes";
    }
    if (val === "4" || val == 4) {
        nameDia = "Miercoles";
    }
    if (val === "5" || val == 5) {
        nameDia = "Jueves";
    }
    if (val === "6" || val == 6) {
        nameDia = "Viernes";
    }
    if (val === "7" || val == 7) {
        nameDia = "Sabado";
    }
    return nameDia;
}
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
/*FUNCTION NULL */
function Null(val) {
    var response = "";
    if (val === "null" || val === "" || val == null) {
        response = "0.0000";
    } else {
        response = val;
    }
    return response;
}
/*CREADOR TR*/
function tableTrCliente(dia, fecha, H00, H01, H02, H03, H04, H05, H06, H07, H08, H09, H10, H11, H12, H13, H14, H15, H16, H17, H18, H19, H20, H21, H22, H23) {
    var response = "<tr>" +
            "<td>" + Null(dia) + "</td>" +
            "<td>" + Null(fecha) + "</td>" +
            "<td>" + Null(H00) + "</td>" +
            "<td>" + Null(H01) + "</td>" +
            "<td>" + Null(H02) + "</td>" +
            "<td>" + Null(H03) + "</td>" +
            "<td>" + Null(H04) + "</td>" +
            "<td>" + Null(H05) + "</td>" +
            "<td>" + Null(H06) + "</td>" +
            "<td>" + Null(H07) + "</td>" +
            "<td>" + Null(H08) + "</td>" +
            "<td>" + Null(H09) + "</td>" +
            "<td>" + Null(H10) + "</td>" +
            "<td>" + Null(H11) + "</td>" +
            "<td>" + Null(H12) + "</td>" +
            "<td>" + Null(H13) + "</td>" +
            "<td>" + Null(H14) + "</td>" +
            "<td>" + Null(H15) + "</td>" +
            "<td>" + Null(H16) + "</td>" +
            "<td>" + Null(H17) + "</td>" +
            "<td>" + Null(H18) + "</td>" +
            "<td>" + Null(H19) + "</td>" +
            "<td>" + Null(H20) + "</td>" +
            "<td>" + Null(H21) + "</td>" +
            "<td>" + Null(H22) + "</td>" +
            "<td>" + Null(H23) + "</td>" +
            "</tr>";
    return response;
}
function tableGeneral(val) {
    var response = "\<script src='../../models/Configs/app.configs.table.js'></script>\n\
             <table class='table table-sm text-center' id='tableGeneral2'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Dia</th>" +
            "<th>Fecha</th>" +
            "<th>H00</th>" +
            "<th>H01</th>" +
            "<th>H02</th>" +
            "<th>H03</th>" +
            "<th>H04</th>" +
            "<th>H05</th>" +
            "<th>H06</th>" +
            "<th>H07</th>" +
            "<th>H08</th>" +
            "<th>H09</th>" +
            "<th>H10</th>" +
            "<th>H11</th>" +
            "<th>H12</th>" +
            "<th>H13</th>" +
            "<th>H14</th>" +
            "<th>H15</th>" +
            "<th>H16</th>" +
            "<th>H17</th>" +
            "<th>H18</th>" +
            "<th>H19</th>" +
            "<th>H20</th>" +
            "<th>H21</th>" +
            "<th>H22</th>" +
            "<th>H23</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" +
            val +
            "</tbody>" +
            "</table>";
    return response;
}

/*SELECTION CLIENTE*/
$("#listClient").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/device/unrepeat/' + id,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        if (data.length == 0) {
            toastr.warning("No tiene clientes asociado, revise la tabla de asociaciones");
        } else {
            
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
/*CONVERT FECHA*/
function convertFh(val) {
    var sp = val.split("-");
    return sp[0] + sp[1] + sp[2];
}

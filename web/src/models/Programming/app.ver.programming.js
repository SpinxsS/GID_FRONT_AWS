/*CLIENTE*/
$.ajax({
    url: 'http://' + readConfig() + '/consultas/client',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    valueClient(data);
});
/*VALUES CLIENTE*/
function valueClient(data) {
    $.each(data, function (key, val) {
        $("#listClient").select2({theme: 'bootstrap4'
        }).append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
}
/*DEVICE*/
$("#listClient").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://' + readConfig() + '/consultas/device/unrepeat/' + id,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        valueDevice(data);
    });
});
/*VALUES DEVICE*/
function valueDevice(data) {
    var res = "";
    $("#listDevice").html("");
    $.each(data, function (key, val) {
        res += "<option value='" + val.ID + "'>" + val.name + "</option>";
    });
    if (res.length == 0) {
        toastr.error("No tiene variables asociados")
    } else {
        var cons = "<option value=''>Seleccionar Dispositivo</option>" + res;
        $("#listDevice").html(cons);
    }
}
/*VARIABLES*/
$("#listDevice").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://' + readConfig() + '/consultas/prg/variable/' + id,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        valueVariable(data);
    });
});
/*VALUES VARIABLES*/
function valueVariable(data) {
    var res = "";
    $("#listVariable").html("");
    $.each(data, function (key, val) {
        res += "<option value='" + val.ID + "'>" + val.var_code + " - " + val.description + "</option>";
    });
    if (res.length == 0) {
        toastr.error("No tiene variables asociados");
    } else {
        var cons = "<option value=''>Seleccionar Variable</option>" + res;
        $("#listVariable").html(cons);
    }
}
/*VALIDADOR VACIOS*/
function empty(client, variable, xls) {
    var response = false;
    if (client.length == 0 || variable.length == 0 || xls.length == 0) {
        toastr.error("Campos vacios");
        response = true;
    }
    return response;
}
/*CONSULTA*/
$("#btnAddProgramming").on('click', function () {
    $("#verProgramacion").html("");

    if (empty($("#fhi").val(), $("#listClient").val(), $("#listDevice").val())) {

    } else {
        $("#verProgramacion").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
        $.ajax({
            url: 'http://' + readConfig() + '/consultas/programacion/ver/' + $("#listDevice").val() + '/' + convertFh($("#fhi").val()),
            type: 'GET',
            contentType: 'application/json',
            dataType: "json"
        }).fail(function (data) {
            toastr.error("Error");
            $("#verProgramacion").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
        }).done(function (data) {
            $("#verProgramacion").html("");
            if (data.length == 0 || data === "" || data == "") {
                view("");
                toastr.error("Error");
                $("#verProgramacion").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
            } else {
              
                view(data);
            }
        });
    }
});
/*VALUES CONSULTA*/
function view(data) {
    var resTd = "", resTdAll = "", resTh = "", resThHour = "";
    $("#verProgramacion").html("");
    $.each(data, function (key, val) {
        //resTd += td(val.programming.day, 1);
        resTd += td(val.programming.nameDevice, 1);
        resTd += td(val.programming.desc, 1);
        /*ESTADOS*/
        $.each(val.programming.status, function (keyStatus, valStatus) {
            $.each(valStatus.status, function (keyNext, valNext) {
                resTd += td(valNext, 2);
               
            });
        });
        resTdAll += tr(resTd);
        resTd = "";
    });
    $.each(data, function (key, val) {
        /*HORA*/
        $.each(val.programming.hour, function (keyHour, valHour) {
            resThHour = "";
            $.each(valHour.hours, function (keyNext, valNext) {
                resThHour += th(valNext);
            });
        });
    });
    //resTh += th("Dia");
    resTh += th("Carga");
    resTh += th("Descripción");
    $("#verProgramacion").html(table(tr(resTh + resThHour), resTdAll));
}
/*TR-TABLE*/
function tr(val) {
    return "<tr>" + val + "</tr>";
}
/*TH-TABLE*/
function th(val) {
    return "<th>" + val + "</th>";
}
/*TD-TABLE*/
function td(val, v) {
    var response = "";
    if (v == 1) {
        response = "<td>" + val + "</td>";
    } else {
        response = "<td class='" + printColor(val) + "'>" + val + "</td>";
    }
    return response;
}
/*TABLE*/
function table(th, td) {
    return "<script src='../../models/Configs/app.configs.table.js'></script>\n\
            <table class='table table-sm text-center' id='tableGeneral2'>" +
            "<thead class='thead-dark'>" + th + "</thead>" +
            "<tbody>" + td + "</tbody>" +
            "</table>";
}
/*PRINT COLOR*/
function printColor(status) {
    var response = "";
    if (status === "ON") {
        response = "bg-success-inp";
    } else if (status === "-") {
        response = "bg-warning-inp";
    } else if (status === "OFF") {
        response = "bg-danger-inp";
    }else if(status === "MAN"){
        response = "bg-info";
    }else {
        response = "bg-white-inp";
    }
    return response;
}
/*CONVERT FECHA*/
function convertFh(val) {
    var sp = val.split("-");
    return sp[0] + sp[1] + sp[2];
}
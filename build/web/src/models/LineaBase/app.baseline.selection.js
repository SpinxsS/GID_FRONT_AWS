/*CLIENTE*/
$.ajax({
    url: 'http://' + readConfig() + '/consultas/client',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    valueClientSL(data);
});
/*VALUES CLIENTE*/

function valueClientSL(data) {
    $.each(data, function (key, val) {
        $("#listClientSL").select2({theme: 'bootstrap4',
        dropdownParent: $('#loadDataBase')
    }).append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
}
/*DEVICE*/
$("#listClientSL").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://' + readConfig() + '/consultas/device/unrepeat/' + id,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        valueDeviceSL(data);
    });
});
/*VALUES DEVICE*/
function valueDeviceSL(data) {
    var res = "";
    $("#listDeviceSL").html("");
    $.each(data, function (key, val) {
        res += "<option value='" + val.ID + "'>" + val.name + "</option>";
    });
    if (res.length == 0) {
        toastr.error("No tiene variables asociados")
    } else {
        var cons = "<option value=''>Seleccionar Dispositivo</option>" + res;
        $("#listDeviceSL").html(cons);
    }
}
/*INSERCION*/
$("#btnAddLBcal").on('click', function () {
    if (empty($("#listClientSL").val(), $("#listDeviceSL").val(), $("#startTime").val(), $("#endTime").val())) {

    } else {
        var dataRequest = variables();
        /*ENVIO DE DATOS*/
        $("#loadingLBS").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
        $.ajax({
            url: 'http://' + readConfig() + '/consultas/baselineautomatic/add',
            type: 'POST',
            contentType: 'application/json',
            dataType: "json",
            data: dataRequest
        }).fail(function () {
            ("#loadingLBS").html("");
            toastr.error("Error");
            $("#loadingLBS").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
        }).done(function (data) {
            $("#loadingLBS").html("");
            /*CARGO APLICACION*/
            if (data.length == 0) {
                toastr.error("Error");
                $("#loadingLBS").html("<div class='alert alert-danger' role='alert'><button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
            } else {
                toastr.success("Creado correctamente");
                $("#loadingLBS").html("<div class='alert alert-success' role='alert'><button type='button' class='close' data-dismiss='alert'>x</button> Añadido correctamente</div>");
            }
        });
    }
});
/*VALORES INSERT VARIABLES*/
function variables() {
    var data = {
        id: 0,
        device: $("#listDeviceSL").val()
        , day: ''
        , daystotal: 0
        , starttime: convert($("#startTime").val())
        , endtime: convert($("#endTime").val())
    };
    return JSON.stringify(data);
}
/*CONVERT FH*/
function convert(fh) {
    var date = fh.split("-");
    return date[0] + date[1] + date[2];
}
/*VALIDADOR VACIOS*/
function empty(client, device, startTime, endTime) {
    var response = false;
    if (client.length == 0 || device.length == 0 || startTime == 0 || endTime == 0) {
        toastr.error("Campos vacios");
        response = true;
    }
    return response;
}

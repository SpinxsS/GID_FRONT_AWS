/*MUESTRO Y MODIFICO DATOS*/
$.ajax({
    url: 'http://'+readConfig()+'/client/view',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    /*LLENO LA TABLA*/
    var resDataLL = tableClient(data);
    $("#loadTableClient").html(tablex(resDataLL));
    /*CAMBIO DE ESTADO*/
    $("a[rel='status']").on('click', function () {
        var status = $(this).attr("sta");
        var idCliente = $(this).attr("val");
        var sendStatus = "1";
        if (status === "1") {
            sendStatus = "2";
        }
        if (confirm("¿Desea continuar con la operación de cambio de estado?")) {
            $.ajax({
                url: 'http://'+readConfig()+'/client/delete/' + idCliente + "/" + sendStatus,
                type: 'POST',
                dataType: "json"
            }).always(function (data) {
                if (data > 0) {
                    toastr.success("Realizado Correctamente");
                    $("#loading").load("../../views/Cliente/verCliente.jsp");
                } else {
                    toastr.error("No se pudo completar la operacion");
                }
            });
        }
    });
    /*EDITAR*/
    $("a[rel='editClient']").on('click', function () {
        var value = $(this).attr("val");
        /*CARGO DATOS EN EL FORM*/
        $.ajax({
            url: 'http://'+readConfig()+'/client/view/' + value,
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            formClient(data);
            /*OBTENGO Y ENVIO DATOS*/
            $("#btnEditClient").on('click', function () {
                if (empty($("#nameEdit").val(), $("#potEdit").val(), $("#id01Edit").val(), $("#id02Edit").val(), $("#descEdit").val())) {

                } else {
                    $.ajax({
                        url: 'http://'+readConfig()+'/client/edit/' + $("#idEdit").val(),
                        type: 'PUT',
                        contentType: 'application/json',
                        dataType: "json",
                        data: jsonClientUpdate()
                    }).always(function (data) {
                        /*CARGO APLICACION*/
                        if (data.length == 0) {
                            toastr.error("Error");
                        } else {
                            toastr.success("Editado correctamente");
                            $("#loading").load("../../views/Cliente/verCliente.jsp");

                        }
                    });
                }
            });
        });
    });
});
/*INSERTO DATOS*/
$("#btnAddClient").on('click', function () {
    if (empty($("#name").val(), $("#pot").val(), $("#id01").val(), $("#id02").val(), $("#desc").val())) {

    } else {

        $.ajax({
            url: 'http://'+readConfig()+'/client/validate/',
            type: 'POST',
            contentType: 'application/json',
            dataType: "json",
            data: jsonClientValidate()
        }).always(function (data) {
            if (data) {
                toastr.error("Cliente existente");
            } else {
                $.ajax({
                    url: 'http://'+readConfig()+'/client/add/',
                    type: 'POST',
                    contentType: 'application/json',
                    dataType: "json",
                    data: jsonClientInsert()
                }).always(function (data) {
                    /*CARGO APLICACION*/
                    if (data.length == 0) {
                        toastr.error("Error");
                    } else {
                        toastr.success("Creado correctamente");
                        $("#loading").load("../../views/Cliente/verCliente.jsp");
                    }
                });
            }
        });

    }
});
/*TABLAS y FORM*/
function tablex(data) {
    return "<script src='../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableGeneral'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th></th>" +
            "<th>Nombre</th>" +
            "<th>Identificador 1</th>" +
            "<th>Identificador 2</th>" +
            "<th></th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}
function tableClient(data) {
    var valStatus = "", valEdit = "", tbl = "";
    $.each(data, function (key, val) {
        if (val.status === "1") {
            valStatus = "<a rel='status' val='" + val.ID + "' sta='" + val.status + "'>\n\
                        <span class='badge badge-danger'>Inactivar</span></a>";
            valEdit = "<a href='#' rel='editClient' val='" + val.ID + "' class='badge badge-primary' \n\
                    data-toggle='modal' data-target='#editClientModal' data-whatever='@mdo'>Editar</a>";
        } else {
            valStatus = "<a rel='status' val='" + val.ID + "' sta='" + val.status + "'><span class='badge badge-success'>Activar</span></a>";
            valEdit = "<i class='far fa-sad-tear'></i>";
        }
        tbl += "<tr>" +
                "<td>" + valStatus + "</td>" +
                "<td>" + val.name_client + "</td> \n\
                   <td>" + val.id_01 + "</td> \n\
                   <td>" + val.id_02 + "</td> \n\
                   <td>" + valEdit + "</td>\n\
               </tr>";
    });
    return tbl;
}
function formClient(data) {
    $.each(data, function (key, val) {
        $("#idEdit").val(val.ID);
        $("#nameEdit").val(val.name_client);
        $("#potEdit").val(val.pot_client);
        $("#id01Edit").val(val.id_01);
        $("#id02Edit").val(val.id_02);
        $("#descEdit").val(val.desc_client);
    });
}
function jsonClientInsert() {
    var data = {
        pot_client: $("#pot").val(),
        desc_client: $("#desc").val(),
        name_client: $("#name").val(),
        id01: $("#id01").val(),
        id02: $("#id02").val()
    };
    return JSON.stringify(data);
}
function jsonClientValidate() {
    var data = {
        name_client: $("#name").val(),
        id01: $("#id01").val(),
        id02: $("#id02").val()
    };
    return JSON.stringify(data);
}
function jsonClientUpdate() {
    var data = {
        id: parseInt($("#idEdit").val()),
        pot_client: $("#potEdit").val(),
        desc_client: $("#descEdit").val(),
        name_client: $("#nameEdit").val(),
        id01: $("#id01Edit").val(),
        id02: $("#id02Edit").val()
    };
    return JSON.stringify(data);
}
/*VALIDACIONES*/
function empty(name, pot, id01, id02, desc) {
    var response = false;
    if (name.length == 0 || pot.length == 0 || id01.length == 0 ||
            id02.length == 0 || desc.length == 0) {
        toastr.error("Campos vacios");
        response = true;
    }
    return response;
}
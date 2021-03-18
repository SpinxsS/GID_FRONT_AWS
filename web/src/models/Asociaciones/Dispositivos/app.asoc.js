$(function () {
    /*CLIENTE*/
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/client',
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        valueClient(data, 'listClient');
    });
    /*DEVICE*/
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/device/asoc',
        type: 'GET',
        contentType: 'application/json',
        dataType: "json"
    }).always(function (data) {
        //SELECT2 SELECT DEVICES
      valueDevice(data, 'listDisp');
    });
    /*TYPE*/
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/type',
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        valueType(data, 'listType');
    });
    /*TYPE TYPE*/
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/type',
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        valueType(data, 'listTypeEdit');
    });

    /*CARGAR DATOS*/
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/view/devices',
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        var res = tableAsoc(data);
        $("#loadTableAsoc").html(tablex(res));
        /*DELETE DATA*/
        $("a[rel='delete']").on('click', function () {
            var val = $(this).attr("ids");
            if (confirm("¿Desea continuar con la operación?")) {
                $.ajax({
                    url: 'http://'+readConfig()+'/consultas/asoc/delete/' + val,
                    type: 'POST',
                    dataType: "json"
                }).always(function (data) {
                    if (data > 0) {
                        toastr.success("Eliminado Correctamente");
                        $("#loading").load("../../views/Asociaciones/Dispositivos/asocDisLb.jsp");
                    } else {
                        toastr.error("Existe una linea base o programación asociada, no es posible eliminar");
                    }
                });
            }
        });
        /*MODIFY DATA*/
        $("a[rel='editAsoc']").on('click', function () {
            var val = $(this).attr("val");
            $("#clientEdit").val(val);
            $.ajax({
                url: 'http://'+readConfig()+'/consultas/view/' + val,
                type: 'GET',
                dataType: "json"
            }).always(function (data) {
                editAsoc(data);
                /*OBTENGO Y ENVIO DATOS*/
                $("#btnEditAsoc").on('click', function () {
                    if (empty($("#clientEdit").val(), $("#listDispEdit").val(), $("#listTypeEdit").val(), $("#editIp").val())) {

                    } else {
                        $.ajax({
                            url: 'http://'+readConfig()+'/consultas/edit/' + $("#clientEdit").val(),
                            type: 'PUT',
                            contentType: 'application/json',
                            dataType: "json",
                            data: jsonAosocUpdate()
                        }).always(function (data) {
                            if (data) {
                                 toastr.success("Editado correctamente");
                                /*CARGO APLICACION*/
                                $("#loading").load("../../views/Asociaciones/Dispositivos/asocDisLb.jsp");
                            } else {
                                toastr.error("Error");
                            }
                        });
                    }

                });

            });

        });
    });
    /*INSER DATA*/
    $("#btnAddBaseline").on('click', function () {
        if (empty($("#listClient").val(), $("#listDisp").val(), $("#listType").val(), $("#addIp").val())) {

        } else {
            $.ajax({
                url: 'http://'+readConfig()+'/consultas/asoc/validation/' + $("#addIp").val(),
                type: 'GET',
                contentType: 'application/json',
                dataType: "json"
            }).always(function (data) {

                if (data) {
                    toastr.error("Dirección IP ya existe");
                } else {
                    $.ajax({
                        url: 'http://'+readConfig()+'/consultas/add',
                        type: 'POST',
                        contentType: 'application/json',
                        dataType: "json",
                        data: jsonAosocInsert()
                    }).always(function (data) {
                        if (data.length == 0) {
                            toastr.error("Error");
                        } else {
                            toastr.success("Creado correctamente");
                            /*CARGO APLICACION*/
                            $("#loading").load("../../views/Asociaciones/Dispositivos/asocDisLb.jsp");
                        }
                    });
                }

            });
        }
    });
});
/*VALUES*/
function valueDevice(data, id) {

    if(data.length== 0){
       toastr.error("No hay equipos por asociar"); 
    }else{
        toastr.warning("Nuevos Equipos, para asociar");
    $.each(data, function (key, val) {
        $("#" + id).append("<option value='" + val.ID + "'>" + val.name + "</option>");
    });
}
}
function valueClient(data, id) {
    $.each(data, function (key, val) {
        $("#" + id).select2({theme: 'bootstrap4',
        dropdownParent: $('#exampleModal')
    }).append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
  
}
function valueType(data, id) {
    $.each(data, function (key, val) {
        $("#" + id).append("<option value='" + val.IDTP + "'>" + val.name + "</option>");
    });
}
/*INSERTS*/
function jsonAosocInsert() {
    var data = {
        id: 0,
        fk_type_controller: $("#listType").val(),
        fk_device: $("#listDisp").val(),
        fk_client: $("#listClient").val(),
        ip_real: $("#addIp").val()
        
    };
    return JSON.stringify(data);
}
/*UPDATE*/
function jsonAosocUpdate() {
    var data = {
        id: 0,
        fk_type_controller: $("#listTypeEdit").val(),
        fk_device: $("#listDispEdit").val(),
        fk_client: $("#clientEdit").val(),
        ip_real: $("#editIp").val()
       
    };
    return JSON.stringify(data);
}
/*TABLE*/
function tablex(tbody) {
    return "<script src='../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableGeneral'>" +
            " <thead class='thead-dark'>" +
            "<tr>" +
            "<th>Cliente</th>" +
            "<th>IP</th>" +
            "<th>Dispositivo</th>" +
            "<th>Tipo Controlador</th>" +
            "<th>Salidas Asociadas</th>" +
            "<th></th>" +
            "<th></th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" + tbody + "</tbody>" +
            "</table>";
}
function tableAsoc(data) {
    var tbl = "";
    $.each(data, function (key, val) {
        var res = "";
        if (val.enabled == 1) {
            res = "<td><a href='#' rel='editAsoc' val='" + val.ID + "' class='badge badge-primary'\n\
                    data-toggle='modal' data-target='#editModal' data-whatever='@mdo'>Editar</td>\n\
                   <td><a rel='delete' ids='" + val.ID + "'>\n\
                        <span class='badge badge-danger'>Eliminar</span></a></td>";
        } else {
            res = "<td><i class='far fa-sad-tear'></i></td>\n\
                  <td><i class='far fa-sad-tear'></i></td>";
        }
        tbl += "<tr>\n\
                   <td>" + val.client + "</td> \n\
                   <td>" + val.ip_real + "</td> \n\
                   <td>" + val.device + "</td> \n\
                   <td>" + val.controller + "</td>" +
                   "<td>" + paintSA(val.NA) + "</td>" +
                res
                + "</tr>";
    });
    return tbl;
}
function paintSA(val){
    var response = "";
    if(val==="0" || val==0){
         response = "<span class='badge badge-warning'>Ninguna</span>";
    }else{
        response = "<span class='badge badge-success'>Operativo</span>";
    }
    return response;
}
/*EDITAR TABLE*/
function editAsoc(data) {
    $.each(data, function (key, val) {
        $("#ddvc").html("");
        $("#cccl").html("");
        $("#ttcc").html("");
        $("#ddip").html("");
        $("#ddvc").html("<input type='hidden' id='listDispEdit' value='"+val.fk_device+"'> <span class='badge badge-primary'>" + val.device + "</span>");
        $("#cccl").html("<span class='badge badge-primary'>" + val.client + "</span>");
        $("#ttcc").html("<span class='badge badge-primary'>" + val.controller + "</span>");
        $("#ddip").html("<span class='badge badge-primary'>" + val.ip_real + "</span>");
    });
}
function empty(cli, disp, type, dip) {
    var res = false;
    if (cli.length == 0 || disp.length == 0 || type.length == 0 || dip.length == 0) {
        toastr.error("Campos Vacios");
        res = true;
    }
    return res;
}
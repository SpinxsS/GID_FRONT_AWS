/*CLIENTE*/
$.ajax({
    url: 'http://'+readConfig()+'/consultas/client',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    valueClient(data);
    
});
/*VALUES CLIENTE*/
function valueClient(data) {
    $.each(data, function (key, val) {
        $("#listClient").select2({theme: 'bootstrap4',
        dropdownParent: $('#exampleModal')
    }).append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
}
/*DEVICE*/
$("#listClient").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/device/' + id,
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
        url: 'http://'+readConfig()+'/consultas/prg/variablep/' + id,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        valueVariable(data);
    });
});
/*VALUES VARIABLES*/
function valueVariable(data) {
    var res = "";
    $("#listProgExe").html("");
    $.each(data, function (key, val) {
        res += "<option value='" + val.ID + "'>" + val.var_code + " - " + val.description + "</option>";
    });
    if (res.length == 0) {
        toastr.error("No tiene variables Programacion asociados");
    } else {
        var cons = "<option value=''>Seleccionar Variable</option>" + res;
        $("#listProgExe").html(cons);
    }
}
/*CLIENTE*/
$.ajax({
    url: 'http://'+readConfig()+'/consultas/salidas',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    valueSalidas(data);
});
/*VALUES CLIENTE*/
function valueSalidas(data) {
    $.each(data, function (key, val) {
        $("#listOutPut").append("<option value='" + val.id + "'>" + val.name + "</option>");
    });
}
$("#listDevice").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/prg/variablepg/' + id,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        valueVariablepg(data);
    });
});
function valueVariablepg(data) {
    var res = "";
    $("#listPotG").html("");
    $.each(data, function (key, val) {
        res += "<option value='" + val.ID + "'>" + val.var_code + " - " + val.description + "</option>";
    });
    if (res.length == 0) {
        toastr.error("No tiene variables de Potencia asociados");
    } else {
        var cons = "<option value=''>Seleccionar Variable</option>" + res;
        $("#listPotG").html(cons);
    }
}
/*INSERT*/
$("#btnAddSs").on('click', function () {
    var dv = $("#listDevice").val();
    var va = $("#listProgExe").val();
    var vap = $("#listPotG").val();
    var ou = $("#listOutPut").val();
    var ds = $("#desc").val();
    if (dv.length == 0 || va.length == 0 || ou.length == 0 || ds.length == 0 || vap.length ==0) {
        toastr.error("Campos vacios");
    } else {
        $.ajax({
            url: 'http://'+readConfig()+'/consultas/asoc/salidas',
            type: 'POST',
            contentType: 'application/json',
            dataType: "json",
            data: variables()
        }).always(function (data) {
            if (data === "1" || data > 1) {
                toastr.error("No se pudo completar la operacion");
            } else {
                toastr.success("Se añadio correctamente");
                $("#loading").load("../../views/Asociaciones/Salidas/asocOutdvcl.jsp");
            }
        });
    }
});
/*TRAMA*/
function variables() {
    var data = {
        id: 0,
        fk_output: $("#listOutPut").val(),
        fk_dv_cl: $("#listDevice").val(),
        desc: $("#desc").val(),
        fk_prog_exe: $("#listProgExe").val(),
        fk_Pgestionada:$("#listPotG").val(),
        power: $("#pw").val()
    };
    return JSON.stringify(data);
}

/*MUESTRO DATOS*/
$.ajax({
    url: 'http://'+readConfig()+'/consultas/view/salidas',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    /*LLENO LA TABLA*/
    $("#tableGeneralAsoc").html(table(tableOutput(data)));
    /*FUNCION DE ELIMINAT*/
    $("a[rel='elm']").on('click', function () {
        var id = $(this).attr("val");
        DeleteSalida(id);
    });
    /* MODIFY POTENCIA AND DESCRIPTION */
    $("a[rel='edit']").on('click', function () {
        var id = $(this).attr("val");
        $("#clientEdit").val(id);
        $.ajax({
            url: 'http://' + readConfig() + '/consultas/view/salidas/' + id,
            type: 'GET',
            dataType: 'json'
        }).always(function (data) {
            editAsocOut(data);
            $("#btnEditAsocOut").on('click', function () {
                if (empty($("#clientEdit").val, $("#Editpw").val())) {
               
                } else {
                    $.ajax({
                        url: 'http://' + readConfig() + '/consultas/edit/salidas/' + $("#clientEdit").val(),
                        type: 'PUT',
                        contentType: 'application/json',
                        dataType: 'json',
                        data: jsonUpdate()
                    }).always(function (data) {
                        if (data) {
                            toastr.success("Editado Correctamente")
                            $("#loading").load("../../views/Asociaciones/Salidas/asocOutdvcl.jsp");
                        } else {
                            toastr.error("Error");
                        }
                    });
                }
            });
        });
    });

});

/*TABLAS y FORM*/
function table(data) {
    var response = "<script src='../../models/Configs/app.configs.table.js'></script>\n\
                <table class='table table-sm table-striped text-center' id='tableGeneral'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Dispositivo</th>" +
            "<th>Programación</th>" +
            "<th>Salida</th>" +
            "<th>Potencía G</th>"+
            "<th>Potencía kW </th>"+
            "<th>Descripción</th>" +
            "<th></th>" +
            "<th></th>"+
            "</tr>" +
            "</thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
    return response;
}
function tableOutput(data) {
    var tbl = "";
    $.each(data, function (key, val) {
        tbl += "<tr>" +
                "<td>" + val.device + "</td> \n\
                   <td>" + val.var_code + " - " + val.description + "</td> \n\
                   <td>" + val.name + "</td> \n\
                   <td>"+ val.var_code1 +"</td> \n\
                   <td>"+ nullPower(val.power) +"</td> \n\
                   <td>" + val.descp + "</td>\n\
                   <td><a rel='elm' val='" + val.id + "' >\n\
                   <span class='badge badge-danger'>Eliminar</span></a></td>\n\
                    <td> <a href='#' rel='edit' val='"+ val.id +"' class='badge badge-primary' data-toggle='modal' data-target='#ModalUpdAsocOut'>Editar</a></td>\n\
               </tr>";
    });
    //nullPower(val.power)
    return tbl;
}
/* Validacion de NULL Potencia */
function nullPower(data){
    var res= "";
    if (data === "" || data === null){
        res = "0";
    }else {
        res = data;
    }
    return res;
}
/* */
function jsonUpdate(){
   var data ={
       id:0,
       power: $("#Editpw").val()
   }; 
    return JSON.stringify(data);
}
/* EDIT TABLE */
function editAsocOut(data) {
    $.each(data, function(key, val){
        console.log(data);
        $("#iddc").html("");
        $("#idcanal").html("");
        $("#idout").html("");
        $("#idpw").html("");
        $("#iddesc").html("");
        $("#iddc").html("<span class='badge badge-primary'>" + val.device + "</span>");
        $("#idcanal").html("<span class='badge badge-primary'>" + val.var_code + "</span>");
        $("#idout").html("<span class= 'badge badge-primary'>" + val.name + "</span>");
        $("#idpw").html("<span class= 'badge badge-primary'>" + val.power +"Kw</span>");
        $("#iddesc").html("<span class= 'badge badge-primary'>" + val.descp + "</span>");
       
    });
}
/*ELIMINAR SALIDAR*/
function DeleteSalida(data) {
    if(confirm("¿Desea eliminarlo?")){
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/view/salidas/delete/' + data,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        if (data === "1" || data > 1) {
            toastr.error("No se pudo completar la operacion");
        } else {
            toastr.success("Se elimino correctamente");
            $("#loading").load("../../views/Asociaciones/Salidas/asocOutdvcl.jsp");
        }
    });
    }
}
function empty(fi, dd){
    var res = false;
    if (fi.length == 0 && dd.length == 0){
        toastr.error("Campos Vacios");
        res = true;
    }
    return res;
}
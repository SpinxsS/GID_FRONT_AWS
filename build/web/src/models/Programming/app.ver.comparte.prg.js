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

/* CONSULTA*/
$("#btnCompProgramming").on('click', function (){
    $("#verComparacion").html("");
        if (empty($("#fhi").val(), $("#listClient").val(), $("#listDevice").val())) {
            
        }else{
            $("#verComparacion").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
            $.ajax({
                url: 'http://' + readConfig() + '/consultas/comparate/Almcenada/' + $("#listDevice").val() + '/' + convertFh($("#fhi").val()),
                type:'GET',
                contentType: 'application/json',
                dataType: "json"
            }).fail(function (data){
                toastr.error("Error");
              $("#verComparacion").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>"); 
            }).done(function (data){
                $("#verComparacion").html("");
                if (data.length == 0 || data === "" || data == "") {
                   view("");
                   toastr.error("Error");
                   $("#verComparacion").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
                } else {
                  
                    view(data);
                }
            });
     }
});
/*VALIDADOR VACIOS*/
function empty(client, variable, xls) {
    var response = false;
    if (client.length == 0 || variable.length == 0 || xls.length == 0) {
        toastr.error("Campos vacios");
        response = true;
    }
    return response;
}
}
function view(data){
   var resTd = "", resTdAll = "", resTh = "", resThHour="";
   $("#verComparacion").html("");
   $.each(data, function(key, val){
        resTd += td(val.nameDevice, 1);
        resTd += td(val.descripcion, 1);
        resTd += td(val.nameDia, 1);
        /* ESTADOS*/
        $.each(val.status, function(keyStatus, valStatus){
            //$.each(valStatus, function(keynext, valnext){
             resTd +=td(valStatus, 2);
            //});
        });
        resTdAll += tr(resTd);
        resTd = "";
   });
   $.each(data, function (key, val){
       /* HORA */
      resThHour = "";
      $.each(val.Hour, function (keyHour, valHour){
           resThHour += th(valHour);
          
      }); 
   });
   resTh += th("Carga");
   resTh += th("Descripción");
   resTh += th("Dia");
   $("#verComparacion").html(table(tr(resTh + resThHour),resTdAll));
}
/* TR-TABLE */
function tr(val){
    return "<tr>" + val + "</tr>";
}
/* TH-TABLE */
function th(val){
    return "<th>" + val + "</th>";
}
/*TD-TABLE*/
function td(val, v) {
    var response = "";
    if (v == 1) {
        response = "<td>" + val + "</td>";
    } else {
        response = "<td class='" + printColor(valStatus(val)) + "'>" + val + "</td>";
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
function valStatus(status){
    var response = "";
    if (status === "-") {
        response = "POWER/OFF";
    }else{
        response = status;
    }
    return response;
}
/*PRINT COLOR*/
function printColor(status) {
    var response = "";
    if (status === "ON") {
        response = "bg-success-inp";
    } else if (status === "POWER/OFF") {
        response = "bg-warning-inp text-dark ";
    } else if (status === "OFF") {
        response = "bg-danger-inp";
    }else if(status === "MAN"){
        response = "bg-info text-white";
    }else {
        response = "bg-white-inp";
    }
    //bg-white-inp
    return response;
}

/*CONVERT FECHA*/
function convertFh(val) {
    var sp = val.split("-");
    return sp[0] + sp[1] + sp[2];
}
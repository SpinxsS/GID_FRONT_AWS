$("#loadingEvents").load("../../views/ModuloRD/crearSignalSimple.jsp");
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
        $("#listClient").append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
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
function empty(cli, dis,){
    var response = false;
      if (cli.length == 0 || dis.length == 0) {
        toastr.error("Campos Vacios");
        response = true;
    }
}
/* CONSULTA */
$("#btnEventsRD").on('click', function(){
    $("#verEventsRD").html("");
    if (empty($("#listClient").val(), $("#listDevice").val())) {
        
    }else {
        $("#verEventsRD").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
        $.ajax({
            url: 'http://' + readConfig()+ '/reportes/valInsta/Events/view/'+ $("#listDevice").val(), 
            type:'GET',
            contentType:'application/json',
            dataType:'json'
        }).fail(function (data){
           toastr.error("Error"); 
           $("#verEventsRD").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");

        }).done(function (data){
            $("#verEventsRD").html("");
            if (data.length == 0 || data === "" || data == "") {
                view(""); 
                toastr.error("Error");  
                    $("#verEventsRD").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
            }else{
               view(data);
            }
        });
    }

});
function view(data){
    var response = "";
    $.each(data, function(key , val){
       response += tdtable(val.cliente,val.device, val.name,val.variable,val.numSalida, val.potencia); 
    });
    $("#verEventsRD").html(tableAll(response));
}
function tdtable(cli,dev, name, variable, out,po){
    var val = "<tr> \n\
                    <td>"+ cli +"</td>\n\
                    <td>" + dev + "</td>\n\
                    <td>" + name + "</td>\n\
                    <td>" + variable +"</td>\n\
                    <td>"+ ispower(po)+"</td>\n\
                    <td>" + isnull(out)+ "</td>\n\
                </tr>";
    return val;
}
function tableAll(tdAll){
    return "<script src='../../models/Configs/app.configs.table.js'></script>\n\
            <table class='table table-sm table-striped text-center  ' id='tableGeneral2'>" +
            "<thead class='thead-dark'>" +
            "<tr>"+
            "<th>CLIENTE </th>"+
            "<th>DISPOSITIVO</th>"+
            "<th>SEÑAL</th>"+
            "<th>SALIDAD DIGITAL</th>"+
            "<th>POTENCÍA(kW)</th>"+
            "<th>DESCRIPCION</th>"+
            "</tr>"+
            "</thead>"+
            "<tbody>" + tdAll+ "</tbody>"+
            "</table>";
}
/*
 
 * */ 
function isnull(val){
    var response = "";
    if (val === "null" || val === "" || val == null ) {
        response = "-";
    }else {
        response = val;
    }  
    return response;
}
function ispower(val){
    var response = "";
    if (val === "null" || val === "" || val == null) {
        response = "0";
    }else{
        response = val;
    }
    return response;
}
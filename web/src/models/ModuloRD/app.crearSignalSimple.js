/*CLIENTE*/
$.ajax({
    url: 'http://' + readConfig() + '/consultas/client',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    valueClientEv(data);
});
/*VALUES CLIENTE*/
function valueClientEv(data) {
    $.each(data, function (key, val) {
        $("#listClientEV").append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
}
/*DEVICE */
$("#listClientEV").change(function(e){
  var id = $(this).val();
  $.ajax({
      url:'http://' + readConfig() + '/consultas/device/repeat/' + id,
      type:'GET',
      dataType: "json"
  }).always(function(data){
      valuedeviceEv(data);
  });
});
function valuedeviceEv(data){
    var  res ="";
    $("#listDeviceEV").html("");
    $.each(data, function(key, val){
       res += "<option value='"+val.ip_real+"' tc='"+val.ID+"'>" + val.name + "</option>"; 
     
    });
    
    if (res.length == 0) {
        toastr.error("No tiene variable Asociadas");
    }else{
        var cons = "<option value=''>Seleccionar Dispositivo</option>" + res;
        $("#listDeviceEV").html(cons);
    }
}
/* INSERCION */
$("#btnAddEventsRD").on('click', function(){
    var ip = $("#listDeviceEV").val();
    var id= $("#idDevice").val();
    if (empty($("#listDeviceEV").val(), $("#listClientEV"))) {
        
    } else{
        $("#loadingEvent").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
        $.ajax({
            url: 'http://'+ readConfig()+ '/reportes/valInsta/Events/'+ ip + '/'+id,
            type:'GET',
            datType:'json'
        }).fail(function (){
            $("#loadingEvent").html("");
            toastr.error("Error");
            $("#loadingEvent").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
        }).done(function (data){
            if (data.length == 0) {
                toastr.error("Error");
                $("#loadingEvent").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
     
            }else{
             toastr.success("Eventos Almacenados Correctamente");
             $("#loadingEvent").html("<div class='alert alert-success' role='alert'><button type='button' class='close' data-dismiss='alert'>x</button> Añadido correctamente</div>");
            }
        });
    }
});
function empty(dev, cli){
    var response = false;
    if (dev.length == 0 || cli.length == 0) {
        response = true;
        toastr.error("Campos Vacios");
        
    }
    return response;
}
$("#listDeviceEV").change(function (e) {
    var id = $('option:selected', this).attr('tc');
    $("#idDevice").val(id);
});
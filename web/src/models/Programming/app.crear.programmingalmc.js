/*CLIENTE*/
$.ajax({
    url: 'http://' + readConfig() + '/consultas/client',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    valueClientPG(data);
});
/*VALUES CLIENTE*/
function valueClientPG(data) {
    $.each(data, function (key, val) {
        $("#listClientPG").select2({theme: 'bootstrap4',
        dropdownParent: $('#loadDataBase')
    }).append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
}
/*DEVICE */
$("#listClientPG").change(function(e){
  var id = $(this).val();
  $.ajax({
      url:'http://' + readConfig() + '/consultas/device/repeat/' + id,
      type:'GET',
      dataType: "json"
  }).always(function(data){
      valuedevicePG(data);
  });
});
function valuedevicePG(data){
    var  res ="";
    $("#listDevicePG").html("");
    $.each(data, function(key, val){
       res += "<option value='"+val.ip_real+"' tc='"+val.ID+"'>" + val.name + "</option>"; 
     
    });
    
    if (res.length == 0) {
        toastr.error("No tiene variable Asociadas");
    }else{
        var cons = "<option value=''>Seleccionar Dispositivo</option>" + res;
        $("#listDevicePG").html(cons);
    }
}
/* INSERCION */
$("#btnAddPGAlmc").on('click', function(){
    var ip = $("#listDevicePG").val();
    var id =$("#idDevice").val();
    if (empty($("#listClientPG"), $("#listDevicePG"))) {
    }else{
     $("#loadingPrg").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
     $.ajax({
         url: 'http://' +  readConfig()+ '/reportes/valInsta/Discriminador/' + ip + '/' + id,
         type:'GET',
         dataType:'json'
     }).fail(function (){
         $("#loadingPrg").html("");
        toastr.error("Error");
        $("#loadingPrg").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
     }).done(function (data){
            if (data.length == 0) {
        toastr.error("Error");
        $("#loadingPrg").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
            }else{
            toastr.success("Programación Almacenada Correctamente");
            $("#loadingPrg").html("<div class='alert alert-success' role='alert'><button type='button' class='close' data-dismiss='alert'>x</button> Añadido correctamente</div>");
              }
          });
    }   
});
function empty(cliente, dispositivo){
    var response = false;
    if (cliente.length == 0  || dispositivo.length == 0) {
        toastr.error("campos vacios");
        response = true;
    }
    return response;
}
$("#listDevicePG").change(function (e) {
    var id = $('option:selected', this).attr('tc');
    $("#idDevice").val(id);
});
//INSERT DATO
$("#addMenusData").on('click', function (){
    
});
//LOAD DATA
$.ajax({
    url:'http://' + readConfig() +'/consultas/menuPrincipal',
    type:'GET',
    dataType: 'JSON'
}).always(function(data){
    valuesMenus(data);
    /* MENU PRINCIPAL*/
    $("#addMenusData").prop("disabled", true);
    $("#menuPrincipal").change(function () {
        $("#menuPrincipal").each(function () {
            var id = $(this).val();
            var idRoles = $("#idRoles").val();
            $.ajax({
                url: '../RolPagina/Asignacion/menuSecundario.jsp',
                type: 'POST',
                data: {id: id, idRoles: idRoles},
            }).always(function (data) {
                $("#menuSecundario").html(data);
                $("#menuTercero").html("");
            });
        });
    });
    
    //INSER DATA
    $("#addMenusData").on('click', function () {
            var idRol= $("#idRoles").val();
            var mPrincipal = $("#menuPrincipal").val();
            var mSecundario = $("#mSecundario").val();
            var mTercero = $('input:checkbox[name="mTercero[]"]:checked').map(
                    function () {
                        return this.value;
                    }).get();
                     $("#responseData").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='120' height='80'></h3>");
            if(mPrincipal.length==0 || mSecundario.length==0){
                toastr.error("Campos vacios, valide nuevamente");
            }else{
                
            }
        });
});

//LOAD DATA
$("#menuPrincipal").change(function (e){
    var idMenu = $(this).val();
    var idRoles = $("#idRoles").val();
    $.ajax({
    url:'http://' + readConfig() +'/consultas/menuSecundario/' + idRoles + '/' + idMenu,
    type:'GET',
    dataType: 'JSON'
}).always(function(data){
            console.log(data);
        if (data == 0 && data === null) {
            toastr.warning("Este menu no tiene sub Menus");
        }else{
               valuesMenusecu(data);
        }
});    
});
//FUNCIONES 
function valuesMenusecu(data){ 
        $.each(data, function (key, val){
        var sep = val.split("___");
       $("#mSecundario").append("<option value='"+sep[0]+"'>" +sep[1]+ "</option>"); 
    });
   
}
//FUNCIONES
function valuesMenus(data){ 
    $.each(data, function (key, val){
       $("#menuPrincipal").append("<option value='"+val.ID+"'>" +val.name+ "</option>"); 
    });
   
}

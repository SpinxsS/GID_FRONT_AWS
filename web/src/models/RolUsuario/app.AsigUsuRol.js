//LOAD USER
$.ajax({
    url:'http://' + readConfig() + '/client/users/views',
    type: "GET",
    dataType: "json"
}).always(function (data){
    $("#AddRolUsu").append(formAsigUr(data));
});
//SELECT ROLES
$.ajax({
    url:'http://' + readConfig() + '/client/roles/views',
    type: "GET",
    dataType:"json"
}).always(function (data){
$("#AddRolUsu").append(formAsig(data));
    //valueRoles(data, "AddRolUsu");
});

function valueRoles(data){
     var res="";
    $.each(data, function (key, val){
       res +="<option value='"+ val.ID+"'>" + val.description + "</option>";
    });
    if (res.length == 0) {
        toastr.error("No Hay Roles");
    }else{
        var cons = "<option value=''>Seleccionar Rol</option>"+ res;
    }
    return cons;
}

function valuesUser(data){
    var res="";
    $.each(data, function (key, val){
        res += tbody(val.ID, val.name, val.login);
    });
    if (res.length == 0) {
        toastr.error("No hay Usuarios Disponibles");
    }else{
        var cons= res;
    }
    return cons;
}

function tbody(id, na, lo){
    var val = "<tr>"+
            "<td><input type='checkbox' name='id_data[]' value='"+id+"'></td>\n\
            <td>"+ na + "</td>\n\
            <td>"+ lo + "</td>\n\
            </tr>";
    return val;
}
function formAsig(data){
    return  "<div class='col-lg-12'>"+
             "<div class='form-group'>"+
             "<h5>Roles</h5> <hr>"+
             "<select id=idRol class='form-control form-control-sm'>"+
             valueRoles(data)+
             "</select>"+
             "</div>"+
             "</div>";
 }
 
 function formAsigUr(data){
     return  "<div class='col-lg-12'>"+
             "<div class='form-group'>"+
             "<h5>Usuarios</h5> <hr>"+
             "</div>" +
             "<script src= '../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableGeneral'>"+
            "<thead class='thead-dark'>"+
            "<tr>"+
            "<th></th>"+
             "<th>Nombre</th>"+
             "<th>Usuario</th>"+
             "</tr>"+
             "</thead>"+
             "<tbody>"+
             valuesUser(data);
             "</tbody>"+
             "</table>"+
             "</div>";

 }
 //INSERT ROL-USUARIO
 $(".btn-add").on('click', function (){
    var idUser = $("#emptyUserDIKEY").val().trim(); 
    var idUsu = $('input:checkbox[name="id_data[]"]:checked').map(function () {
          return this.value;}).get();
     var idRol =  $("#idRol").val().trim();
      if (idUsu.length == 0) {
      toastr.error("Seleccione al menos un usuario");
    }else if(idRol.length == 0){
      toastr.error("Seleccione al menos un rol");
    }else{
         if (confirm("Recuerde que al ejecutar lo que tenga un perfil diferente, sera actualizado, ¿Desea Continuar?")) {
             $.ajax({
                 url: 'http://' + readConfig()+ '/client/add/roluser',
                 type: 'POST',
                 dataType: "json",
                 contentType: 'application/json',
                 data:JSON.stringify({id:idRol, id_Usu:idUsu, usu_create:idUser, usu_update:idUser})
             }).always(function(data){
                 if(data > 0){
                toastr.success("Ejecutado Correctamente.");
                $("#loading").load("../../views/RolUsuario/AsigUsurRol.jsp");
            }else{
                toastr.error("Error, Intente nuevamente");
            }
             });
              }
    }
        
 });
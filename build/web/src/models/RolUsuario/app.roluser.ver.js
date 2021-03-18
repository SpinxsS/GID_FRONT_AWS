//LOAD ROLES
$.ajax({
    url: 'http://' + readConfig() + '/client/roles/views',
    type: 'GET',
    dataType:'Json'
}).always(function (data){
    $("#loadingRolUser").html(tablePrincipal(tbody(data)));
    //LOAD USER-ROL
    $("a[rel='edit']").on('click', function(){
 var edit = $(this).attr("edit");
  $("#verUserR").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
  $.ajax({
      url:'http://' + readConfig()+ '/client/valroluser',
       type:'POST',
       dataType:"json",
       contentType:"application/json",
      data:JSON.stringify({id:edit})
  }).always(function (data){
      $(".table-sm-data").html(tableur(tbodyur(data)));
      //ELIMNAR ROL-USER
      $("#btn-edit").on('click', function(){
          var idUsu = $('input:checkbox[name="id_data[]"]:checked').map(function (){
              return this.value;
          }).get();
          edit;
            if (idUsu.length == 0) {
                toastr.error("Seleccione al menos un usuario.");
            }else{
                $.ajax({
                    url:'http://' + readConfig() + '/client/delete/roluser',
                    type:'POST',
                    dataType:"json",
                    contentType:"application/json",
                    data:JSON.stringify({id:edit,id_Usu:idUsu})
                }).always(function(data){
                    var val = data;
                        if (val > 0) {
                            toastr.success("Eliminando Correctamente");
                           // $("#loading").load("../../views/RolUsuario/usurolver.jsp");
                           $(".root").load("../../views/RolUsuario/usurolver.jsp");
                        }else{
                            toastr.error("No se pudo completar la operacion");
                        }
                });
            }
      });
  });
});

$("#cerrarAsig").on("click",function(){
             $(".table-sm-data").html(""); 
    //         $("#verUserR").html("");
        });


});

//LOAD USUROL
//FUNCIONES
function tableur(data){
     return  "<div class='form-group'>\n\
            <table class='table table-sm table-striped text-center' id='tavleEasy'>"+
            "<thead>"+
            "<tr class='thead-dark'>"+
            "<th></th>"+
            "<th>Nombre</th>"+
            "<th>Usuario</th>"+
            "</tr>"+
            "</thead>"+
            "<tbody>"+ data +"</tbody>"+
            "</table>"+
            "</div>"+
            valtable(data);  
}
function tbodyur(data){
    var res="";
    $.each(data, function(key, val){
        res+="<tr>"+
              "<td><input type='checkbox' name='id_data[]' value='"+val.ID_USER+"'></td>"+
              "<td>"+ val.name +"</td>"+
              "<td>"+ val.login + "</td>"+
              "</tr>";
      
    });
    return res;
}
function valtable(data){
    var res = "";
      if(data){
    res += "<div class='form-group'>"+
              "<div class='text-right'>"+
                    "<button type='submit' class='btn btn-dark btn-sm' id='btn-edit'>"+
                     "Eliminar"+
                     "</button>"+
                "</div>"+
            "</div>";
    }else{
        res+="<div class='form-group'>"+
    "<div class='text-center'>"+
        "<h5>No tiene usuarios asociados</h5>"+
    "</div>"+
    "</div>";
    }
  return res;
}
function tablePrincipal(data){

    return  "<script src= '../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableGeneral'>"+
            "<thead class='thead-dark'>"+
            "<tr>"+
            "<th>Rol</th>"+
            "<th>Ver</th>"+
            "</tr>"+
            "</thead>"+
            "<tbody>"+ data +"</tbody>"+
            "</table>";
}

function tbody(data){
var res="";
$.each(data, function(key, val){
   res+="<tr>"+
         "<td>"+ val.description + "</td>"+
         "<td> <a href='#' rel='edit' edit ='" + val.ID + "' data-toggle='modal' data-target='#pagModal'>\n\
        <i id='icon-lg' class='fas fa-eye black'></i></a></td>\n\
        </tr>";
});
return res;
}
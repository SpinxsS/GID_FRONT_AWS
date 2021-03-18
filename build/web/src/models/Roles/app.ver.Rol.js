//LOAD ROLES
$.ajax({
    url: 'http://' + readConfig() + '/client/roles/views',
    type: 'GET',
    dataType: 'JSON'
}).always(function (data) {
    //CARGAS
    $("#loadRoles").html(tablePrincipal(tbodyTable(data)));
    //EVENTOS EDITAR
    $("a[rel='edit']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/client/roles/views/' + $(this).attr("idtm"),
            type: 'GET',
            dataType: 'json'
        }).always(function (data) {
        $.each(data, function (key, val) {
                $("#nameRoleedit").val(val.description);
                $("#detailsRoleedit").val(val.details);
                $("#idtm").val(val.ID);
                //UPDATE
                $("#UpdRoles").on('click', function () {
                    var idUser = $("#emptyUserDIKEY").val().trim();
                    var id = $("#idtm").val().trim();
                    var description = $("#nameRoleedit").val().trim();
                    var descb = $("#detailsRoleedit").val().trim();

                    if (description.length == 0 || descb.length == 0) {
                        toaststr.error("Campos Vacios");
                    } else {
                        $.ajax({
                            url: 'http://' + readConfig() + '/client/roles/update',
                            type: 'PUT',
                            dataType: 'json',
                            contenType: 'application/json',
                            data: JSON.stringify({
                                description: description,
                                descb: descb,
                                usu_create:idUser,
                                usu_update:idUser,
                                Id:id
                            })
                        }).always(function (data) {
                            if (data > 0) {
                                toastr.success("Modificado Correctamente");
                                $("#loading").load("../../views/Roles/verRol.jsp");
                            } else {
                                toastr.error("Error, Intente nuevamente");
                            }
                        });
                    }
                });
            });
        });
    });
    $("a[rel='status']").on('click', function (){
        $.ajax({
            url: 'http://' +readConfig()+ '/client/roles/status',
            type: 'PUT',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                id: $(this).attr("idtm").trim(),
                hidden: updateStatus($(this).attr("sta").trim()),
                usu_update: $("#emptyUserDIKEY").val().trim()
            })
        }).always(function (data){
          if (data > 0) {
             toastr.success("Modificado Correctamente");
             $("#loading").load("../../views/Roles/verRol.jsp");
          } else {
             toastr.error("Error, Intente nuevamente");
          }
        });
    });
});
//INSERT
$("#AddRoles").on('click', function () {
    var idUser = $("#emptyUserDIKEY").val().trim();
    var description = $("#nameRole").val().trim();
    var descb = $("#detailsRole").val().trim();

    if (description.length == 0 || descb.length == 0) {
        toastr.error("Campos Vacios");
    } else {
        $.ajax({
            url: 'http://' + readConfig() + '/client/roles/add',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify({
                description: description,
                descb: descb,
                usu_create: idUser,
                usu_update: idUser
            })
        }).always(function (data) {
            if (data > 0) {
                toastr.success("Creado Correctamente");
                $("#loading").load("../../views/Roles/verRol.jsp");
            } else {
                toastr.error("Error, Intente nuevamente");
            }
        });
    }
});
//FUNCIONES
function tablePrincipal(data){

    return  "<script src= '../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableGeneral'>"+
            "<thead class='thead-dark'>"+
            "<tr>"+
            "<th>Nombre</th>"+
            "<th>Observacion</th>"+
            "<th></th>"+
            "<th></th>"+
            "</tr>"+
            "</thead>"+
            "<tbody>"+ data +"</tbody>"+
            "</table>";
}

function tbodyTable(data) {
   var res="";
   $.each(data, function (key, val){
      var sep = colors(val.enabled).trim().split("__");
      res += "<tr>"+
              "<td>" + val.description + "</td>"+
              "<td>" + val.details + "</td>\n\
                <td> <a href='#' rel='edit' idtm ='" + val.ID + "' class='badge badge-primary' data-toggle='modal' data-target='#modalUpdateRole'>Editar</a></td> \n\
                <td> <a href='#' rel='status' class='" + sep[0] + " " + sep[1] + "' idtm='" + val.ID + "' sta='" + val.enabled + "'>" + sep[2] + "</a></td>\n\
              </tr>";
   });
   return res;
}
function colors(val) {
    var res = "";
    if (val == "1") {
        res = "badge__badge-danger__Inactivar";
    } else {
        res = "badge__badge-success__Activar";
    }
    return res;
}
function updateStatus(val) {
    var res = "";
    if (val === "1") {
        res = "2";
    } else {
        res = "1";
    }
    return res;
}
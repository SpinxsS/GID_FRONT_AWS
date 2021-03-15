//LOAD ROLES
$.ajax({
    url: 'http://' + readConfig() + '/client/roles/views',
    type: 'GET',
    dataType: 'JSON'
}).always(function (data) {
    //CARGAS
    $("#AsigRolPag").html(tablePrincipal(tbodyTable(data)));

    /*AÑADIR*/
    $("a[rel='add']").on("click", function () {
        var idRol = $(this).attr("idtm");
        $.ajax({
            url: '../RolPagina/Asignacion/AsignacionRoles.jsp',
            type: 'POST',
            data: {idRol: idRol},
        }).always(function (data) {
            $("#paginasAsociadas").html(data);
        });
    });
        /*ELIMINAR*/
        $("a[rel='delete']").on("click",function(){
            var idRol = $(this).attr("val");
           $.ajax({
               url: '../RolPagina/Desasignacion/rpVerPaginas.jsp',
               type:'POST',
               data:{idRol:idRol},
           }).always(function(data){
               $("#quitPage").html(data); 
           });
        }); 
        /*LIMPIAR*/
        $("#cerrarAsig").on("click",function(){
             $("#paginasAsociadas").html(""); 
        });
        $("#cerrarDesAsig").on("click",function(){
             $("#quitPage").html(""); 
        });
});
//FUNCIONES
function tablePrincipal(data) {

    return  "<script src= '../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableGeneral'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Nombre</th>" +
            "<th>Observacion</th>" +
            "<th>Asignar</th>" +
            "<th>Desaginar</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}

function tbodyTable(data) {
    var res = "";
    $.each(data, function (key, val) {
        res += "<tr>" +
                "<td>" + val.description + "</td>" +
                "<td>" + val.details + "</td>\n\
                <td> <a href='#' rel='add' idtm ='" + val.ID + "' data-toggle='modal' data-target='#pagModal'> <i class='fas fa-plus-square green' id='icon-lg'></i></a></td> \n\
                <td> <a href='#' rel='delete'  idtm='" + val.ID + "' data-toggle='modal' data-target='#pagAsig'> <i class='fas fa-minus-square red' id='icon-lg'></i></a></td>\n\
              </tr>";
    });
    return res;
}

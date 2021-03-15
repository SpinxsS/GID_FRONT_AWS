
/* MENU SENCUNDARIO */
$("#mSecundario").change(function () {
    $("#mSecundario").each(function () {
        var id = $(this).val();
        var idRoles = $("#idRoles").val();
        $.ajax({
            url: '../RolPagina/Asignacion/menuTercero.jsp',
            type: 'POST',
            data: {id: id, idRoles: idRoles},
        }).always(function (data) {
            $("#menuTercero").html(data);
             $("#addMenusData").prop("disabled", false);
        });
    });
});


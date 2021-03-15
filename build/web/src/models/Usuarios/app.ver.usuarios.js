//LOAD USERS
$.ajax({
    url: 'http://' + readConfig() + '/client/users/views',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    //CARGAS
    $("#loadUsers").html(tablePrincipal(tbodyTable(data)));
    //EVENTOS EDIT
    $("a[rel='edit']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/client/users/views/' + $(this).attr("idtm"),
            type: 'GET',
            dataType: "json"
        }).always(function (data) {
            $.each(data, function (key, val) {
                $("#namesUsersEdit").val(val.name);
                $("#nickNameEdit").val(val.login);
                $("#emailUserEdit").val(val.email);
                $("#idtm").val(val.ID);
                $("#nickNameEdit").prop('disabled', true);
                $("#emailUserEdit").prop('disabled', true);
                //UPDATE
                $("#UpdUsers").on('click', function () {
                    var idUser = $("#emptyUserDIKEY").val().trim();
                    var id = $("#idtm").val().trim();
                    var passOne = $("#passOneEdit").val().trim();
                    var passTwo = $("#passTwoEdit").val().trim();
                    var name = $("#namesUsersEdit").val();
                    var nick = $("#nickNameEdit").val();
                    var email = $("#emailUserEdit").val();
                        
                    if (name.length == 0 || nick.length == 0 || email.length == 0 || id.length == 0 || idUser.length == 0) {
                        toastr.error("Campos Vacios");
                    } else if (passOne.length == 0 || passTwo.length == 0) {
                        toastr.error("Contraseñas vacias");
                    } else if (passOne != passTwo) {
                        toastr.error("Contraseñas Diferentes");
                    } else {
                        $.ajax({
                            url: 'http://' + readConfig() + '/client/users/update',
                            type: 'PUT',
                            dataType: "json",
                            contentType: 'application/json',
                            data: JSON.stringify({
                                id: id,
                                name: name,
                                login: nick,
                                email: email,
                                idUser: idUser,
                                pass: passOne
                            })
                        }).always(function (data) {
                            if (data > 0) {
                                toastr.success("Modificado Correctamente");
                                $("#loading").load("../../views/Usuarios/verUsuario.jsp");
                            } else {
                                toastr.error("Error, intente nuevamente");
                            }
                        });
                    }
                });
            });
        });
    });
    //EVENTOS STA
    $("a[rel='status']").on('click', function () {
        $.ajax({
            url: 'http://' + readConfig() + '/client/users/status',
            type: 'PUT',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                id: $(this).attr("idtm").trim(),
                hidden: updateStatus($(this).attr("sta").trim()),
                idUser: $("#emptyUserDIKEY").val().trim()
            })
        }).always(function (data) {
            if (data > 0) {
                toastr.success("Modificado Correctamente");
                $("#loading").load("../../views/Usuarios/verUsuario.jsp");
            } else {
                toastr.error("Error, intente nuevamente");
            }
        });
    });
    //EVENTOS EMAIL 
    $("#emailUser").on('blur',function(){
        $.ajax({
            url: 'http://' + readConfig() + '/client/users/views',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data:JSON.stringify({
                login:'-',
                email:$(this).val(),
                id:0
            })
        }).always(function (data) {
            if(data){
                $("#AddUsers").prop('disabled', true);
                toastr.error("E-mail ya esta asoaciado a otra cuenta");
            }else{
                $("#AddUsers").prop('disabled', false);
            }
        });
    });
    //EVENTOS NICKNAME
    $("#nickName").on('blur',function(){
        $.ajax({
            url: 'http://' + readConfig() + '/client/users/views',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data:JSON.stringify({
                login:$(this).val(),
                email:'-',
                id:0
            })
        }).always(function (data) {
            if(data){
                $("#AddUsers").prop('disabled', true);
                toastr.error("Usuario ya esta asoaciado a otra cuenta");
            }else{
                $("#AddUsers").prop('disabled', false);
            }
        });
    });
});
//INSERT
$("#AddUsers").on('click', function () {
    var name = $("#namesUsers").val();
    var nick = $("#nickName").val();
    var email = $("#emailUser").val();
    var passOne = $("#passOne").val();
    var passTwo = $("#passTwo").val();
    var idUser = $("#emptyUserDIKEY").val().trim();
    if (name.length == 0 || nick.length == 0 || email.length == 0) {
        toastr.error("Campos Vacios");
    } else if (passOne.length == 0 || passTwo.length == 0) {
        toastr.error("Contraseñas vacias");
    } else if (passOne != passTwo) {
        toastr.error("Contraseñas Diferentes");
    } else {
        $.ajax({
            url: 'http://' + readConfig() + '/client/users/add',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                name: name,
                login: nick,
                email: email,
                idUser:idUser,
                pass: passOne
            })
        }).always(function (data) {
            if (data > 0) {
                toastr.success("Creado Correctamente");
                $("#loading").load("../../views/Usuarios/verUsuario.jsp");
            } else {
                toastr.error("Error, intente nuevamente");
            }
        });
    }
});
//FUNCIONES
function tablePrincipal(data) {
    return "<script src='../../models/Configs/app.configs.table.js'></script> \n\
            <table class='table table-sm table-striped text-center' id='tableGeneral'>" +
            "<thead class='thead-dark'>" +
            "<tr>" +
            "<th>Nombres</th>" +
            "<th>Usuario</th>" +
            "<th>E-mail</th>" +
            "<th></th>" +
            "<th></th>" +
            "</tr>" +
            " </thead>" +
            "<tbody>" + data + "</tbody>" +
            "</table>";
}
function tbodyTable(data) {
    var res = "";
    $.each(data, function (key, val) {
        var sep = colors(val.enabled).trim().split("__");
        res += "<tr>" +
                "<td>" + val.name + "</td>" +
                "<td>" + val.login + "</td> \n\
                   <td>" + val.email + "</td> \n\
                   <td> <a href='#' rel='edit' idtm='" + val.ID + "' class='badge badge-primary' data-toggle='modal' data-target='#modalUsersUpdate'>Editar</a></td> \n\
                   <td> <a href='#' rel='status' class='" + sep[0] + " " + sep[1] + "' idtm='" + val.ID + "' sta='" + val.enabled + "'>" + sep[2] + "</a></td>\n\
               </tr>";
    });
    return res;
}
function colors(val) {
    var res = "";
    if (val === "1") {
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
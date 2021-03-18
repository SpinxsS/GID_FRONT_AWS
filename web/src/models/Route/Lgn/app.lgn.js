$("#login").on('click', function () {
    var user = $("#inputUser").val();
    var password = $("#inputPassword").val();
    if (user.length == 0 || password.length == 0) {
        toastr.error("Campos vacios");
    } else {
        $.ajax({
            url: 'http://' + readConfigInit() + '/client/users/login',
            type: 'POST',
            dataType: "json",
            contentType: 'application/json',
            data: JSON.stringify({
                login: user,
                pass: password
            })
        }).always(function (data) {
            if (data) {
                //GET DATA
                $.ajax({
                    url: 'http://' + readConfigInit() + '/client/users/val',
                    type: 'POST',
                    dataType: "json",
                    contentType: 'application/json',
                    data: JSON.stringify({
                        login: user,
                        email: user,
                        id: 0
                    })
                }).always(function (data) {
                    //SEND DATA
                    $.ajax({
                        url: 'Login',
                        type: 'POST',
                        data: {login:data[0].login,key:data[0].ID,names:data[0].name,action:"revertLogin"}
                    }).always(function (data) {
                        toastr.success("Bienvenido...");
                        location.href="src/views/Route/index.jsp";
                    });
                    //SEND END
                });
                //GET END
            } else {
                                //GET DATA
                $.ajax({
                    url: 'http://' + readConfigInit() + '/client/users/val',
                    type: 'POST',
                    dataType: "json",
                    contentType: 'application/json',
                    data: JSON.stringify({
                        login: user,
                        email: user,
                        id: 0
                    })
                }).always(function (data){
                       valUser(data);
                });
            }
        });
    }
});

function valUser(data){
    var res = "";
    $.each(data, function (key, val){
        if(val.enabled == 2){
            toastr.warning("Inactivo, usuario temporalmente bloqueado.");
        }else{
            toastr.error("Error, usuario o contraseña incorrectos");

        }
    });
}
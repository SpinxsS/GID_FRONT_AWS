<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>GID</title>
        <link rel="stylesheet" href="src/template/css/bootstrap.min.css">
        <link rel="stylesheet" href="src/template/css/toastr.min.css">
        <link rel="stylesheet" href="src/template/css/loginInpetel.min.css">
        <link rel="stylesheet" href="src/template/css/select2.min.css">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div clas="form-group">
                        <div class="login-space">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">

                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <div class="card">
                                            <div class="card-body login-sec" >
                                                <h2 class="text-center">Iniciar Sesion</h2>
                                                <div class="row">
                                                    <div class="col-md-12 col-lg-12">
                                                        <div class="form-group">
                                                            <input type="text" name="user" id="inputUser" placeholder="Ingresar Usuario" 
                                                                   class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 col-lg-12">
                                                        <div class="form-group">
                                                            <input type="password" name="pass" id="inputPassword" placeholder="Ingresar Contraseña" 
                                                                   class="form-control">
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 col-lg-12">
                                                        <div class="form-group">
                                                            <button type="submit" class="btn  btn-outline-secondary  float-right" id="login">
                                                                <i class="fas fa-user-plus"></i> Ingresar
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    <script src="src/template/js/jquery-3.3.1.js"></script>
    <script src="src/template/js/bootstrap.min.js"></script>
    <script src="src/template/js/toastr.min.js"></script>
    <script src="src/template/js/select2.min.js"></script>
    <script src="src/models/Configs/app.configs.read.js"></script>
    <script src="src/models/Route/Lgn/app.lgn.js"></script> 
</html>

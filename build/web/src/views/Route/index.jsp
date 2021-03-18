<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    HttpSession obj = request.getSession(false);

    String userName = (String) obj.getAttribute("NICKNAME");
    String keyId = (String) obj.getAttribute("IDKEY");
    String nombres = (String) obj.getAttribute("NOMBRES");

    if ((keyId == null || keyId.equals("") || keyId.equals("null"))
            || (userName == null || userName.equals("") || userName.equals("null"))
            || (nombres == null || nombres.equals("") || nombres.equals("null"))) {
%> 
<script> location.href = "404.jsp";</script>
<% } else { %>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>GID</title>
        <link rel="stylesheet" href="../../template/css/bootstrap.min.css">
        <link rel="stylesheet" href="../../template/css/jquery.dataTables.min.css">
        <link rel="stylesheet" href="../../template/css/toastr.min.css">
        <link rel="stylesheet" href="../../template/css/buttons.dataTables.min.css">
        <link rel="stylesheet" href="../../template/css/inpetel.min.css">
        <link rel="stylesheet" href="../../template/css/select2.css">
        <link rel="stylesheet" href="../../template/css/select2.min.css">
        <link rel="stylesheet" href="../../template/css/select2-bootstrap4.min.css">
        <link href="../../template/css/select2-bootstrap4.css"  rel="stylesheet">
        <script src="../../models/Configs/app.configs.read.js"></script> 
    </head>
    <body>
        <input type="hidden" id="emptyUserDIKEY" value="<% out.println(keyId); %>">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
           <!-- <a class="navbar-brand" href="#"><img src="../../template/img/img_inpetel_blacn.png" id="imgLogin"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>-->
             <a class='navbar-brand' href='#'><img src='../../template/img/img_inpetel_blacn.png' id='imgLogin'></a>
            <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#testbarNav' aria-controls='testbarNav' aria-expanded='false' aria-label='Toggle navigation'>
                <span class='navbar-toggler-icon'></span>
            </button>
           <div class="collapse navbar-collapse" id="testbarNav"> 
            </div> 
           <!-- <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="vrUsers">Usuarios</a>
                    </li>
                   <li class="nav-item">
                          <a class="nav-link" href="#" id="vrRoles">Roles</a>
                    </li> 
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="client">Cliente</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="baseline">Linea Base</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Programación 
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#" id="progVer">Ejecutada</a>
                            <a class="dropdown-item" href="#" id="progVer2">Almacenada</a>
                            <a class="dropdown-item" href="#" id="progVsprog">Comparación</a>
                        </div>
                        
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Asociación
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#" id="asoc_disp">Dispositivos</a>
                            <a class="dropdown-item" href="#" id="asoc_salida">Salidas</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Reportes
                        </a>
                        <div class="dropdown-menu dropright" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#" id="valInsta">Valores Instantaneos</a>
                            <div class="dropdown-divider"></div>

                            <a href="#" data-toggle="dropdown" class="dropdown-toggle dropdown-item">Potencia Gestionada</a>

                            <ul class="dropdown-menu">  
                                <!--<a class="dropdown-item"  href="#" >Gestionada</a>-->
                               <!-- <a class="dropdown-item" href="#" id="repGestionadaCircuito">Circuito</a>
                                <a class="dropdown-item" href="#" id="repGestionadaControlador">Controlador</a>
                                <a class="dropdown-item" href="#" id="repGestionadaCliente">Cliente</a>
                            </ul>

                            <a class="dropdown-item" href="#" id="engGestio">Energia Gestionada Controlador</a>
                            <a class="dropdown-item" href="#" id="engGestioTT">Energia Gestionada Cliente</a>

                        </div>
                    </li>
                    <li class="nav-item dropdown"> 
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Modulo RD
                        </a>
 
                            <div class="dropdown-menu dropright" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#" id="EventsRD">Matriz Configuración</a>
                                <a class="dropdown-item" href="#" id="outsRD">Salidas Afectadas (RD)</a>
                                <a class="dropdown-item" href="#" id="ReportEventsRD">Reporte Señales Simples</a>
                                <a class="dropdown-item" href="#" id="MasiveEventsRD">Reporte General Simples</a>
                                
                            </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="vrengUnica">Energia AE</a>
                    </li>
                </ul>
         </div> -->
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" 
                       href="#" data-toggle="dropdown" 
                       aria-haspopup="true" 
                       aria-expanded="false">
                        <% out.println(nombres); %>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <!--  <a class="dropdown-item ac" id="perfil" ack="" href="#">
                              Perfil
                          </a>  
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item vrs" id="version" href="#">
                              Acerca de
                          </a> -->
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" id="lgTou">Cerrar Sesion</a> 
                    </div>
                </li>
            </ul>  
        </nav>
        <div class="container">
            <div id="loading" class="mt-4"></div>
        </div>
    </body>
    <script src="../../template/js/jquery-3.3.1.js"></script>
    <script src="../../template/js/jquery.dataTables.min.js"></script>
    <script src="../../template/js/dataTables.buttons.min.js"></script>
    <script src="../../template/js/select2.min.js"></script>
    <script src="../../template/js/buttons.flash.min.js"></script>
    <script src="../../template/js/xlsx.full.min.js"></script>
    <script src="../../template/js/jszip.min.js"></script>
    <script src="../../template/js/pdfmake.min.js"></script>
    <script src="../../template/js/vfs_fonts.js"></script>
    <script src="../../template/js/buttons.html5.min.js"></script>
    <script src="../../template/js/buttons.print.min.js"></script>
    <script src="../../template/js/bootstrap.min.js"></script>
    <script src="../../template/js/toastr.min.js"></script>
    <script src="../../template/js/all.js"></script>
    <script src="../../template/js/Chart.min.js"></script>
    <script src="../../template/js/hammer.js"></script>
    <script src="../../template/js/zoom.js"></script>
    <!--<script src="../../template/js/app.js"></script>-->
    <script src="../../template/js/moment.min.js"></script>
    <script src="../../template/js/jspdf.min.js"></script>
    <script src="../../template/js/html2canvas.min.js"></script>
    <script src="../../models/Route/Lgn/app.lgt.js"></script> 
   <script src="../../models/Route/Menu/app.menu.dinamico.js"></script> 
</html>
<% }%>
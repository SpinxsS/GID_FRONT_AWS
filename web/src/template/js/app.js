/*CLIENTE*/
$("#client").on('click', function () {
    /*CARGO APLICACION*/
    $("#loading").load("../../views/Cliente/verCliente.jsp");
});
//ROL_USUARIO
$("#roluser").on('click', function (){
   $("#loading").load("../../views/RolUsuario/usurolver.jsp"); 
});
//ROL_USUARIO ADD
$("#asigroluser").on('click', function (){
    $("#loading").load("../../views/RolUsuario/AsigUsurRol.jsp");
});
//ROL_ROL_PAGINA
$("#asigrolpag").on('click', function(){
    $("#loading").load("../../views/RolPagina/rolPaginaver.jsp");
});
/*LINEA BASE*/
$("#baseline").on('click', function () {
    /*CARGO APLICACION*/
    $("#loading").load("../../views/LineaBase/verLineaBase.jsp");
});
/*ASOCIACION DE DISPOSITIVOS*/
$("#asoc_disp").on('click', function () {
    /*CARGO APLICACION*/
    $("#loading").load("../../views/Asociaciones/Dispositivos/asocDisLb.jsp");
});
/*ASOCIACION DE SALIDAS*/
$("#asoc_salida").on('click', function () {
    /*CARGO APLICACION*/
    $("#loading").load("../../views/Asociaciones/Salidas/asocOutdvcl.jsp");
});
/*PROGRAMACION VER*/
$("#progVer").on('click', function () {
    /*CARGO APLICACION*/
    $("#loading").load("../../views/Programacion/verProgramacion.jsp");
});
/*PROGRAMACION ALMACENADA */
$("#progVer2").on('click', function (){
   /* CARGO APLICACION */
   $("#loading").load("../../views/Programacion/verProgramacionAlmc.jsp");
});
/*PROGRAMACION CREAR*/
$("#progCrear").on('click', function () {
    /*CARGO APLICACION*/
    $("#loading").load("../../views/Programacion/crearProgramacion.jsp");
});
/* COMPARAR PROGRAMACIONES EXE-ALMC */
$("#progVsprog").on('click', function (){
   /*CARGO APLICACION */ 
   $("#loading").load("../../views/Programacion/verComparatePrg.jsp");
});
/*REPORTES PG*/
$("#repGestionada").on('click', function () {
    $("#loading").load("../../views/Reportes/PotenciaGestionada/report.jsp");
});
/*REPORTES PG - CIRCUITO*/
$("#repGestionadaCircuito").on('click', function () {
    $("#loading").load("../../views/Reportes/PotenciaGestionada/report.circuito.jsp");
});
/*REPORTES PG - CONTROLADOR*/
$("#repGestionadaControlador").on('click', function () {
    $("#loading").load("../../views/Reportes/PotenciaGestionada/report.controlador.jsp");
});
/*REPORTES PG - CLIENTE*/
$("#repGestionadaCliente").on('click', function () {
    $("#loading").load("../../views/Reportes/PotenciaGestionada/report.cliente.jsp");
});
/*REPORTES ENG xEDS*/
$("#engGestio").on('click', function () {
    $("#loading").load("../../views/Reportes/EnergiaGestionada/engUnica.jsp");
});
/*REPORTES ENG TOTAL*/
$("#engGestioTT").on('click', function () {
    $("#loading").load("../../views/Reportes/EnergiaGestionada/engTotal.jsp");
});
/*REPORTE VALORES INSTANTANEOS*/
$("#valInsta").on('click', function () {
    $("#loading").load("../../views/Reportes/ValoresInstantaneos/report.jsp");
});
/*REPORTE VALORES INSTANTANEOS*/
$("#vrUsers").on('click', function () {
    $("#loading").load("../../views/Usuarios/verUsuario.jsp");
});
/* REPORTE SALIDAS AFECTADAS*/
$("#outsRD").on('click', function (){
    $("#loading").load("../../views/Reportes/SalidasAfectadas/outsRD.jsp");
}); 
/*REPORTE SEÑALES SIMPLES */
$("#ReportEventsRD").on('click',function (){
    $("#loading").load("../../views/Reportes/events_cliente/reportEvents.jsp");
});
/* EVENTOS MASIVOS EJECUTADOS */
$("#MasiveEventsRD").on('click', function (){
   $("#loading").load("../../views/Reportes/events_cliente/masiveEvents.jsp"); 
});
/* ROLES */
$("#vrRoles").on('click', function () {
    $("#loading").load("../../views/Roles/verRol.jsp");
});
/* MODULO RD -> SEÑALES SIMPLES */
$("#EventsRD").on('click', function(){
    $("#loading").load("../../views/ModuloRD/verSignalSimple.jsp");
});
/* MODULO ENERGIA ACTIVA */
$("#vrengUnica").on('click', function(){
    $("#loading").load("../../views/EnergiaAE/engUnica.jsp");
})
/*ACT*/
$("#imgLogin").on('click', function () {
    location.reload();
});

/*TOASTR*/
toastr.options.timeOut = 0;
toastr.options.extendedTimeOut = 0;
/* LOAD */
$("#loadingDiscriminator").load("../../views/Programacion/modal/crearProgramacionalmc.jsp");
/*CLIENTE*/
$.ajax({
    url: 'http://' + readConfig() + '/consultas/client',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    valueClient(data);
});
/*VALUES CLIENTE*/
function valueClient(data) {
    $.each(data, function (key, val) {
        $("#listClient").select2({theme: 'bootstrap4'
        }).append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
}
/*DEVICE*/
$("#listClient").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://' + readConfig() + '/consultas/device/unrepeat/' + id,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        if (data.length == 0) {
            toastr.warning("No tiene clientes asociado, revise la tabla de asociaciones");
        } else {
            //valueDevice(data);
             valueDispos(data);
              /* CARGA */
$("#listDevice").change(function (e){
    //var id = "4";
    var id = $(this).val();
   $.ajax({
       url: 'http://' + readConfig() + '/reportes/valInsta/Discriminador/carga/' + id,
       type: 'GET',
       dataType: 'json'
   }).always(function (data){
       //console.log(data);
      if(data.length == 0){
          toastr.error("Cargas sin programación");
      }else{
        valuedCarga(data);
      } 
   }); 
});
        }
    });

});
      
/* VALUES CARGA */
function valuedCarga(data){
    var res="";
    $.each(data, function(key, val){
       res +=("<option   value='"+ val.carga+"'>" +val.carga + "</option>");
   });
   if(res.length == 0){
       toastr.error("No tiene programacion la Carga");
   }else{
       var cons= "<option value=''>Seleccionar Carga </option>" + res;
       $("#listCarga").html(cons);
  }
}
/*VALUES DISPOSITIVO*/
function valueDispos(data) {
    var res = "";
    $("#listDevice").html("");
    $.each(data, function (key, val) {
        res += "<option value='" + val.ID + "'>" + val.name + "</option>";
    });
    if (res.length == 0) {
        toastr.error("No tiene variables asociados")
    } else {
        var cons = "<option value=''>Seleccionar Dispositivo</option>" + res;
        $("#listDevice").html(cons);
    }
}
/*VALIDADOR VACIOS*/
function empty(client, variable) {
    var response = false;
    if (client.length == 0 || variable.length == 0 ) {
        toastr.error("Campos vacios");
        response = true;
    }
    return response;
}
/* CONSULTA */
$("#btnAddProgrammingAlmc").on('click', function (){
   $("#verProgramacionAlmc").html("");
  // var id = "4";
   var id = $("#listDevice option:selected").val();
   var res = $("#listCarga option:selected").val(); 
   if(empty($("#listClient").val(), $("#listDevice").val(), $("#listCarga").val())){
       
   }else{
       $("#verProgramacionAlmc").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
       $.ajax({
         url: 'http://'+ readConfig() + '/reportes/valInsta/programmiAlmcenada/' + id +'/'+ res,
         type: 'GET',
         dataType: 'json'
       }).fail(function (data){
           toastr.error("Error");
           $("#verProgramacionAlmc").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
       }).done( function(data){
            $("#verProgramacionAlmc").html("");
            if(data.length == 0 || data === "" || data == ""){
                toastr.error("Error");
               $("#verProgramacionAlmc").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
            }else{
                    (ver(data));
            }
            
        });
   }
});

function ver(data){
    var sum = "";
    var resHourTh= "";
    var sumAll = "";
    var sumTh = "";
    var days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado"];
    $("#verProgramacionAlmc").html("");
   // console.log(data);
    sum = "";
     $.each(data, function (key, val ){
      /*DIAS*/
     $.each(val.programmingAlmc.nameDay, function (keyDays, valDay){
         sum = "";
         var  c;
            $.each(valDay, function(key, dias){
                        c=key;
       // $.each(num, function(keydays, valdaays){
           switch (c) {

                case "1":
                      sum += "<tr>";
           sum += (td(dias.dia,1));
                 /*IDENTIFICACION CARGA */
                sum += td(dias.carga,1);


             /*Programacion */
            $.each(dias.status, function (keyNext1, valnext1) {
                      //  console.log(valnext1);
                        sum += td(valnext1,2);
                    });
                sum += "</tr>";
                    break;
                case "2":
                           sum += "<tr>";
           sum += (td(dias.dia,1));
                 /*IDENTIFICACION CARGA */
                sum += td(dias.carga,1);
                 
             /*Programacion */
            $.each(dias.status, function (keyNext1, valnext1) {
                      //  console.log(valnext1);
                        sum += td(valnext1,2);
                    });
                sum += "</tr>";
                    break;
                case "3":
                          sum += "<tr>";
           sum += (td(dias.dia,1));
                 /*IDENTIFICACION CARGA */
                sum += td(dias.carga,1);
                 
             /*Programacion */
            $.each(dias.status, function (keyNext1, valnext1) {
                      //  console.log(valnext1);
                        sum += td(valnext1,2);
                    });
                sum += "</tr>";
                        break;
                case "4":
                               sum += "<tr>";
           sum += (td(dias.dia,1));
                 /*IDENTIFICACION CARGA */
                sum += td(dias.carga,1);
                 
             /*Programacion */
            $.each(dias.status, function (keyNext1, valnext1) {
                      //  console.log(valnext1);
                        sum += td(valnext1,2);
                    });
                sum += "</tr>";
                    break;
                case "5":
                         sum += "<tr>";
           sum += (td(dias.dia,1));
                 /*IDENTIFICACION CARGA */
                sum += td(dias.carga,1);
                 
             /*Programacion */
            $.each(dias.status, function (keyNext1, valnext1) {
                      //  console.log(valnext1);
                     
                        sum += td(valnext1,2);
                    });
                sum += "</tr>";
                
                    break;
                case "6":
                 sum += "<tr>";
           sum += (td(dias.dia,1));
                 /*IDENTIFICACION CARGA */
                sum += td(dias.carga,1);
                 
             /*Programacion */
            $.each(dias.status, function (keyNext1, valnext1) {
                      //  console.log(valnext1);
                      
                        sum += td(valnext1,2);
                     
                    });
                sum += "</tr>";
                    break;
                case "7":
                   sum += "<tr>";
           sum += (td(dias.dia,1));
                 /*IDENTIFICACION CARGA */
                sum += td(dias.carga,1);
                 
             /*Programacion */
            $.each(dias.status, function (keyNext1, valnext1) {
                      //  console.log(valnext1);
                        sum += td(valnext1,2);
                    });
                sum += "</tr>";
                    break;
                case "8":
                   sum += "<tr>";
           sum += (td(dias.dia,1));
                 /*IDENTIFICACION CARGA */
                sum += td(dias.carga,1);
            $.each(dias.status, function (keyNext1, valnext1) {
                        sum += td(valnext1,2);
                       
                    });
                sum += "</tr>";
                        break;
                    
            }
    
        });
              // });
         sumAll += (sum);
         sum= "";
   /*HORAS*/
   resHourTh="";
    $.each(valDay, function (keyHour, valHour){
       resHourTh = "";
       $.each(valHour.horas, function(keynext, next1){
           resHourTh += th(next1);
       });
     });
     sumTh += th("Dia");
     sumTh += th("Carga");
      });
  });
    
 $("#verProgramacionAlmc").html(table(tr(sumTh + resHourTh), sumAll));
};
/*TR-TABLE*/
function tr(val) {
    return "<tr>" + val + "</tr>";
}
/*TH-TABLE*/
function th(val) {
    return "<th>" + val + "</th>";
}
/*TD-TABLE*/
function td(val, v) {
    var response = "";
    if (v == 1) {
        response = "<td>" + val + "</td>";
    } else {
        response = "<td class='" + printColor(val) + "'>" + val + "</td>";
    }
    return response;
}
/*TABLE*/
function table(th, td) {
    return  "<script src='../../models/Configs/app.configs.table.js'></script>\n\
            <table class='table table-sm text-center' id='tableGeneral'>" +
            "<thead class='thead-dark'>" + th + "</thead>" +
            "<tbody>" + td + "</tbody>" +
            "</table>";
}
/*PRINT COLOR*/
function printColor(status) {
    var response = "";
    if (status === "ON") {
        response = "bg-success-inp";
    } else if (status === "null") {
        response = "bg-warning-inp";
    } else if (status === "OFF") {
        response = "bg-danger-inp";
    } else {
        response = "bg-white-inp";
    }
    return response;
}


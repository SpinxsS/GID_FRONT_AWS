/*GENERA XLSX O EXCEL*/
$("#down").on('click', function (){
    if (empty($("#startTime").val(), $("#endTime").val())) {
    
    }else{
        $("#loadingXLS").html("<h3 class='text-center'><img src='../../template/img/load.gif' width='100' height='80'></h3>");
        $.ajax({
            url:'http://' + readConfig() + '/reportes/EnergiaAE/' + convert($("#startTime").val())+ '/' + convert($("#endTime").val()),
            type:'GET',
            contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
        }).fail(function () {
            ("#loadingLBS").html("");
            toastr.error("Error");
            $("#loadingLBS").html("<div class='alert alert-danger' role='alert'> <button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
        }).done(function (data){
           $("#loadingLBS").html("");
            if (data.length == 0) {
                toastr.error("Error");
                $("#loadingLBS").html("<div class='alert alert-danger' role='alert'><button type='button' class='close' data-dismiss='alert'>x</button> Error, Intente nuevamente</div>");
            } else {
                toastr.success("Generado correctamente");
                $("#loadingLBS").html("<div class='alert alert-success' role='alert'><button type='button' class='close' data-dismiss='alert'>x</button> Descargado correctamente</div>");
            }
 
        });
        
    }  
});

/*CONVERT FH*/
function convert(fh) {
    var date = fh.split("-");
    return date[0] + date[1] + date[2];
}
/*VALIDADOR VACIOS*/
function empty( startTime, endTime) {
    var response = false;
    if (startTime == 0 || endTime == 0) {
        toastr.error("Campos vacios");
        response = true;
    }
    return response;
}

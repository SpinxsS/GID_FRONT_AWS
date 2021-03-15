/*CLIENTE*/
$.ajax({
    url: 'http://'+readConfig()+'/consultas/client',
    type: 'GET',
    dataType: "json"
}).always(function (data) {
    valueClient(data);
});
/*VALUES CLIENTE*/
function valueClient(data) {
    $.each(data, function (key, val) {
        $("#listClient").append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
    });
}
/*DEVICE*/
$("#listClient").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/device/unrepeat/' + id,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        valueDevice(data);
    });
});
/*VALUES DEVICE*/
function valueDevice(data) {
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
/*INSERCION*/
$("#btnAddBaseLine").on('click', function () {
    if (emptybs($("#listClient").val(), $("#fileUpload").val())) {

    } else {
        Upload();
    }
});
/*VALORES INSERT VARIABLES*/
function variablesAdd(day, A00, A01, A02, A03, A04, A05, A06, A07, A08, A09, A10, A11, A12, A13, A14, A15, A16, A17, A18, A19, A20, A21, A22, A23) {
    var data = {
        id: 0,
        cliente: $("#listClient").val()
        , dia: day
        , device: $("#listDevice").val()
        , a00: A00
        , a01: A01
        , a02: A02
        , a03: A03
        , a04: A04
        , a05: A05
        , a06: A06
        , a07: A07
        , a08: A08
        , a09: A09
        , a10: A10
        , a11: A11
        , a12: A12
        , a13: A13
        , a14: A14
        , a15: A15
        , a16: A16
        , a17: A17
        , a18: A18
        , a19: A19
        , a20: A20
        , a21: A21
        , a22: A22
        , a23: A23
    };
    return JSON.stringify(data);
}
/*VALIDADOR VACIOS*/
function emptybs(client, xls) {
    var response = false;
    if (client.length == 0 || xls.length == 0) {
        toastr.error("Campos vacios");
        response = true;
    }
    return response;
}
$("#dataSelectionBtn").on('click', function () {
    $("#dataSelection").load("../../views/LineaBase/seleccionLineaBase.jsp");
});
/*CARGA DE EXCEL*/
function Upload() {
    //Reference the FileUpload element.
    var fileUpload = document.getElementById("fileUpload");

    //Validate whether File is valid Excel file.
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.xls|.xlsx)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();

            //For Browsers other than IE.
            if (reader.readAsBinaryString) {
                reader.onload = function (e) {
                    ProcessExcel(e.target.result);
                };
                reader.readAsBinaryString(fileUpload.files[0]);
            } else {
                //For IE Browser.
                reader.onload = function (e) {
                    var data = "";
                    var bytes = new Uint8Array(e.target.result);
                    for (var i = 0; i < bytes.byteLength; i++) {
                        data += String.fromCharCode(bytes[i]);
                    }
                    ProcessExcel(data);
                };
                reader.readAsArrayBuffer(fileUpload.files[0]);
            }
        } else {
            toastr.error("Utilice otro navegador");
        }
    } else {
        toastr.error("Archivo no valido");
    }
}
function ProcessExcel(data) {
    //Read the Excel File data.
    var workbook = XLSX.read(data, {
        type: 'binary'
    });
    var days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    //Fetch the name of First Sheet.
    for (var i = 0; i < days.length; i++) {
        var sheet = workbook.SheetNames[i];
        var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
        addExcel(excelRows, days[i]);
    }
}
function addExcel(excelRows, day) {
    if (false) {
        toastr.error("Solo son 24 horas, configue nuevamente el archivo");
    } else {
        var varJson = variablesAdd(day, excelRows[0].Hour + "__" + excelRows[0].Consume, excelRows[1].Hour + "__" + excelRows[1].Consume,
                excelRows[2].Hour + "__" + excelRows[2].Consume, excelRows[3].Hour + "__" + excelRows[3].Consume,
                excelRows[4].Hour + "__" + excelRows[4].Consume, excelRows[5].Hour + "__" + excelRows[5].Consume,
                excelRows[6].Hour + "__" + excelRows[6].Consume, excelRows[7].Hour + "__" + excelRows[7].Consume,
                excelRows[8].Hour + "__" + excelRows[8].Consume, excelRows[9].Hour + "__" + excelRows[9].Consume,
                excelRows[10].Hour + "__" + excelRows[10].Consume, excelRows[11].Hour + "__" + excelRows[11].Consume,
                excelRows[12].Hour + "__" + excelRows[12].Consume, excelRows[13].Hour + "__" + excelRows[13].Consume,
                excelRows[14].Hour + "__" + excelRows[14].Consume, excelRows[15].Hour + "__" + excelRows[15].Consume,
                excelRows[16].Hour + "__" + excelRows[16].Consume, excelRows[17].Hour + "__" + excelRows[17].Consume,
                excelRows[18].Hour + "__" + excelRows[18].Consume, excelRows[19].Hour + "__" + excelRows[19].Consume,
                excelRows[20].Hour + "__" + excelRows[20].Consume, excelRows[21].Hour + "__" + excelRows[21].Consume,
                excelRows[22].Hour + "__" + excelRows[22].Consume, excelRows[23].Hour + "__" + excelRows[23].Consume);
        $.ajax({
            url: 'http://'+readConfig()+'/consultas/add/baseline',
            type: 'POST',
            contentType: 'application/json',
            dataType: "json",
            data: varJson
        }).always(function (data) {
            /*CARGO APLICACION*/
            if (data) {
                toastr.success("Creado correctamente");
            } else {
                toastr.error("Error");
            }
        });
    }
}
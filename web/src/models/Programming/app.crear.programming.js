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
        $("#listClient").select2({theme: 'bootstrap4'
        }).append("<option value='" + val.ID + "'>" + val.name_client + "</option>");
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
/*VARIABLES*/
$("#listDevice").change(function (e) {
    var id = $(this).val();
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/prg/variable/' + id,
        type: 'GET',
        dataType: "json"
    }).always(function (data) {
        valueVariable(data);
    });
});
/*VALUES VARIABLES*/
function valueVariable(data) {
    var res = "";
    $("#listVariable").html("");
    $.each(data, function (key, val) {
        res += "<option value='" + val.ID + "'>" + val.var_code + " - " + val.description + "</option>";
    });
    if (res.length == 0) {
        toastr.error("No tiene variables asociados");
    } else {
        var cons = "<option value=''>Seleccionar Variable</option>" + res;
        $("#listVariable").html(cons);
    }
}
/*INSERCION*/
$("#btnAddProgramming").on('click', function () {
    if (empty($("#listClient").val(), $("#listVariable").val(), $("#fileUpload").val())) {

    } else {
        Upload();
    }
});
/*VALORES INSERT VARIABLES*/
function variables(day, HH) {
    var data = {
        id: 0
        , cliente: $("#listClient").val()
        , variable: $("#listVariable").val()
        , dia: day
        , device: $("#listDevice").val()
        , hours: HH
    };
    return JSON.stringify(data);
}
/*VALIDADOR VACIOS*/
function empty(client, variable, xls) {
    var response = false;
    if (client.length == 0 || variable.length == 0 || xls.length == 0) {
        toastr.error("Campos vacios");
        response = true;
    }
    return response;
}
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

    var sheet = workbook.SheetNames[0];
    var excelRows = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
    //excelAdd(XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]));


    var days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

    //Fetch the name of First Sheet.
    for (var i = 0; i < days.length; i++) {
        if (excelRows.length == 0) {
            toastr.error("Revise su excel, tiene algo defectuoso");
        } else {
            excelAdd(excelRows, days[i]);
        }
    }
}
function excelAdd(excelRows, day) {
    var d = new Array();
    var response;
    switch (day.trim()) {
        case "Mo":
            {
                for (var i = 0; i < excelRows.length; i++) {
                    if (inputValue(excelRows[i].Hour)) {
                        d.push(excelRows[i].Hour + "__" + excelRows[i].Lunes);
                    }
                }
                response = variables('Mo', d);
            }
            break;
        case "Tu":
            {
                for (var i = 0; i < excelRows.length; i++) {
                    if (inputValue(excelRows[i].Hour_1)) {
                        d.push(excelRows[i].Hour_1 + "__" + excelRows[i].Martes);
                    }
                }
                response = variables('Tu', d);
            }
            break;
        case "We":
            {
                for (var i = 0; i < excelRows.length; i++) {
                    if (inputValue(excelRows[i].Hour_2)) {
                        d.push(excelRows[i].Hour_2 + "__" + excelRows[i].Miercoles);
                    }
                }
                response = variables('We', d);
            }
            break;
        case "Th":
            {
                for (var i = 0; i < excelRows.length; i++) {
                    if (inputValue(excelRows[i].Hour_3)) {
                        d.push(excelRows[i].Hour_3 + "__" + excelRows[i].Jueves);
                    }
                }
                response = variables('Th', d);
            }
            break;
        case "Fr":
            {
                for (var i = 0; i < excelRows.length; i++) {
                    if (inputValue(excelRows[i].Hour_4)) {
                        d.push(excelRows[i].Hour_4 + "__" + excelRows[i].Viernes);
                    }
                }
                response = variables('Fr', d);
            }
            break;
        case "Sa":
            {
                for (var i = 0; i < excelRows.length; i++) {
                    if (inputValue(excelRows[i].Hour_5)) {
                        d.push(excelRows[i].Hour_5 + "__" + excelRows[i].Sabado);
                    }
                }
                response = variables('Sa', d);
            }
            break;
        case "Su":
            {
                for (var i = 0; i < excelRows.length; i++) {
                    if (inputValue(excelRows[i].Hour_6)) {
                        d.push(excelRows[i].Hour_6 + "__" + excelRows[i].Domingo);
                    }
                }
                response = variables('Su', d);
            }
            break;
    }
    $.ajax({
        url: 'http://'+readConfig()+'/consultas/add/prg',
        type: 'POST',
        contentType: 'application/json',
        dataType: "json",
        data: response
    }).always(function (data) {
        if (data) {
            toastr.success("Creado correctamente");

        } else {
            toastr.error("Error");
            //$("#loading").load("../../views/Programacion/verProgramacion.jsp");
        }
    });
}
function inputValue(val) {
    var response = true;
    if (val === "" || val == null) {
        response = false;
    }
    return response;
}

$(function () {
    var table = $('#tableGeneral').DataTable({
        dom: 'Bfrtip',
        order:[],
        buttons: [
            'copy', {
                name: 'EXCEL',
                extend: 'excelHtml5',
                title: 'Export_InpetelGD_' + datePrint()
            }, {
                name: 'PDF',
                extend: 'pdfHtml5',
                title: 'Export_InpetelGD_' + datePrint(),
                orientation: 'landscape',
                pageSize: 'LEGAL'
            }
        ]
    });
    var table = $('#tableGeneral2').DataTable({
        dom: 'Bfrtip',
        order:[[1, 'asc']],
        buttons: [
            'copy', {
                name: 'EXCEL',
                extend: 'excelHtml5',
                title: 'Export_InpetelGD_' + datePrint()
            }, {
                name: 'PDF',
                extend: 'pdfHtml5',
                title: 'Export_InpetelGD_' + datePrint(),
                orientation: 'landscape',
                pageSize: 'LEGAL'
            }
        ]
    });
});
/*FUNCTIONS*/
function datePrint() {
    var d = new Date();
    var mm = d.getMonth() + 1;
    var dd = d.getDate();
    var aa = d.getFullYear();
    var hh_mm = d.getHours() + ":" + d.getMinutes();
    return aa + "/" + mm + "/" + dd + " " + hh_mm;
}
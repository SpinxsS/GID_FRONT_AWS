/* CONSULTAR EL MENU DEL USUARIO */
$.ajax({
    url:'http://'+ readConfig() +'/consultas/menuDinamico/' + $("#emptyUserDIKEY").val().trim(),
    type:'GET',
    dataType: "json"
}).always(function(data){
   membership(data);
});

function membership(data){
    var res = "";
         
          res+='<ul class="navbar-nav">';
         
      $.each(data, function (key, val){
          res+=val;
      });
      res+='</ul>';
      res+='<script src="../../template/js/app.js"></script>';
      $("#testbarNav").html(res);
}
function headers(der){
     return "<a class='navbar-brand' href='#'><img src='../../template/img/img_inpetel_blacn.png' id='imgLogin'></a>\n\
            <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#testbarNav' aria-controls='testbarNav' aria-expanded='false' aria-label='Toggle navigation'>\n\
                <span class='navbar-toggler-icon'></span>\n\
            </button>";
}


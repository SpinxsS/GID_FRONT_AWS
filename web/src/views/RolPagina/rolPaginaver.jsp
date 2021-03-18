<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/RolPagina/app.ver.rolPagina.js"></script>
<div class="row">
    <div class="col-lg-12">
        <div class="form-group">
            <h4 class="text-center">Asociar Roles a Pagínas</h4>
        </div>
    </div>
    <div class="col-lg-12">
        <hr>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="form-group">
            <div id="AsigRolPag">
            </div>
        </div>
    </div>
</div>
<!--Modal Paginas Asociadas-->
<div class="modal fade" id="pagModal" tabindex="-1" role="dialog" aria-labelledby="pagModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="pagModalLabel">Asignación Pagínas Rol</h5>
                <button  type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div id="paginasAsociadas"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" id="cerrarAsig" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>   
</div>

<!-- MODAL DE PAGINAS ASIGNACION -->
<div class="modal fade" id="pagAsig" tabindex="-1" role="dialog" aria-labelledby="pagAsignacionLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="pagAsignacionLabel">Desasignación Pagínas a Rol</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>  
                </button>
            </div>
            <div class="modal-body">
                <div id="quitPage"></div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="cerrarDesAsig" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
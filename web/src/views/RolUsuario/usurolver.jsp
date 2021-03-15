<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/RolUsuario/app.roluser.ver.js"></script>
<div class="row">
    <div class="col-lg-12">
        <div class="form-group">
            <h4 class="text-center">Ver Rol a Usuarios</h4>
        </div>
    </div>
    <div class="col-lg-12">
        <div class="form-group">
            <hr>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="form-group">
            <div id="loadingRolUser">
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="pagModal" tabindex="-1" role="dialog" aria-labelledby="pagModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="pagModalLabel">Ver Usuarios y Roles</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="table-sm-data">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div id="verUserR"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" id="cerraAsig" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
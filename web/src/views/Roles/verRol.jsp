<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Roles/app.ver.Rol.js"></script>
<% HttpSession obj = request.getSession(true); %>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Roles</h4>
            <input type="hidden" id="emptyUserDIKEY" value="<% out.println(obj.getAttribute("IDKEY").toString());%>">
        </div>
    </div>
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <hr>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <div class="card">
                <div class="card-body">
                    <button type="button" class="btn btn-sm btn-dark" data-toggle="modal" data-target="#modalRolesCreate">
                        Crear Rol
                    </button>
                    <hr>
                    <div class="row">
                        <div class="col-lg-12 col-sm-12">
                            <div class="form-group">
                                <div id="loadRoles"></div> 
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div> 
<!--Modal-->
<div class="modal fade" id="modalRolesCreate" tabindex="-1" role="dialog" aria-labelledby="modalLabelUC" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelUC">Crear Rol</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="lblname">Nombre</label>
                            <input type="text" class="form-control form-control-sm" id="nameRole" placeholder="Nombre">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="lbldescrip">Descripcion</label>
                            <input type="text" class="form-control form-control-sm" id="detailsRole" placeholder="Descripcion">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div  class="text-right">
                                <button type="button" class="btn btn-sm btn-dark" id="AddRoles" data-dismiss="modal">
                                    Añadir
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="modal-footer">
                <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
<!--Modal EDIT-->
<div class="modal fade" id="modalUpdateRole" tabindex="-1" role="dialog" aria-labelledby="modalLabelUC" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelUC">Modificar Rolw</h5>
                <input type="hidden" id="idtm">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        <div class="modal-body">
            <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="lblname">Nombre</label>
                            <input type="text" class="form-control form-control-sm" id="nameRoleedit" placeholder="Nombre">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="lbldescrip">Descripcion</label>
                            <input type="text" class="form-control form-control-sm" id="detailsRoleedit" placeholder="Descripcion">
                        </div>
                    </div>
                 </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <button type="button" class="btn btn-sm btn-dark" id="UpdRoles" data-dismiss="modal">
                                    Modificar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-secondary" data-dismiss="modal">Cerrar</button>
        </div>
    </div>
  </div>
</div>

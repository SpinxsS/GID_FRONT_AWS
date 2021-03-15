<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Usuarios/app.ver.usuarios.js"></script>
<% HttpSession obj = request.getSession(true); %>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Usuarios</h4>
            <input type="hidden" id="emptyUserDIKEY" value="<% out.println(obj.getAttribute("IDKEY").toString()); %>">
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
                    <button type="button" class="btn btn-sm btn-dark" data-toggle="modal" data-target="#modalUsersCreate">
                        Crear Usuario
                    </button>
                    <hr>
                    <div class="row">
                        <div class="col-lg-12 col-sm-12">
                            <div class="form-group">
                                <div id="loadUsers"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</div>
<!--MODAL-->
<div class="modal fade" id="modalUsersCreate" tabindex="-1" role="dialog" aria-labelledby="modalLabelUC" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelUC">Crear Usuario</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="labelName">Nombres</label>
                            <input type="text" class="form-control form-control-sm" id="namesUsers" placeholder="Nombres">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="labelNickName">Usuario</label>
                            <input type="text" class="form-control form-control-sm" id="nickName" placeholder="Usuario">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label for="labelNickName">E-mail</label>
                            <input type="email" class="form-control form-control-sm" id="emailUser" placeholder="E-mail">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="labelPss">Contraseña</label>
                            <input type="password" class="form-control form-control-sm" id="passOne" placeholder="Contraseña">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="labelPsswr">Validación Contraseña</label>
                            <input type="password" class="form-control form-control-sm" id="passTwo" placeholder="Repetir Contraseña">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <button type="button" class="btn btn-sm btn-dark" id="AddUsers" data-dismiss="modal">
                                    Añadir
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
<!--MODAL EDIT-->
<div class="modal fade" id="modalUsersUpdate" tabindex="-1" role="dialog" aria-labelledby="modalLabelUC" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelUC">Modificar Usuario</h5>
                <input type="hidden" id="idtm">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="labelName">Nombres</label>
                            <input type="text" class="form-control form-control-sm" id="namesUsersEdit" placeholder="Nombres">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="labelNickName">Usuario</label>
                            <input type="text" class="form-control form-control-sm" id="nickNameEdit" placeholder="Usuario">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label for="labelNickName">E-mail</label>
                            <input type="email" class="form-control form-control-sm" id="emailUserEdit" placeholder="E-mail">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="labelPss">Contraseña</label>
                            <input type="password" class="form-control form-control-sm" id="passOneEdit" placeholder="Contraseña">
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label for="labelPsswr">Validación Contraseña</label>
                            <input type="password" class="form-control form-control-sm" id="passTwoEdit" placeholder="Repetir Contraseña">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <div class="text-right">
                                <button type="button" class="btn btn-sm btn-dark" id="UpdUsers" data-dismiss="modal">
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

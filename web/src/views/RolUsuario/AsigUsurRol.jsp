<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/RolUsuario/app.AsigUsuRol.js"></script>
<% HttpSession obj = request.getSession(true); %>
<div class="row">
    <div class="col-lg-12">
        <div class="form-group">
            <h4 class="text-center">Permisos Usuarios</h4>
             <input type="hidden" id="emptyUserDIKEY" value="<% out.println(obj.getAttribute("IDKEY").toString());%>">
        </div>
    </div>
    <div class="col-lg-12">
        <div class="form-group">
            <hr>
        </div>
    </div>
</div>
<div class="col-lg-12">
<div id="AddRolUsu"></div>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="form-group">
            <div class="text-right">
                <button type="submit" class="btn btn-dark btn-sm btn-add">
                    <i class="fas fa-plus-circle"></i>Ejecutar
                </button>
            </div>
        </div>
    </div>
</div>
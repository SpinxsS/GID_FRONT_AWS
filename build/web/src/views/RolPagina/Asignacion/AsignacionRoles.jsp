<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/RolPagina/app.asig.roles.js"></script>
<% 
    String idRol = request.getParameter("idRol");
%>
<input type="hidden" id="idRoles" value="<% out.println(idRol); %>">
<div class="row">
    <div class="col-lg-12">
        <div class="form-group">
            <select  class="form-control-sm form-control" id="menuPrincipal">
                <option value="">Seleccionar un Menu</option>
            </select>
        </div>
        <div class="form-group">
            <div id="menuSecundario"></div>
        </div>
        <div class="form-group">
            <div id="menuTercero"></div>
        </div>
       <div class="form-group">
            <div id="responseData"></div>
        </div>
        <div class="form-group">
            <div class="text-right">
                <button class="btn btn-sm btn-dark" id="addMenusData">Añadir</button>
            </div>
        </div>
    </div>
</div>
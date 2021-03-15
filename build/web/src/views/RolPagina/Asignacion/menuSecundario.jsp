<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/RolPagina/app.menuSecundario.js"></script>
<% 
    String idMenuSecundario = request.getParameter("id");
    String idRol = request.getParameter("idRoles");
%>
<input type="hidden" id="idMen2" value=" <% out.println(idMenuSecundario); %> ">
<input type="hidden" id="idRoles" value="<% out.println(idRol);  %>">
<select class="form-control form-control-sm" id="mSecundario">
    <option value="">Seleccionar un Menu</option>
</select>
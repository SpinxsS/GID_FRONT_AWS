<script src="../../models/Configs/app.configs.read.js"></script>  
<script src="../../models/Reportes/app.instantaneos.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Valores Instantaneos</h4>
            <input type="hidden" id="typeController"> 
        </div>
    </div>
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <hr>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-6">
        <div class="form-group">
            <div class="text-center">
                <label form="client">Cliente</label>
                <select class="form-control form-control-sm" id="listClient">
                    <option value="">Seleccionar cliente</option>
                </select>
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="form-group">
            <div class="text-center">
                <label form="disp">Dispositivo</label>
                <select class="form-control form-control-sm" id="listDisp"></select>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="form-group">
            <div class="text-right">
                <button type="submit" class="btn btn-dark btn-sm  form-control-sm" id="btnReport">Consultar</button>
            </div>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="form-group">
            <div id="loadPoscons"></div>
        </div>
        <div class="form-group">
            <div class="table-responsive">
                <div id="tableTension"></div>
            </div>
            <div class="table-responsive">
                <div id="tableLoad"></div>
            </div>
            <!---<div class="table-responsive">
                <div id="tableTrifasico"></div>-->
            </div>
        </div>
    </div>
</div>


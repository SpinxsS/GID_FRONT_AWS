<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Reportes/app.energia.gestionada.unica.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Energia Gestionada</h4>
        </div>
    </div>
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <hr>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="form-group">
                            <div class="text-center">
                                <label form="start">Fecha Inicio</label>
                                <input type="date" id="startTime" class="form-control form-control-sm">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                            <div class="text-center">
                                <label form="end">Fecha Fin</label>
                                <input type="date" id="endTime" class="form-control  form-control-sm">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="form-group">
                            <div class="text-center">
                                <label form="client">Cliente</label>
                                <select class="form-control form-control-sm" id="listClient">
                                    <option value="">Seleccionar cliente</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
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
                            <div id="table-responsive">
                                <div id="loadTableEnergy"></div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>
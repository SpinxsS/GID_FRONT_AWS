<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/LineaBase/app.baseline.selection.js"></script>
<div class="modal fade" id="loadDataBase" tabindex="-1" role="dialog" aria-labelledby="modalLabelSB" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelSB">Selección Linea Base</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- CODE -->
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="form">Cliente</label>
                            <select class="form-control" id="listClientSL">
                                <option value="">Cliente</option>
                            </select>
                        </div>
                        <div class="col-lg-6">
                            <label class="form">Dispositivo</label>
                            <select class="form-control" id="listDeviceSL">
                                <option value="">Dispositivo</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="form">Fecha Inicio</label>
                            <input type="date" class="form-control" id="startTime">
                        </div>
                        <div class="col-lg-6">
                            <label class="form">Fecha Fin</label>
                            <input type="date" class="form-control" id="endTime">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-lg-12">
                        <div id="loadingLBS"></div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-right">
                                <button id="btnAddLBcal" class="btn-sm btn-dark">Añadir</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END CODE -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
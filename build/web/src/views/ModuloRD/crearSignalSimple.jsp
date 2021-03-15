<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/ModuloRD/app.crearSignalSimple.js"></script>
<div class="modal fade" id="loadDataBase" tabindex="-1" role="dialog" aria-labelledby="modalLabelSB" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelSB">Obtener matriz configuración SIMPLE</h5>
                <input type="hidden" id="idDevice">
                <button type="button" class="close" data-dismiss="modal" aria-label="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- CODE -->
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-6">
                            <label class="form">Cliente</label>
                            <select class="form-control" id="listClientEV">
                                <option value="">Cliente</option>
                            </select>
                        </div>
                        <div class="col-lg-6">
                            <label class="form">Dispositivo</label>
                            <select class="form-control" id="listDeviceEV">
                                <option value="">Dispositivo</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-lg-12">
                        <div id="table-responsive">
                            <div id="loadingEvent"></div>
                        </div>
                    </div>
                </div> 
                                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-right">
                                <button id="btnAddEventsRD" class="btn-sm btn-dark">Obtener</button>
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
<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/LineaBase/app.baseline.js"></script>
<div class="modal fade" id="exLoadFiles" tabindex="-1" role="dialog" aria-labelledby="modalLabelLF" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabelLF">Cargar Archivos</h5>
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
                            <select class="form-control" id="listClient">
                                <option value="">Cliente</option>
                            </select>
                        </div>
                        <div class="col-lg-6">
                            <label class="form">Dispositivo</label>
                            <select class="form-control" id="listDevice">
                                <option value="">Dispositivo</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group"><hr></div>
                <div class="form-group">
                    <input type="file" id="fileUpload" class="form-control-sm"/>
                </div>
                <div class="form-group"><hr></div>
                <div class="form-group">
                    <div class="text-right">
                        <button class="btn btn-dark btn-sm" id="btnAddBaseLine">Añadir</button>
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
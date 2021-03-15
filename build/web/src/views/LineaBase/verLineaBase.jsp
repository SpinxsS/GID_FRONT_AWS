    <script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/LineaBase/app.baseline.consulta.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Linea Base</h4>
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
                    <div class="col-lg-6">
                        <div clas="form-group">
                            <div class="text-center">
                               <!-- <button type="button" class="btn btn-warning btn-sm text-center" data-toggle="modal" data-target="#exLoadFiles">
                                    Cargar Archivos
                                </button>-->
                            </div>
                            <!-- Modal -->
                           <!-- <div id="loadingFileSystem"></div>-->
                            <!-- End Modal -->
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div clas="form-group">
                            <div class="text-center">
                                <button type="button" class="btn btn-info btn-sm text-center" data-toggle="modal" data-target="#loadDataBase">
                                    Selección Linea Base
                                </button>
                            </div>
                            <!-- Modal -->
                            <div id="loadingBaseLine"></div>
                            <!-- End Modal -->
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <hr>
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="form">Cliente</label>
                                    <select class="form-control form-control-sm" id="cnlistClient">
                                        <option value="">Cliente</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="form-group">
                                    <label class="form">Dispositivo</label>
                                    <select class="form-control form-control-sm" id="cnlistDevice">
                                        <option value="">Dispositivo</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="text-right">
                                <button class="btn btn-dark btn-sm" id="btnACnLb">Consultar</button>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <div class="table-responsive">
                                        <div id="loadConsultTable"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




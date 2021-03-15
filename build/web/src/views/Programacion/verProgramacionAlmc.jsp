<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Programming/app.ver.programmingalmc.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Ver Programación Almacenada</h4>
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
                        <div class="form-group">
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
                        <div class="form-group">
                            <div class="text-center">
                                <button type="button" class="btn btn-info btn-sm text-center" data-toggle="modal" data-target="#loadDataBase">
                                   Obtener discriminadores
                                </button>
                            </div>
                            <!-- Modal -->
                            <div id="loadingDiscriminator"></div>
                            <!-- End Modal -->
                        </div>
                     </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <hr>
                            <div class="row">
                            <div class="col-lg-4">
                            <label class="form">Cliente</label>
                            <select class="form-control form-control-sm" id="listClient">
                                <option value="">Cliente</option>
                            </select>
                            </div>
                           
                            
                        <div class="col-lg-4">
                            <label class="form">Dispositivo</label>
                            <select class="form-control form-control-sm" id="listDevice">
                                <option value="">Dispositivo</option>
                            </select>
                        </div>
                        <div class="col-lg-4">
                            <label  class="form">Carga</label>
                            <Select  class="form-control form-control-sm" id="listCarga">
                                <option value="">Carga</option>
                            </Select>
                        </div>
                      </div>
                    </div>
                    </div>
                <div class="form-group"><div class="text-right"><hr><button class="btn btn-dark btn-sm" id="btnAddProgrammingAlmc">Consultar</button></div></div>
                <div class="form-group"><hr></div>
                <hr>
                <div class="form-group">
                    <div  class="table-responsive">
                        <div id="verProgramacionAlmc"></div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</div>
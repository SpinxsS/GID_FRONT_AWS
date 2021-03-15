<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Asociaciones/Dispositivos/app.asoc.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Asociación de dispositivo</h4>
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
                <div class="form-group">
                    <button type="button" class="btn btn-sm btn-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Asociar</button>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <div id="loadTableAsoc"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--Asociar-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Asociar Dispositivo y Cliente</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-lg-4">
                                            <label form="client">Cliente</label>
                                            <select class="form-control select2-single" id="listClient">
                                                <option value="">Seleccionar cliente</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-4">
                                            <label form="disp">Dispositivo</label>
                                            <select class="form-control" id="listDisp">
                                                <option value="">Seleccionar dispositivo</option>
                                            </select>
                                        </div>

                                        <div class="col-lg-4">
                                            <label form="cont">Controlador</label>
                                            <select class="form-control" id="listType">
                                                <option value="">Tipo de controlador</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label form="cont">Dirección IP</label>
                                        </div>
                                        <div class="col-lg-6">
                                             <input type="text" class="form-control form-control-sm" placeholder="Dirección IP" id="addIp">

                                        </div>
                                    </div>
                                </div>
                                <div class="form-group"><hr></div>
                                <div class="form-group">
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-dark" id="btnAddBaseline" data-dismiss="modal">Añadir</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
<!--Editar-->
<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group">
                                    <div class="row">
                                        <div class="col-lg-2">
                                            <div class="form-group">
                                                <div class="text-center">
                                                    <input type="hidden" id="clientEdit">
                                                    <div>Cliente</div>
                                                    <div  id="cccl"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="form-group">
                                                <div class="text-center">
                                                    <div>Dispositivo</div>
                                                    <div  id="ddvc"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5">
                                            <div class="form-group">
                                                <div class="text-center">
                                                    <div>Tipo Controlador</div>
                                                    <div  id="ttcc"></div>
                                                    <hr>
                                                    <select class="form-control" id="listTypeEdit">
                                                        <option value="">Seleccionar Tipo de Controlador</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-lg-4">
                                                        <div  id="ddip" class="text-right"></div>
                                                    </div>
                                                    <div class="col-lg-8">
                                                        <input type="text" class="form-control form-control-sm" placeholder="Dirección IP" id="editIp">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <div class="text-right">
                                                    <button id="btnEditAsoc" class="btn btn-dark" data-dismiss="modal">Editar</button>
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
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>

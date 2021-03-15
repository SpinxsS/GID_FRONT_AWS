<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Asociaciones/Salidas/app.asoc.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Asociación de Salidas</h4>
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
                                <div id="tableGeneralAsoc"></div>
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
                <h5 class="modal-title" id="exampleModalLabel">Asociar Salidas</h5>
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
                                        <div class="col-lg-6">
                                            <label class="form">Cliente</label>
                                            <select class="form-control form-control-sm form-group" id="listClient">
                                                <option value="">Cliente</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6">
                                            <label class="form">Dispositivo</label>
                                            <select class="form-control form-control-sm form-group" id="listDevice">
                                                <option value="">Dispositivo</option>
                                            </select>
                                        </div>
                                    </div>
                                     <div class="row">
                                       <div class="col-lg-6">
                                            <label class="form">Programación Exe</label>
                                            <select class="form-control form-control-sm form-group" id="listProgExe">
                                                <option value="">Prog Exe</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6">
                                            <label class="form">Salidas</label>
                                            <select class="form-control form-control-sm form-group" id="listOutPut">
                                                <option value="">Salidas</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                    <div class="row">
                                           <div class="col-lg-6">
                                            <label class="form">Potencia Gestionada</label>
                                            <select class="form-control form-control-sm form-group" id="listPotG">
                                                <option value="">Pot Gestion</option>
                                            </select>
                                        </div>
                                        <div class="col-lg-6">
                                            <label class="form">Potencía</label>
                                            <input id="pw" type="text" class="form-control form-control-sm form-group" placeholder="Potencía (Kw)" >
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <label class="form">Descripción</label>
                                            <textarea id="desc" placeholder="Descripción"  class="form-control form-control-sm form-group"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group"><hr></div>
                                <div class="form-group">
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-dark" id="btnAddSs" data-dismiss="modal">Añadir</button>
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
<!-- Asociar Edit -->
<div class="modal fade" id="ModalUpdAsocOut" tabindex="-1" role="dialog" aria-labelledby="modalLabelUC" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"> Modificar Salidas</h5>
                <input type="hidden" id="val">
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
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <div class="text-center">
                                                      <input type="hidden" id="clientEdit">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <div class="text-center">
                                                    <div>Dispositivo</div>
                                                    <div id="iddc"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <div class="text-center">
                                                    <div>Canal</div>
                                                    <div id="idcanal"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <div class="text-center">
                                                    <div>Salida</div>
                                                    <div id="idout"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <div class="text-center">
                                                    <div>Descripción</div>
                                                    <div id="iddesc"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-lg-4">
                                                        <div id="idpw" class="text-center"></div>
                                                    </div>
                                                    <div class="col-lg-8">
                                                        <input type="text" placeholder="Potencía (Kw)" class="form-control form-control-sm" id="Editpw">
                                                    </div>
                                                </div>
                                            </div>    
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <div class="text-right">
                                                     <button id="btnEditAsocOut" class="btn btn-dark" data-dismiss="modal">Editar</button>
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


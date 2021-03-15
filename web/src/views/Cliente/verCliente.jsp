<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Cliente/app.cliente.js"></script>
<script src="../../models/Configs/app.configs.table.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Cliente</h4>
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
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group">
                                <button type="button" class="btn btn-sm btn-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Crear Cliente</button>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <div id="loadTableClient"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--CREAR-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Crear Cliente</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label form="nameCC">Nombre del Cliente</label>
                            <input type="text" id="name" placeholder="Nombre del cliente" class="form-control" required focus>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label form="potCC">Potencia del cliente(kW)</label>
                            <input type="text" id="pot" placeholder="Potencia del cliente" class="form-control" required focus>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label form="id01CC">Identificador 1</label>
                            <input type="text" id="id01" placeholder="Identificador 1" class="form-control" required focus>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label form="id02CC">Identificador 2</label>
                            <input type="text" id="id02" placeholder="Identificador 2" class="form-control" required focus>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label form="descCC">Descripción de Cliente</label>
                            <textarea placeholder="Descripción" id="desc" class="form-control" required focu></textarea>
                        </div>
                    </div>
                </div>
                <div class="form-group"><hr></div>
                <div class="form-group">
                    <div class="text-right">
                        <button id="btnAddClient" class="btn btn-dark" data-dismiss="modal">Añadir</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
</div>
<!--MODIFICAR-->
<div class="modal fade" id="editClientModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Editar Cliente</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <input type="hidden" id="idEdit">
                            <label form="nameCC">Nombre del Cliente</label>
                            <input type="text" id="nameEdit" placeholder="Nombre del cliente" class="form-control" required focus>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label form="potCC">Potencia del cliente(kW)</label>
                            <input type="text" id="potEdit" placeholder="Potencia del cliente" class="form-control" required focus>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label form="id01CC">Identificador 1</label>
                            <input type="text" id="id01Edit" placeholder="Identificador 1" class="form-control" required focus>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="form-group">
                            <label form="id02CC">Identificador 2</label>
                            <input type="text" id="id02Edit" placeholder="Identificador 2" class="form-control" required focus>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="form-group">
                            <label form="descCC">Descripción de Cliente</label>
                            <textarea placeholder="Descripción" id="descEdit" class="form-control" required focus></textarea>
                        </div>
                        <div class="form-group">
                            <div class="text-right">
                                <button id="btnEditClient" class="btn btn-dark" data-dismiss="modal">Editar</button>
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

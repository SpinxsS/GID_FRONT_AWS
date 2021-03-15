<script  src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Programming/app.ver.comparte.prg.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Ejecutada vs Almacenada </h4>
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
                        <div class="col-lg-4">
                            <label for="form">Fecha Inicio</label>
                            <input type="date" class="form-control-sm form-control" id="fhi" >
                        </div>
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
                    </div>
                </div>
                 <div class="form-group"><div class="text-right"><button class="btn btn-dark btn-sm" id="btnCompProgramming">Consultar</button></div></div>
                <div class="form-group"><hr></div>
                <div class="form-group">
                    <div  class="table-responsive">
                        <div id="verComparacion"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
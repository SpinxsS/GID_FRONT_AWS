<script src="../../models/Configs/app.configs.read.js"></script>
<script src="../../models/Programming/app.crear.programming.js"></script>
<div class="row">
    <div class="col-lg-12 col-sm-12">
        <div class="form-group">
            <h4 class="text-center">Crear Programación</h4>
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
                        <!--<div class="col-lg-3">
                            <label class="form">Tipo dia</label>
                            <select class="form-control" id="listDay">
                                <option value="">Tipo de Dia</option>
                                <option value="Mo">Mo - Lunes</option>
                                <option value="Tu">Tu - Martes</option>
                                <option value="We">We - Miercoles</option>
                                <option value="Th">Th - Jueves</option>
                                <option value="Fr">Fr - Viernes</option>
                                <option value="Sa">Sa - Sabado</option>
                                <option value="Su">Su - Domingo</option>
                            </select>
                        </div>-->
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
                            <label class="form">Variable</label>
                            <select class="form-control form-control-sm" id="listVariable">
                                <option value="">Variable</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="form-group"><hr></div>
                <div class="form-group">
                    <input type="file" id="fileUpload" class="form-control-sm"/>
                </div>
                <div class="form-group"><hr></div>
                <div class="form-group"><div class="text-right"><button class="btn btn-dark btn-sm" id="btnAddProgramming">Añadir</button></div></div>
            </div>
        </div>
    </div>
</div>

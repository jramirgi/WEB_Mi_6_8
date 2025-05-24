var BaseURL = "http://itm2025mie68.runasp.net/";
jQuery(function () {
    $("#dvMenu").load("../Paginas/Menu.html");
    LlenarTablaEmpleados();
});

function LlenarTablaEmpleados() {
    let URL = BaseURL + "api/Empleados/ConsultarTodos";
    LlenarTablaXServiciosAuth(URL, "#tblEmpleados");
}
async function EjecutarComando(Metodo, Funcion) {
    let URL = BaseURL + "api/Empleados/" + Funcion;
    //Se construye el objeto empleado
    const empleado = new Empleado($("#txtDocumento").val(), $("#txtNombre").val(), $("#txtPrimerApellido").val(),
        $("#txtSegundoApellido").val(), $("#txtFechaNacimiento").val(), $("#txtTelefono").val(), $("#txtDireccion").val());
    //Invoca el comando para ejecutar
    const Rpta = await EjecutarComandoServicioRptaAuth(Metodo, URL, empleado);
    LlenarTablaEmpleados();
}
async function Consultar() {
    let Documento = $("#txtDocumento").val();
    let URL = BaseURL + "api/Empleados/ConsultarXDocumento?Documento=" + Documento;
    const empleado = await ConsultarServicioAuth(URL);
    if (empleado != null) {
        $("#txtNombre").val(empleado.Nombre);
        $("#txtPrimerApellido").val(empleado.PrimerApellido);
        $("#txtSegundoApellido").val(empleado.SegundoApellido);
        $("#txtDireccion").val(empleado.Direccion);
        $("#txtFechaNacimiento").val(empleado.FechaNacimiento.split('T')[0]);
        $("#txtTelefono").val(empleado.Telefono);
    }
    else {
        $("#dvMensaje").html("El empleado no está en la base de datos");
        $("#txtNombre").val("");
        $("#txtPrimerApellido").val("");
        $("#txtSegundoApellido").val("");
        $("#txtDireccion").val("");
        $("#txtFechaNacimiento").val("");
        $("#txtTelefono").val("");
    }
}
class Empleado {
    constructor(Documento, Nombre, PrimerApellido, SegundoApellido, FechaNacimiento, Telefono, Direccion) {
        this.Documento = Documento;
        this.Nombre = Nombre;
        this.PrimerApellido = PrimerApellido;
        this.SegundoApellido = SegundoApellido;
        this.Direccion = Direccion;
        this.Telefono = Telefono;
        this.FechaNacimiento = FechaNacimiento;
    }
}
var BaseURL = "http://itm2025mie68.runasp.net/";
jQuery(function () {
    $("#dvMenu").load("../Paginas/Menu.html");
    LlenarTablaClientes();
});
function LlenarTablaClientes() {
    let URL = BaseURL + "api/Clientes/ConsultarTodos";
    LlenarTablaXServiciosAuth(URL, "#tblClientes");
}
function LlenarTablaTelefonos() {
    let URL = BaseURL + "api/Clientes/ConsultarTodos";
    LlenarTablaXServiciosAuth(URL, "#tblTelefonos");
}
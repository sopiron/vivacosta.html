$(document).ready(function () {
    var login = ['s.piron', 't.cocaro', 'j.perez'];
    var passw = ['1234', '4567', 'abcd'];
    var nomape = ['Sofia Piron', 'Tiziana Cocaro', 'Juan Perez'];

    function loguearse() {
  
        var nombre = $("#username").val();
        var contrasenia = $("#password").val();
        var form = $("#miform");
        var parrafo = $("#errorsesion");

        if (nombre == "" || contrasenia == "") {
            parrafo.text("Usuario o contraseña incorrecta");
        } else {
            var encontrado = false;
            for (var i = 0; i < login.length; i++) {
                if (nombre == login[i]) {
                    encontrado = true;
                    if (contrasenia == passw[i]) {
                        sessionStorage.setItem("login", login[i]);
                        sessionStorage.setItem("nomape", nomape[i]);
                        window.location.href = "tp.html";
                    } else {
                        parrafo.text("Contraseña incorrecta");
                    }
                    break;
                }
            }
            if (!encontrado) {
                $("#errorsesion").text("No se ha encontrado el usuario");
                
            }
        }
    }

    $("#miform").submit(function(event) {
        event.preventDefault(); // Evita el envío del formulario
        loguearse();
    });
});


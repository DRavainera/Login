$(document).ready(function(){
    $("#btnSesion").click(function(){
        logueo();
    })

    function logueo(){
         var email = $("#email").val(); //email del usuario
         var pass = $("#pass").val(); //contraseña del usuario
         var hashPass = md5(pass); //cifrado md5 de la contraseña
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var resultado = this.responseText;
                $("#notificacion").removeClass("alert alert-danger");
                $("#notificacion").html("");
                //se verifica que codigo vino y se notifica
                if (resultado == '1'){
                    $("#notificacion").addClass("alert alert-danger");
                    $("#notificacion").html("Complete los campos.");
                }else if (resultado == '2'){
                    $("#notificacion").addClass("alert alert-danger");
                    $("#notificacion").html("La contraseña debe llevar en 4 y 10 caracteres.");
                }else if (resultado == '3'){
                    $("#notificacion").addClass("alert alert-danger");
                    $("#notificacion").html("Email y/o contraseña incorrecta.");
                }else if (resultado == '4'){
                    $("#notificacion").addClass("alert alert-danger");
                    $("#notificacion").html("El email debe llevar el patron \'usuario@dominio\'.");
                }else{
                    $("form").hide();
                    $("#notificacion").html("<h1>Bienvenido</h1>")
                }
            }
        };
        xhttp.open("GET", "PHP/login.php?email="+email+"&pass="+hashPass, true);
        xhttp.send();
    }
})
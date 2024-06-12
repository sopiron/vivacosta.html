var login=['s.piron','t.cocaro','j.perez',];
var passw = ['1234','4567','abcd'];
var nomape = ['Sofia Piron','Tiziana Cocaro','Juan Perez'];

function loguearse(){
var nombre= document.getElementById("username").value;
var contrasenia= document.getElementById("password").value;
var form = document.getElementById("form");
var parrafo= document.getElementById("");
if(nombre=="" || contrasenia==""){
	document.getElementById("errorsesion").innerHTML = "Usuario o contraseña incorrecta";
}
else
{
for (i=0;i < login.length; i++){
	if (nombre == login[i]){
		if (contrasenia == passw[i]){
		//alert(passw[i]);
			sessionStorage.setItem("login",login[i]);
			sessionStorage.setItem("nomape",nomape[i]);
			window.location.href="tp.html";
			break;
			}
		else{
			document.getElementById("errorsesion").innerHTML = "Contraseña incorrecta";
			break;
			}
		}

	}
	if (i == login.length){
		document.getElementById("error").innerHTML = "No se ha encontrado el usuario"
		
	}
}


}
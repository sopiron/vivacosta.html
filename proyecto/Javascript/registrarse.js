
function registrarse(){
var nomape= document.getElementById("nomape").value;
var login= document.getElementById("username").value;
var mail = document.getElementById("mail").value;
var contrasenia=document.getElementById("password").value;
var contrasenia2=document.getElementById("password2").value;
var flag=0
var mensaje = "Algunos de los campos estan vacios o contienen errores: \n"

if(nomape == "" || login == "" || mail == "" || contrasenia == "" || contrasenia2 == ""){
	document.getElementById("errorregistrarse").innerHTML = mensaje;
}
if (validarEmail(mail) == false){
flag = 1;
mensaje += "*Email\n";

}
if (validarUsername(login) == false){
flag = 1;
mensaje += "*Nombre de ususario\n" ;

}
if (validarContra(contrasenia) == false){
flag = 1;
mensaje += "*Contraseña\n" + "debe contaner por lo menos una mayuscula, un numero y 6-16 caracteres";

}
if(flag == 1){
document.getElementById("errorregistrarse").innerHTML = mensaje;

}
else{
sessionStorage.setItem("nomape",nomape);
sessionStorage.setItem("login", login);
window.location.href="tp.html";



}
}


function validarEmail(mail) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(mail);
}
function validarUsername(login){
 const loginRegex = /^[0-9A-Za-z]{6,16}$/;
 return loginRegex.test(login);

}
function validarContra(contrasenia,contrasenia2){
const contraRegex = /^[0-9A-Za-z]{6,16}$/;
return contraRegex.test(contrasenia);

}


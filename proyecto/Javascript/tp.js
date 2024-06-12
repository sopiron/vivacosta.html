

//sessionStorage.setItem("nombre","Juan");
//sessionStorage.setItem("nombre", "");

		function desloguearse(){
			sessionStorage.setItem("login","");
			sessionStorage.setItem("nomape","");
			window.location.href="tp.html";

				
			}

window.onload = function() {
	var data = sessionStorage.getItem("nomape");
	if (data == null){
	data="";
	
	}
	var botones="<a href= '../html/iniciosesion.html'><button id= 'uno' onclick='' > Iniciar sesion </button></a><a href='../html/registrarse.html'><button id='uno' onclick=''> Registrate </button></a>";
	var logout="<button id= 'uno' onclick='desloguearse()'> Logout</button>";

	//alert(8);
	if(data==""){
		//alert(8)	
			document.getElementById("botonera").innerHTML = botones;
		//alert(data);
		//alert(botones);
	}
	else
	{
		document.getElementById("botonera").innerHTML = "<label id='saludo'>Hola, " + data + "</label>" + logout;
	
		//document.getElementById("botonera").innerHTML="<button id= 'uno' onclick='' > Iniciar sesion </button><button id='uno'> Registrate </button>";
	//alert(data);
	}
	


}

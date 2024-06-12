const ubicacion =['pinamar','pinamar','pinamar','mar del plata','mar del plata','mar del plata'];
const urls = ['../html/dep1pina.html','../html/dep2pina.html','../html/dep3pina','../html/dep1mdq.html','../html/dep2mdq.html','../html/dep3mdq.html'];
const departamento = ['dep1pina','dep2pina','dep3pina','dep1mdq','dep2mdq','dep3mdq'];
const imagenes = ['../images/dep1pinalargo.png','../images/dep2pinalargo.png','../images/dep3pinalargo.png','../images/dep1mdqlargo.png','../images/dep2mdqlargo.png','../images/dep3mdqlargo.png'];
const divs = ['primero','segundo','tercero','cuarto','quinto','sexto'];


//alert(alojamientos);
window.onload = function() {
var alojamientos="<div class='gallery'>";
const searchParams = new URLSearchParams(window.location.search.toLowerCase());
var busqueda=searchParams.get('search'); // price_descending
var mensaje= "<label>No se han encontrados resultados para su busqueda</label>";
 for(i=0;i<6;i++)
 {
 	//<alert(ubicacion[i].includes(busqueda));
 	if(ubicacion[i].includes(busqueda)){
 	
 	alojamientos = alojamientos + "<div id=" + divs[i] + "><a href='" + urls[i] + "'><img id='" + departamento[i] + "' height= '200px' width='1000px' src=" + imagenes[i] + "></a><a href=" + urls[i] + "><button id='disponibilidad'>Ver disponibilidad</button></div>";
 	}
 	else{
 	document.getElementById("resultados").innerHTML= mensaje ;
 	
 	}
}
alojamientos=alojamientos + "</div>";
//alert(6);
//alert(alojamientos);		
document.getElementById("resultados").innerHTML = alojamientos;
//alert(9);

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
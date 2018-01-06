
var map;

if (navigator.geolocation){	
	var guardarlat, guardarlng;

	navigator.geolocation.getCurrentPosition(function (position){

		guardarlat= position.coords.latitude;
		guardarlng= position.coords.longitude;
		//console.log("localizacion: latitud: "+guardarlat + ", longitud: " +guardarlng)
		var mapContainer= document.getElementById('map');

		map= new google.maps.Map(mapContainer,{
			center: {lat:guardarlat, lng:guardarlng},
			zoom:5
		});
		infoWindow = new google.maps.InfoWindow({map: map});
    	var pos = {lat: guardarlat, lng: guardarlng};
	    map.setCenter(pos);// mapa se ubique en las localizaciones del usuario que se capturo
		map.setZoom(16);//aumentar el zoom del mapa
		infoWindow.setPosition(pos);//el mapa se citue en la ubicacion del usuario
		infoWindow.setContent("Hola! Ubicacion Encontrada");//titulo de ubicacion encontrada
		
		});               
	
}else{
	alert("Tu navegador no soporta geolocalizacion ");
}






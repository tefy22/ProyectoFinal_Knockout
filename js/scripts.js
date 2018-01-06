
function viewModel() {
	var self= this;
	//variables de contactenos
	self.nombreC= ko.observable("");
	self.correo= ko.observable("");
	self.telefono= ko.observable("");
	self.fecha= ko.observable(new Date());
	self.comentario= ko.observable("");
	//variables de compras
	self.canti= ko.observable(0);
	self.selectProducto= ko.observable();
	self.compras= ko.observableArray([]);
	self.nProducto= ko.observableArray(["ASUS ZenBook UX390","Lenovo Premium Built High High Performance 15.6",
		"Lenovo Ideapad 15.6","Hp Alto Rendimiento","Lenovo Thinkpad Edge E470","Lenovo Chromebook","Hp 15.6 Hd High Performance Laptop",
		"Hp X360","Asus X541uj-gq036","Acer Aspire R14","Hp Specter X2 Pantalla Táctil Wuxga","Hp Flyer Silver","Macbook Pro 2017"]);
	//variables de listado de productos
	self.productos= ko.observableArray([
		{codigo:101, nombre:"ASUS ZenBook UX390", pulgadas:'13.3', precio:5435000},
		{codigo:102, nombre:"Lenovo Premium Built High High Performance 15.6", pulgadas:'14', precio:1363200},
		{codigo:103, nombre:"Lenovo Ideapad 15.6", pulgadas:'14', precio:1518000},
		{codigo:104, nombre:"Hp Alto Rendimiento", pulgadas:'14', precio:2432000},
		{codigo:105, nombre:"Lenovo Thinkpad Edge E470", pulgadas:'14', precio:5887700},
		{codigo:106, nombre:"Lenovo Chromebook", pulgadas:'14', precio:1008500},
		{codigo:107, nombre:"Hp 15.6 Hd High Performance Laptop", pulgadas:'15.6', precio:1346700},
		{codigo:108, nombre:"Hp X360", pulgadas:'15.6', precio:2936300},
		{codigo:109, nombre:"Asus X541uj-gq036", pulgadas:'15.6', precio:1774888},
		{codigo:110, nombre:"Acer Aspire R14", pulgadas:'14', precio:2732700},
		{codigo:111, nombre:"Hp Specter X2 Pantalla Táctil Wuxga", pulgadas:'14', precio:2915600},
		{codigo:112, nombre:"Hp Flyer Silver", pulgadas:'15.6', precio:1585900},
		{codigo:113, nombre:"Macbook Pro 2017", pulgadas:'15.4', precio:9519990}
	]);
	//funcion para agregar un contacto -contactenos-
	self.agregarContacto= function(){
		alert('Mensaje Enviado con Exito!!');
	}
	//funciones -compras-		
	self.agregarProducto= function(){
		var p= $("#producto").val();
		var pp= $("#precio").val();
		var c= $("#cantidad").val();
		var i= $("#iden").val();
		var n= $("#nombre").val();
		var t;
		t= pp*c;

		alert('Compra Registrada!');
		self.compras.push({iden:i, cliente:n, nombreP:p, precio:pp, cant:c, total:t});
	}
	self.quitarProducto= function(elemento){
		self.compras.remove(elemento);
	}
	self.imprimir= function(){
		window.print();
	}
	self.agregarPrecio= function(){
		var precio="";
		var pr= $("#producto").val();
		switch(pr){
			case "ASUS ZenBook UX390":
				precio=5435000;
				break;

			case "Lenovo Premium Built High High Performance 15.6":
				precio=1363200;
				break;

			case "Lenovo Ideapad 15.6":
				precio=518000;
				break;

			case "Hp Alto Rendimiento":
				precio=2432000;
				break;

			case "Lenovo Thinkpad Edge E470":
				precio=5887700;
				break;

			case "Lenovo Chromebook":
				precio=1008500;
				break;

			case "Hp 15.6 Hd High Performance Laptop":
				precio=1346700;
				break;

			case "Hp X360":
				precio=2936300;
				break;

			case "Asus X541uj-gq036":
				precio=1774888;
				break;

			case "Acer Aspire R14":
				precio=2732700;
				break;

			case "Hp Specter X2 Pantalla Táctil Wuxga":
				precio=2915600;
				break;

			case "Hp Flyer Silver":
				precio=1585900;
				break;

			case "Macbook Pro 2017":
				precio=9519990;
				break;
		}
		$('#precio').val(precio);
	}
}

$(document).ready(function () {
	ko.applyBindings(new viewModel());
});
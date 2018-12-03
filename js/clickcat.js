	
	var model = {
		currentCat: null,
		
		cats : [
		
		{
			click : 0,
			nombre: "Misho",
			src:"cat.png"
		},
		{
			click : 0,
			nombre: "Mino",
			src:"cat_two.jpg"
		},
		{
			click : 0,
			nombre : "Shon",
			src : "cat_three.jpg"
		},
		{
			click : 0,
			nombre : "Mico",
			src : "cat_four.jpg"
		},
		{
			click : 0,
			nombre : "Rishu",
			src : "cat_five.jpg"
		}
    ]
		
	}
		
    var octopus = {

		init : function () {

			listaView.init();

		},
		
		clickUp: function (index){
			return model.cats[index].click  += 1;
		},
		
		getCats: function (){
			return model.cats;
		},
		
		setCurrentCat(index){
			return model.currentCat = index;
		},
		
		getCurrentCat(){
			return model.currentCat;
		}
		
	}
	
	var listaView = {
		
		update : function(){
			var lista = document.getElementById('listaGatos');
			var gatoNombre = document.getElementById('nombreGato');
			var clickGato = document.getElementById('clicks');
			var Imagen = document.getElementById('gatoImagen');
			var elemento;
			var gatos = octopus.getCats();
			var x = 0;
			var evento = document.querySelectorAll(".evento");
			
			gatoNombre.innerHTML = octopus.getCats()[octopus.getCurrentCat()].nombre;
			clickGato.innerHTML = octopus.getCats()[octopus.getCurrentCat()].click;
			Imagen.setAttribute("src", octopus.getCats()[octopus.getCurrentCat()].src);
			
			
			for(x; x < gatos.length; x++){
				
				evento[x].innerHTML = gatos[x].nombre;
				
			}
			
		},
		
		init : function(){
			var lista = document.getElementById('listaGatos');
			var Imagen = document.getElementById('gatoImagen');
			var gatoNombre = document.getElementById('nombreGato');
			var clickGato = document.getElementById('clicks');
				
			var elemento;
			var gatos = octopus.getCats();
			var x = 0;

			for(x; x < gatos.length; x++){
				elemento = document.createElement('li');
				elemento.setAttribute("class", "evento");
				
				lista.appendChild(elemento);
				
				clickImage = document.querySelector('#gatoImagen');
				
				var textEle = document.createTextNode(gatos[x].nombre);
				elemento.appendChild(textEle);
				
				var evento = document.querySelectorAll(".evento");
				
						
					(function(id){
						evento[id].addEventListener("click", function() {

							gatoNombre.innerHTML = gatos[id].nombre;
							Imagen.setAttribute("src", gatos[id].src);
							octopus.setCurrentCat(id);
							clickGato.innerHTML = gatos[id].click;
							document.getElementById("deleteElement1").value = "";
							document.getElementById("deleteElement2").value = "";
							document.getElementById("deleteElement3").value = "";
							
						});
					}(x));
			}
			
			clickImage.addEventListener("click", function() {	
					
					clickGato.innerHTML = octopus.clickUp(octopus.getCurrentCat());
					
			});
			
			document.getElementById("save1").addEventListener("click", function() {
				
				if(document.getElementById("deleteElement1").value === ""){
					alert("campo nombre vacio!");
					
					//document.getElementById("deleteElement1").value;
				}else{
					octopus.getCats()[octopus.getCurrentCat()].nombre = document.getElementById("deleteElement1").value;

					listaView.update();

				}
			});
			
			
			document.getElementById("save2").addEventListener("click", function() {
				
				if(document.getElementById("deleteElement2").value === ""){
					alert("campo nombre vacio!");
					
					//document.getElementById("deleteElement1").value;
				}else{
					octopus.getCats()[octopus.getCurrentCat()].src = document.getElementById("deleteElement2").value;
					//alert(octopus.getCats()[octopus.getCurrentCat()].src);
					listaView.update();

				}
			});
			
			
			document.getElementById("save3").addEventListener("click", function() {
				
				if(document.getElementById("deleteElement3").value === ""){
					alert("campo nombre vacio!");
					
					//document.getElementById("deleteElement1").value;
				}else{
					octopus.getCats()[octopus.getCurrentCat()].click = parseInt(document.getElementById("deleteElement3").value);
					listaView.update();

				}
			});
			
			
	}
}



octopus.init();


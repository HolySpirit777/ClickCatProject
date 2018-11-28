	
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
		
		init : function(){
			var lista = document.getElementById('listaGatos');
			var gatoNombre = document.getElementById('nombreGato');
			var Imagen = document.getElementById('gatoImagen');
			var clickGato = document.getElementById('clicks');
				
			var elemento;
			var gatos = octopus.getCats();
			var x = 0;

			for(x; x < gatos.length; x++){
				elemento = document.createElement('li');
				gatoImagen = document.createElement('img');
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
							
						});
					}(x));
			}
			
			clickImage.addEventListener("click", function() {	
					
					clickGato.innerHTML = octopus.clickUp(octopus.getCurrentCat());
					
			});
			
			
	}
}



octopus.init();
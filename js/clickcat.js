	
	var model = {
		
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
			model.cats[x].click  += 1;
		},
		
		getCats: function (){
			return model.cats;
		}
		
		
	}
	
	var listaView = {
		
		init : function(){
			var lista = document.getElementById('listaGatos');

			var elemento;
			var gatos = octopus.getCats();
			console.log(gatos.length);

			for(var x = 0; x < gatos.length; x++){
				elemento = document.createElement('li');
				var textEle = document.createTextNode(gatos[x].nombre);
				elemento.appendChild(textEle);
				console.log(elemento);
				elemento
				lista.appendChild(elemento);
			}
	}
}

octopus.init();
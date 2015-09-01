function Lista(clave){
	
	this.clave = clave;

	this.agregarActividad = function(actividad){
		
		if(this.validarNavegador()){

			if(localStorage.getItem(this.clave)){

				var actividades = JSON.parse(localStorage.getItem(this.clave));
			}
			else{

				var actividades=[];	
			}

			actividades.push(actividad);

			localStorage.setItem(this.clave,JSON.stringify(actividades));
			
			return true;
		}

		return false;
	}

	this.obtenerActividades = function(){
	
		if(localStorage.getItem(this.clave) !== "undefined"){
	
				return JSON.parse(localStorage.getItem(this.clave));
			}

		return null;
	}

	this.validarNavegador = function(){

		if(typeof(Storage)!=="undefined") 
			return true;
		return false;
	}
}
 function VisitarResultados() {
            window.open("https://julianbejarano.000webhostapp.com/getscores.php",
                    "_blank").focus;
					

}
       
function salir(){
 // Open the new window 
            // with the URL replacing the
            // current page using the
            // _self value
            let new_window =
                open(location, '_self');
  
            // Close this window
            new_window.close();
  			window.close();
            return true;
}

 function VisitarAutor() {
            window.open("https://www.julianbejarano.com/",
                    "_blank").focus;
					

}


const scriptsInEvents = {

		async Escena1Events_Event6_Act1(runtime, localVars)
		{
			alert("ME COMPROMETO, Los 1,50 metros, que salvan a los ciclistas. Si usted va conduciendo y hay un ciclista en frente, no debe acercar su vehículo a más de 1,50 metros de distancia; y si lo va a adelantar, ese es el espacio mínimo que debe guardar al momento de sobrepasarlo")
		},

		async Escena1Events_Event7_Act2(runtime, localVars)
		{
			alert("¡ME COMPROMETO! CUIDADO PEATON. Mire primero hacia la izquierda y luego hacia la derecha. Al empezar a cruzar, vuelva a hacer lo mismo. Cuando cambie de carril, mire hacia la derecha y luego a la izquierda y termine de cruzar.")
		},

		async Escena1Events_Event8_Act1(runtime, localVars)
		{
			alert("¡ME COMPROMETO!. No manejare alcoholizado- no chateare al manejar- dos ruedas usa casco, cuatro ruedas usa cinturón- primero el peatón, cédele el paso.")
		},

		async Escena1Events_Event13_Act8(runtime, localVars)
		{
			alert("¡ME COMPROMETO!. De acuerdo con datos de la OMS el aumento de la velocidad promedio está directamente relacionado con la probabilidad de que ocurra un accidente de tránsito y con la gravedad de sus consecuencias.")
		},

		async Escena1Events_Event17_Act1(runtime, localVars)
		{
			alert("¡ME COMPROMETO!. ROJO: Detente. AMARILLO: Se precavido próximamente la luz cambiara. VERDE: Avanza, vía libre no excedas la velocidad permitida. Debes esperar a que el semaforo esté en verde");
		},

		async Escena1Events_Event23(runtime, localVars)
		{
			
		},

		async ["01-Introevents_Event6_Act1"](runtime, localVars)
		{
			VisitarAutor();
		},

		async ["02-InstructionEvents_Event3_Act1"](runtime, localVars)
		{
			alert("Debe completar todos los datos para continuar")
		},

		async ["04-Finalevents_Event2_Act1"](runtime, localVars)
		{
			salir();
		},

		async ["04-Finalevents_Event4_Act2"](runtime, localVars)
		{
			alert("Para este paso asegurate de contar con una conexion a internet estable ya sea por wifi o datos");
		},

		async ["04-Finalevents_Event4_Act14"](runtime, localVars)
		{
			alert("Tus datos fueron publicados exitosamente.");
		},

		async ["04-Finalevents_Event5_Act1"](runtime, localVars)
		{
			VisitarResultados();
		},

		async ["04-Finalevents_Event6_Act1"](runtime, localVars)
		{
			VisitarAutor();
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;


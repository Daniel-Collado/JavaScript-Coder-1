
let arrayBandasConfirmadas = ["TOOL", "Dag Nasty", "ALL", "Eterna Inocencia", "Deftones"];

    let edad = parseInt(prompt("Bienvenido a Recitales.com.ar, el mejor sitio de entradas on-line del condado.\n Este sitio es para mayores de 18 años, ingrese su edad:"));
    
    if (edad >= 18) {
        let nombre = prompt("Ingrese su nombre y apellido");
        
        if (nombre !== null) {
        if (confirm("Hola " + nombre + ", desea ver el listado de bandas confirmadas para 2025?")) {
            alert(arrayBandasConfirmadas.join("\n"));
        }
        
        function ingreseBanda() {
            const bandasSugeridas = [];
            let bandaIngresada;
            
            do {
            bandaIngresada = prompt("Qué bandas te gustaría ver en vivo en 2025?\n Ingresá tu respuesta");
            
            if (bandaIngresada !== null) {
                if (!bandasSugeridas.includes(bandaIngresada)) {
                bandasSugeridas.push(bandaIngresada);
                
                let respuestaUsuario = confirm("Esperamos el año entrante poder traer " + bandaIngresada + " a la Argentina. Gracias por tu respuesta, " + nombre + ".\n Desea ingresar otra banda?");
                if(!respuestaUsuario){
                alert("Gracias por tu aporte. Las bandas que sugeriste son:\n" + bandasSugeridas.join("\n"));
                break;
                }
                } else {
                alert("Ya ingresaste ese nombre");
                }
            }
            } while (bandaIngresada !== null);
            
            return bandasSugeridas;
        }
        
        let bandasSugeridas = ingreseBanda();
        console.log(bandasSugeridas);
        } else {
        alert("Debe ingresar un nombre");
        }
    } else {
        alert("Te esperamos cuando cumplas 18!");
    }
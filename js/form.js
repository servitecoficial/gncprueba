document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "541160548658";

  let cliente = document.querySelector("#cliente").value;
  let fecha = document.querySelector("#fecha").value;
  let hora = document.querySelector("#hora").value;
  let empleado = document.querySelector("#empleado").value;
  let dispositivo = document.querySelector("#dispositivo").value;
  

  let modelo = document.querySelector("#modelo").value;
  let imei = document.querySelector("#imei").value;
  
  

  
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=541160548658&text=
		*_GNC_*%0A
		*INFORMACIÓN DEL CLIENTE.*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A

    *Servicio a realizar*%0A
    ${dispositivo}%0A

    *Modelo*%0A
    ${empleado}%0A

    *Información del vehículo*%0A
		${modelo}%0A

    *Información adicional*%0A
		${imei}%0A

		*Indica la fecha de tu reserva*%0A
		${fecha}%0A
		*Indica la hora de tu reserva*%0A
		${hora}%0A
	
    `;

   
  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado la información, ${cliente}`;

  window.open(url);
});

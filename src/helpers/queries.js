const urlMensajes = import.meta.env.VITE_API_MENSAJES;
console.log(urlMensajes);

export const crearMensaje = async (mensajeNuevo) => {
  try {
    const respuesta = await fetch(urlMensajes, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mensajeNuevo),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
    return null;
  }
};

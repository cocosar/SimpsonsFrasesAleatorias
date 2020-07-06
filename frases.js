

const frases = [
  "Marge tienes muchas amigas, están Lisa.... la estufa...",
  "No estaba dormido...estaba EBRIO!!!",
  "Noo! Si marge se casa con artie yo no nacere!",
  "Fue un accidente de pancha",
  "Destruiste el auto de Hitler, que te ha hecho él a ti?",
  "Ay, Homero, eres una bala perdida",
  "El nacimiento de Lisa. ¿Una Simpson de más?",
  "Si Bart puede llamarse el Barto entonces yo sere el Homo",
  "Momento, esta conversacion tiene tintes romanticos",
  "Me lo llevo!!!..No lo tiene en rubio?",
  "Comprenlo Muchachos, No Me Hice Rico Firmando Cheques",
  "Me quiero volver chango. Mi auto.",
  "La comida va aqui. Claro que sí.",
  "Alejate de aqui satanas, que llena de niños estas",
  "Tananananananana batman!, digo lider!!",
  "Muy claro Lisa o muy oscuuuro",
  "Cierra la puerta q se mete el chiflon",
  "Dame una rebanada, no???",
  "El universo es muy confuso realmente",
  "Alguien huele agrio... ¡Ay, soy yo!",
  "Mmmmmm... sacrilegioso",
  "20 dolares compran mucho mani",
  "Los intereses te llenan de amigos",
  "Me Visto Solo",
  "Jebus! Alá! Buda! los amo a todos!",
  "Computadora mata a flanders",
  "Dios es mi personaje de ficcion favorito",
  "Todo aparece cuando dejas de buscarlo",
  "Escuela de payasos.. ESO NO SE COME!!",
  "No se rian de mi, pueden tener un hijo igual!",
  "Soy la reina de los lagartos!!!!",
  "Bonjourrrrrrrrrrrr... pedazo de zoquetes!",
  "Afeito mis hombros... y todo mi cuerpo",
  "un poco de crema en la chatita?",
  "Callate, o te apuñalo con un hisopo!",
  "Mmm croquetas sin procesar...!",
  "Cerveza... una solucion temporal",
  "Los veré en el infierno... desde el cielo",
  "Computadora Mata a Flanders..!!",
  "Nota mental: la niña sabe demasiado",
  "Mono significa uno, riel significa ... riel",
  "¡Que te comas la lata! ¡Ya, hazme caso!",
  "Solo un poco de lodo, todavía sirve todavía sirve!",
  "¿Yo reprobar aspañol? ¡Ser amposible!",
  "Bart, corre a buscar a Lassie... digo, a Lisa",
  "Vas a morir moe, wiiiiiiiiiiiiiiiiii",
];

const fraseAleatoria = () => {
    
    let cantidadDeFrases = frases.length;
    let numeroAleatorio = Math.floor(Math.random() * (cantidadDeFrases - 1)); 
    return frases[numeroAleatorio];
};

const modificarFrase = () => {

    let cuadroDeFrases = document.getElementById('frase');
    cuadroDeFrases.innerHTML = `<p>${fraseAleatoria()}</p>`;
    return "Frase Cambiada"
};

console.log(modificarFrase());
modificarFrase();
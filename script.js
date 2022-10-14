/* 
_Crea un nuevo HTML y JS, vincula ambos archivos.
_Crea mínimo 10 variables que te describan o hagan referencia a tus datos, por ejemplo "nombre".
_Defina las variables creadas como var o const de acuerdo a como consideres conveniente.
_Colocar en un comentario el tipo de dato de esa variable.
_Al menos 1 de las variables debe ser un objeto con un mínimo de 5 propiedades y 1 debe ser array.
*/

//data type: string
var nombre = "Cristian";

//data type: string
var apellido = "Mansilla";

//data type: string
const equipoDeFutbol = "Boca Juniors";

//data type: string
var colorFavorito = "Azul";

//data type: boolean
var tieneHijos = false;

//data type: array
var numerosQuini6 = [00, 10, 20, 25, 30, 40, 45];

//data type: object
var queAprendiEnIniciatec = {
    tecnologias: {
        HTML: {
            nombre: "HyperText Markup Language",
            etiquetas: ["h1", "h6", "selected", "option", "form", "input", "etc."],
        },
        CSS: {
            nombre: "Cascading Style Sheets",
            propiedades: ["bakground", "position", "display", "animation", "etc."],
        },
        JS: {
            nombre: "JavaScript",
            contenido: ["variables", "tipos de datos", "operadores", "estructuras de control"],
        },
    },
    metodologias:{
        SCRUM: {
            definicion: "Es un marco que permite el trabajo colaborativo entre equipos",
        },
    },
    proyectos:{
        IniciaFood: {
            descripción: "Página Web de un restaurante autosustentable",
            equipo: ["Brisa", "Cristian", "Daiana", "Mauricio"]
        }
    }
}

//data type: object
var vehiculo = {
    moto: {
        marca: "Yamaha",
        modelo: "YBR125",
        color: "Azul"
    }
}

//data type: boolean
var tieneHermanos = true;

//data type: string
var pc = "laptop";

//data type: number
var numeroCamiseta = 11;

console.log(`${nombre} ${apellido} tiene como color favorito al ${colorFavorito} y es hincha de: ${equipoDeFutbol}.`);
console.log(`Se dirige en su ${vehiculo.moto.modelo} a jugar el quini 6 a los números: ${numerosQuini6}`);
console.log(`Todas las tardes de lunes a viernes se conecta con su ${pc} a las clases de IniciaTec. Lo que aprendió hasta el momento es: ${queAprendiEnIniciatec.tecnologias.HTML.nombre} (HTML): las siguientes etiquetas - ${queAprendiEnIniciatec.tecnologias.HTML.etiquetas} ${queAprendiEnIniciatec.tecnologias.CSS.nombre} (CSS): las siguientes propiedades - ${queAprendiEnIniciatec.tecnologias.CSS.propiedades} ${queAprendiEnIniciatec.tecnologias.JS.nombre} (JS): los siguientes contenidos - ${queAprendiEnIniciatec.tecnologias.JS.contenido}.`);
console.log(`En IniciaTec desarrolló: ${queAprendiEnIniciatec.proyectos.IniciaFood.descripción}, de nombre IniciaFood. Junto al equipo Rocket-Dev que se componia de: ${queAprendiEnIniciatec.proyectos.IniciaFood.equipo}. Para lograrlo tuvieron que utilizar la metodología SCRUM: ${queAprendiEnIniciatec.metodologias.SCRUM.definicion}.`);
console.log(`En una entrevista de trabajo le preguntaron si tenia hijos y él respondio: ${tieneHijos}. Luego le preguntaron si tenia hermanos a lo que contestó: ${tieneHermanos}.`);
console.log(`El domingo pasado fue a jugar al fútbol, le dieron la camiseta ${numeroCamiseta} porque juega de extremo y fue decisivo para la victoria de su equipo con 1 gol y dos asistencias.`);


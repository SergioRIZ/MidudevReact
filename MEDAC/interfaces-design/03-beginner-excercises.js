let nombre = "Sergio"

console.log (nombre === "Sergio" ? "Sergio" : "El nombre no es Sergio")

let username = "pepelapuerta"

let pass = "123456789"

console.log(username === "pepelapuerta" && pass === "123456789" ? "El usuario y contraseña es correcto" : "El usuario o contraseña no es correcto")

let number = 0

if (number>=0) {
    console.log("El número es positivo")
} else if (number==0) {
    console.log("El número es igual a cero")
} else {
    console.log("El número es negativo")
}

let age = 20

const legal = 18

if (age >= 18) {
    console.log("Puedes votar")
} else {
    console.log(`Te faltan ${legal - age} años para poder votar`)
}

let edad = 19

const month = "February";

if (["december", "january", "february"].includes(month.toLowerCase())){

    console.log("This is winter");

} else if(["march", "april", "may"].includes(month.toLowerCase())){

    console.log("This is spring");

} else if(["june", "july", "august"].includes(month.toLowerCase())){

    console.log("This is summer");

} else if(["september", "october", "november"].includes(month.toLowerCase())){

    console.log("This is autumn");

} else{

    console.log("Invalid month");

}

const year = 2024

if (["January", "March", "May", "July", "August", "October", "December"].includes(month)) {
    console.log(`${month} tiene 31 dias`)
} else if (["April", "June", "September", "November"].includes(month)){
    console.log(`${month} tiene 30 días`)
} else if (month === "February") {
    if (year % 4 === 0 && (year % 100!== 0 || year % 400 === 0)) {
        console.log(`${month} tiene 29 días`)
    } else {
        console.log(`${month} tiene 28 días`)
    }

} else {
    console.log("Invalid month")
}

const saludo = "uk"

switch (saludo) {
    case "es":
        console.log("Hola");
        break;
    case "fr":
        console.log("Bonjour");
        break;
    case "ge":
        console.log("Guten Tag");
        break;
    case "ger":
        console.log("Hallo");
        break;
    case "it":
        console.log("Ciao");
        break;
    case "uk":
        console.log("Zdravstvuyte");
        break;
    case "fra":
        console.log("Salut");
        break;
    default:
        console.log("Desconocido");
        break;
}
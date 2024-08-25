let dia = 7;

let semana;

switch (true) {
    case (dia === 1):
        semana = "Hoy es LUNES";
        break;
        case (dia === 2):
        semana = "Hoy es MARTES";
        break;
        case (dia === 3):
        semana = "Hoy es MIERCOLES";
        break;
        case (dia === 4):
        semana = "Hoy es JUEVES";
        break;
        case (dia === 5):
        semana = "Hoy es VIERNES";
        break;
        case (dia === 6):
        semana = "Hoy es SABADO";
        break;
        case (dia === 7):
        semana = "Hoy es DOMINGO";
        break;
        default:
        semana = "Día invalido";
        break
}

console.log(semana);
//                                          BUSCAR ELEMENTOS DENTRO DEL TURNERO

/* const turnero = [
    {id: 1 , nombre:  "Juan", apellido: "Rodriguez" , turno: 1},
    {id: 2 , nombre:  "Micaela", apellido: "Marel" , turno: 2},
    {id: 3 , nombre:  "Ezequiel", apellido: "Berlanda" , turno: 3},
    {id: 4 , nombre:  "Micaela", apellido: "Machusen" , turno: 4},
    {id: 5 , nombre:  "Esteban", apellido: "Abregu" , turno: 6},
] */

/* let nombre = "Micaela";                            BUSCAR POR NOMBRE ESPECIFICO

const nroTurno = turnero.find (item => item.nombre === nombre);

    if(nroTurno){
    let mensaje = `${nombre} tiene asignado el turno ${nroTurno.turno}`;
    console.log(mensaje);
    }else{
    mensaje = `${nombre} NO tiene un turno asignado`;
      console.log(mensaje);
    } */

/* let nombre = "Mica";                               BUSCAR POR PARTE, RETORNA TODOS LOS QUE CUMPLAN LA CONDICION

const nroTurno = turnero.filter (item => item.nombre.includes(nombre));

nroTurno.forEach(item => {
    if(nroTurno){
        let mensaje = `${nombre} ${item.apellido} tiene asignado el turno ${item.turno}`;
        console.log(mensaje);
        }else{
        mensaje = `${nombre} NO tiene un turno asignado`;
          console.log(mensaje);
        }
}) */

/* let contenedor = document.getElementById("pacientes");           MOSTRAR LOS PACIENTES ANOTADOS

turnero.forEach ((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <h2>ID: ${item.id}</h2>
    <p>Nombre del paciente: ${item.nombre}</p>
    <p>Apellido del paciente: ${item.apellido}</p>
    <p>Nro Turno: ${item.turno} </p>
    <hr />
    `;

    contenedor.append(div);
}); */

/* function guardarPaciente (){
  let nombre = document.getElementById("nombreForm").value
  alert(nombre)
} */

function guardarPaciente(nombre, apellido, documento, email, direccion, telefono, nacimiento, obrasocial, servicio, horario, abonado, pago){
  let nombreP = document.getElementById("nombreForm").value;
  this.nombreP = nombre;
}

const persona = new guardarPaciente();
let nuevaLongitud = pacientes.push(persona);
console.log(pacientes);
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


const guardarStorage = (clave, valor) => {
  localStorage.setItem(`pacientes`, JSON.stringify(pacientes));
};

const btnGuardar = document.querySelector("#btnGuardar");
const pacientes = [];
btnGuardar.addEventListener("click", function () {
  let nombreP = document.querySelector("#nombreForm").value;
  let apellidoP = document.querySelector("#apellidoForm").value;
  let documentoP = document.querySelector("#documentoForm").value;
  let emailP = document.querySelector("#emailForm").value;
  let direccionP = document.querySelector("#direccionForm").value;
  let telefonoP = document.querySelector("#telefonoForm").value;
  let nacimientoP = document.querySelector("#nacimientoForm").value;
  let obrasocialP = document.querySelector("#obrasocialForm").value;
  let servicioP = document.querySelector("#servicioForm").value;
  let horarioP = document.querySelector("#horarioForm").value;
  let abonadoP = document.querySelector("#abonadoForm").value;
  let metpagoP = document.querySelector("#metpagoForm").value;

  function guardarPaciente(
    nombre,
    apellido,
    documento,
    email,
    direccion,
    telefono,
    nacimiento,
    obrasocial,
    servicio,
    horario,
    abonado,
    metpago
  ) {
    this.nombreP = nombre;
    this.apellidoP = apellido;
    this.documentoP = documento;
    this.emailP = email;
    this.direccionP = direccion;
    this.telefonoP = telefono;
    this.nacimientoP = nacimiento;
    this.obrasocialP = obrasocial;
    this.servicioP = servicio;
    this.horarioP = horario;
    this.abonadoP = abonado;
    this.metpagoP = metpago;
  }

  
  let persona = new guardarPaciente(nombreP, apellidoP, documentoP, emailP, direccionP, telefonoP, nacimientoP, obrasocialP, servicioP, horarioP, abonadoP, metpagoP);
  pacientes.push(persona);
  console.log(pacientes);

  pacientes.forEach(item =>{
    guardarStorage(item.id, JSON.stringify(item));
  }); 
  console.log(localStorage);

  let ObjetoPacientes = localStorage.getItem(`ObjetoPacientes`);
console.log(ObjetoPacientes);
ObjetoPacientes = JSON.parse(ObjetoPacientes)
console.log(ObjetoPacientes);
});



 

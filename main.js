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

let nombreP = "";
let apellidoP = "";
let documentoP = "";
let emailP = "";
let direccionP = "";
let telefonoP = "";
let nacimientoP = "";
let obrasocialP = "";
let servicioP = "";
let profesionalP = "";
let fechahoraP = "";
let metpagoP = "";

const btnGuardar = document.querySelector("#btnGuardar");
const pacientes = [];
btnGuardar.addEventListener("click", function () {
  nombreP = document.querySelector("#nombreForm").value;
  apellidoP = document.querySelector("#apellidoForm").value;
  documentoP = document.querySelector("#documentoForm").value;
  emailP = document.querySelector("#emailForm").value;
  direccionP = document.querySelector("#direccionForm").value;
  telefonoP = document.querySelector("#telefonoForm").value;
  nacimientoP = document.querySelector("#nacimientoForm").value;
  obrasocialP = document.querySelector("#obrasocialForm").value;
  servicioP = document.querySelector("#servicioForm").value;
  profesionalP = document.querySelector("#horarioForm").value;
  fechahoraP = document.querySelector("#abonadoForm").value;
  metpagoP = document.querySelector("#metpagoForm").value;

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
    profesional,
    fechahora,
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
    this.profesionalP = profesional;
    this.fechahoraP = fechahora;
    this.metpagoP = metpago;
  }

  
  let persona = new guardarPaciente(nombreP, apellidoP, documentoP, emailP, direccionP, telefonoP, nacimientoP, obrasocialP, servicioP, profesionalP, fechahoraP, metpagoP);
  pacientes.push(persona);
  console.log(pacientes);

  pacientes.forEach(item =>{
    guardarStorage(item.id, JSON.stringify(item));
  }); 
  console.log(localStorage);




});






// MENU SELECT MP
const dropdowns = document.querySelectorAll(".dropdown");

// lopp through all drop down elements
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});


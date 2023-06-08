let ObjetoPacientes = JSON.parse(localStorage.getItem(`pacientes`));
console.log(ObjetoPacientes);

let datos = document.getElementById("turnos")

const turnoss = document.getElementById("turnos")

if(ObjetoPacientes){

    ObjetoPacientes.forEach((item) => {
        datos = document.createElement("div");
        datos.className = 'datosPaciente';
        datos.innerHTML = `
        <p>${item.nombreP}</p> <p>${item.fechahoraP}</p>
        <button class="detallesBtn">edit</button>
        `;
        turnoss.appendChild(datos);
      })

}else{
    datos = document.createElement("div");
    datos.innerHTML = `
    <p> No hay turnos agendados </p>
    `
    turnoss.appendChild(datos);
}



  /* console.log(ObjetoPacientes[0].nombreP); */
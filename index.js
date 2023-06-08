


function MostrarFecha () {
    let fechita = new Date();
    fechita = fechita.toLocaleString();
    document.getElementById('fechaDeHoy').textContent = fechita;
    }
    
    setInterval(MostrarFecha, 1000);
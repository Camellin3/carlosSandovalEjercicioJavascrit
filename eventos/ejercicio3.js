let notas = [
  {
    id: 1,
    titulo: 'Sacar la basura',
    texto: 'mi mama me va a retar si no lo hago',
    realizada: false
  },
  {
    id: 2,
    titulo: 'Comer',
    texto: 'Quedo comida de ayer',
    realizada: false
  },
  {
    id: 3,
    titulo: 'Estudiar eventos',
    texto: 'Estoy flojo de papeles y no voy a aprovar la task 3',
    realizada: false
  },
  {
    id: 4,
    titulo: 'Tomar agua',
    texto: 'Debo hidratarme bien para no desmayarme',
    realizada: false
  }
];

let idGlobal = 5;

function pintarTarjetas(notas) {
  let contenedor = document.getElementById("contenedortarjetas")
  contenedor.innerHTML = "";
  if (notas.length === 0) {
    contenedor.innerHTML = "NO HAY NOTAS PARA MOSTRAR";
  } else {
    notas.forEach(nota => { 

      let tarjeta = document.createElement('div');
      tarjeta.className = "card";

      tarjeta.innerHTML = `
  <div class="card col">     
    <div class="card-body">
      <h5 class="card-title ${nota.realizada ? 'text-decoration-line-through' : ''}">${nota.titulo}</h5>
      <p class="card-text ${nota.realizada ? 'text-decoration-line-through' : ''}">${nota.texto}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
     
    
      <button onClick="borrarNota(${nota.id})" class="btn btn-primary" id="borrar-nota">Borrar nota
     </button>

     <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada ? "checked" : ""}>

    </div>
  
  </div>
    `

      contenedor.appendChild(tarjeta);
    });

  }

}

pintarTarjetas(notas.slice(0, 4));

function agregarNota(titulo, texto) {
  let nota = {
    id: idGlobal,
    titulo: titulo,
    texto: texto,
    realizada: false
  };
  idGlobal++;
  notas.push(nota);
  pintarTarjetas(notas);
}

let botonguardar = document.getElementById("boton-guardar")

botonguardar.addEventListener("click", a => {
  let titulo = document.getElementById("titulo").value;
  let texto = document.getElementById("texto").value;
  if (titulo !== "" && texto !== "") {
    agregarNota(titulo, texto);
    document.getElementById("titulo").value = "";
    document.getElementById('texto').value = '';
  
  }
  else if (titulo === "" || texto === "") {
    alert("Debe completar todos los campos");
  } 
})

function borrarNota(id) {
  notas = notas.filter(nota => nota.id !== id);
  pintarTarjetas(notas);
}

document.getElementById('boton-borrar').addEventListener('click', function () {
  document.getElementById('titulo').value = '';
  document.getElementById('texto').value = '';
});

function marcarRealizada(id) {
  let nota = notas.find(nota => nota.id === id);
  nota.realizada = !nota.realizada;

  pintarTarjetas(notas);
}

function filtrarPorRealizadas(notas) {

  return notas.filter(nota => nota.realizada);

}

const filtroRealizadas = document.getElementById('filtro-realizadas');

filtroRealizadas.addEventListener('change', () => {
  const notasFiltradas = filtroRealizadas.checked ? filtrarPorRealizadas(notas) : notas;
  pintarTarjetas(notasFiltradas);
});

function filtrarPorRealizadas(notas) {
  return notas.filter(nota => nota.realizada);
}

const filtroTexto = document.getElementById('filtro-texto');

filtroTexto.addEventListener('keyup', () => {
  const textoFiltro = filtroTexto.value.toLowerCase();
  const notasFiltradas = filtrarPorTexto(notas, textoFiltro);
  pintarTarjetas(notasFiltradas);
});

function filtrarPorTexto(notas, texto) {
  if (!texto) return notas;
  return notas.filter(nota => nota.titulo.toLowerCase().includes(texto) || nota.texto.toLowerCase().includes(texto));
}

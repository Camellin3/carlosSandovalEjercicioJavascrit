let notas=[
    {
    id:1,
    titulo: 'Sacar la basura',
    texto: 'mi mama me va a retar si no lo hago',
    realizada: false
    },
    {
        id:2,
        titulo: 'Lavar los platos',
        texto: 'mi mama me va a retar si no lo hago',
        realizada: false
    },
    {
        id:3,
        titulo: 'hacer la tarea de programación',
        texto: 'debe hacerlo para aprobar la materia',
        realizada: false
    },
    {
        id:4,
        titulo: 'hacer la tarea de matematicas',
        texto: 'debe hacerlo para aprobar la materia',
        realizada: false
        }
];

let idGlobal = 4

function pintarTarjetas(notas){
    let contenedor = document.getElementById("contenedortarjetas")
contenedor.innerHTML ="";
if(notas.length===0){
  contenedor.innerHTML = "NO HAY NOTAS PARA MOSTRAR";
}else{
  notas.forEach(nota =>{

    let tarjeta = document.createElement('div');
    tarjeta.className= "card";
    
      tarjeta.innerHTML = `
        <div class="card col">     
    <div class="card-body">
        <h5 class="card-title">${nota.titulo}</h5>
        <p class="card-text">${nota.texto}</p>
    </div>
    <div class="card-footer d-flex justify-content-between">
        <span>${nota.realizada}</span>
      
        <button onClick="borrarNota(${nota.id})" class="btn btn-primary" id="borrar-nota">Borrar nota
       </button>

       <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada? 
"checked": ""}>
    </div>
    
    </div>
      `

      contenedor.appendChild(tarjeta); 
    });
      
  }

}
   
function agregarNota (titulo, texto){
 let nota = {
  id: idGlobal,
  titulo: titulo,
  texto: texto,
  realizada: false
 };
 idGlobal ++;
 notas.push(nota);
 pintarTarjetas(notas);
}

let botonguardar = document.getElementById("boton-guardar")

 botonguardar.addEventListener("click", a=>{
  let titulo = document.getElementById("titulo").value;
  let texto = document.getElementById("texto").value;
  if(titulo !== "" && texto !== ""){
    agregarNota(titulo, texto);
    document.getElementById("titulo").value ="";  
    
  
    }
  })

function borrarNota(id) {
  notas = notas.filter(nota => nota.id!== id);
  pintarTarjetas(notas);
}

document.getElementById('boton-borrar').addEventListener('click', function () {
  document.getElementById('titulo').value = '';
  document.getElementById('texto').value = '';
});

function marcarRealizada(id){
  let nota = notas.find(nota => nota.id === id);
  nota.realizada =! nota.realizada;
  pintarTarjetas(notas);
}

function filtrarPorRealizadas(notas){
  return notas.filter(nota => nota.realizada);
}

function filtrarPorTexto(notas, texto){
  if(!texto) return notas;
  return notas.filter(nota => nota.titulo.includes(texto)|| nota.texto.includes(texto));
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

filtroTexto.addEventListener('input', () => {
  const textoFiltro = filtroTexto.value.toLowerCase();
  const notasFiltradas = filtrarPorTexto(notas, textoFiltro);
  pintarTarjetas(notasFiltradas);
});

function filtrarPorTexto(notas, texto) {
  if (!texto) return notas;
  return notas.filter(nota => nota.titulo.toLowerCase().includes(texto) || nota.texto.toLowerCase().includes(texto));
}
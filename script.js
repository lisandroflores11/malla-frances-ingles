const materias = [
  // Ciclo 1
  { codigo: "FRI114", nombre: "Francés Intensivo I", uv: 8, ciclo: 1, prerequisitos: [] },
  { codigo: "IBI114", nombre: "Inglés Básico Intensivo", uv: 8, ciclo: 1, prerequisitos: [] },
  { codigo: "PCG114", nombre: "Psicopedagogía I", uv: 4, ciclo: 1, prerequisitos: [] },
  { codigo: "TCI114", nombre: "Teoría de la Comunicación I", uv: 4, ciclo: 1, prerequisitos: [] },

  // Ciclo 2
  { codigo: "DGL114", nombre: "Didáctica General I", uv: 4, ciclo: 2, prerequisitos: ["PCG114"] },
  { codigo: "FRI214", nombre: "Francés Intensivo II", uv: 8, ciclo: 2, prerequisitos: ["FRI114"] },
  { codigo: "III114", nombre: "Inglés Intermedio Intensivo I", uv: 8, ciclo: 2, prerequisitos: ["IBI114"] },
  { codigo: "TCI214", nombre: "Teoría de la Comunicación II", uv: 4, ciclo: 2, prerequisitos: ["TCI114"] },

  // Ciclo 3
  { codigo: "FRI314", nombre: "Francés Intensivo III", uv: 8, ciclo: 3, prerequisitos: ["FRI214"] },
  { codigo: "GIN114", nombre: "Gramática Inglesa I", uv: 4, ciclo: 3, prerequisitos: ["III114"] },
  { codigo: "III214", nombre: "Inglés Intermedio Intensivo II", uv: 8, ciclo: 3, prerequisitos: ["III114"] },

  // Ciclo 4
  { codigo: "FAV114", nombre: "Francés Avanzado", uv: 4, ciclo: 4, prerequisitos: ["FRI314"] },
  { codigo: "GFR114", nombre: "Gramática Francesa I", uv: 4, ciclo: 4, prerequisitos: ["FRI314"] },
  { codigo: "GIN214", nombre: "Gramática Inglesa II", uv: 4, ciclo: 4, prerequisitos: ["GIN114"] },
  { codigo: "IAI114", nombre: "Inglés Avanzado Intensivo I", uv: 8, ciclo: 4, prerequisitos: ["III214"] },

  // Ciclo 5
  { codigo: "EOF114", nombre: "Expresión Oral en Francés", uv: 4, ciclo: 5, prerequisitos: ["FAV114"] },
  { codigo: "GFR214", nombre: "Gramática Francesa II", uv: 4, ciclo: 5, prerequisitos: ["GFR114"] },
  { codigo: "IAI214", nombre: "Inglés Avanzado Intensivo II", uv: 8, ciclo: 5, prerequisitos: ["IAI114"] },
  { codigo: "PRG114", nombre: "Pronunciación en Inglés", uv: 4, ciclo: 5, prerequisitos: ["III114"] },

  // Ciclo 6
  { codigo: "DIF114", nombre: "Didáctica del Idioma Francés", uv: 4, ciclo: 6, prerequisitos: ["EOF114", "DGL114"] },
  { codigo: "FFR114", nombre: "Fonética Francesa", uv: 4, ciclo: 6, prerequisitos: ["FAV114"] },
  { codigo: "LCI114", nombre: "Lectura y Conversación en Inglés I", uv: 4, ciclo: 6, prerequisitos: ["IAI214"] },
  { codigo: "OEF114", nombre: "Ortografía y Estilística Francesa", uv: 4, ciclo: 6, prerequisitos: ["GFR214"] },
  { codigo: "RPB114", nombre: "Relaciones Públicas", uv: 4, ciclo: 6, prerequisitos: ["EOF114", "TCI214"] },

  // Ciclo 7
  { codigo: "COI114", nombre: "Composición Inglesa I", uv: 4, ciclo: 7, prerequisitos: ["GIN214"] },
  { codigo: "FYC114", nombre: "El Francés y el Comercio", uv: 4, ciclo: 7, prerequisitos: ["FFR114", "OEF114", "EOF114", "GFR214"] },
  { codigo: "ICF114", nombre: "Introducción a la Civilización Francesa", uv: 4, ciclo: 7, prerequisitos: ["EOF114"] },
  { codigo: "LCI214", nombre: "Lectura y Conversación en Inglés II", uv: 4, ciclo: 7, prerequisitos: ["LCI114"] },

  // Ciclo 8
  { codigo: "DII114", nombre: "Didáctica del Idioma Inglés I", uv: 4, ciclo: 8, prerequisitos: ["DIF114", "DGL114"] },
  { codigo: "FYT114", nombre: "El Francés y el Turismo", uv: 4, ciclo: 8, prerequisitos: ["FFR114", "OEF114", "EOF114", "GFR214"] },
  { codigo: "GAV114", nombre: "Gramática Avanzada", uv: 4, ciclo: 8, prerequisitos: [] },
  { codigo: "LFR114", nombre: "Literatura Francesa I", uv: 4, ciclo: 8, prerequisitos: ["EOF114", "GFR214"] },
  { codigo: "OPU114", nombre: "Opinión Pública", uv: 4, ciclo: 8, prerequisitos: ["RPB114", "TCI214"] },

  // Ciclo 9
  { codigo: "FTR114", nombre: "El Francés y la Traducción", uv: 4, ciclo: 9, prerequisitos: ["FFR114", "OEF114", "EOF114", "GFR214"] },
  { codigo: "IAL114", nombre: "Introducción a la Lingüística", uv: 4, ciclo: 9, prerequisitos: ["PRG114"] },
  { codigo: "LFR214", nombre: "Literatura Francesa II", uv: 4, ciclo: 9, prerequisitos: ["LFR114"] },
  { codigo: "SNO114", nombre: "Seminario I", uv: 6, ciclo: 9, prerequisitos: ["GAV114"] },

  // Ciclo 10
  { codigo: "DII214", nombre: "Didáctica del Idioma Inglés II", uv: 4, ciclo: 10, prerequisitos: ["DII114", "DGL114"] },
  { codigo: "FYM114", nombre: "Fonología y Morfología Inglesa", uv: 4, ciclo: 10, prerequisitos: ["IAL114"] },
  { codigo: "HDC114", nombre: "Historia de El Salvador y Centroamérica", uv: 4, ciclo: 10, prerequisitos: ["OPU114", "TCI214"] },
  { codigo: "LTI114", nombre: "Literatura en Inglés I", uv: 4, ciclo: 10, prerequisitos: ["GAV114"] },
  { codigo: "SNO214", nombre: "Seminario II", uv: 6, ciclo: 10, prerequisitos: ["SNO114"] },
];

const container = document.getElementById("malla-container");
const progreso = JSON.parse(localStorage.getItem("malla-lenguas")) || {};

function cumplePrerrequisitos(cod, estado) {
  const materia = materias.find(m => m.codigo === cod);
  return materia.prerequisitos.every(pr => estado[pr] === "aprobada");
}

function crearMalla() {
  for (let año = 1; año <= 5; año++) {
    const divAño = document.createElement("div");
    divAño.classList.add("año");

    const titulo = document.createElement("h2");
    titulo.textContent = `Año ${año}`;
    divAño.appendChild(titulo);

    for (let c = 1; c <= 2; c++) {
      const cicloNum = (año - 1) * 2 + c;
      const divCiclo = document.createElement("div");
      divCiclo.classList.add("ciclo");

      const subtitulo = document.createElement("h3");
      subtitulo.textContent = `Ciclo ${cicloNum}`;
      divCiclo.appendChild(subtitulo);

      materias
        .filter(m => m.ciclo === cicloNum)
        .forEach(materia => {
          const estado = progreso[materia.codigo] || "pendiente";
          const bloqueada = !cumplePrerrequisitos(materia.codigo, progreso);

          const divMat = document.createElement("div");
          divMat.classList.add("materia");
          divMat.dataset.codigo = materia.codigo;
          divMat.dataset.estado = estado;
          divMat.dataset.bloqueada = bloqueada;
          divMat.dataset.tooltip = `${materia.codigo}\nUV: ${materia.uv}\nPrerrequisitos: ${materia.prerequisitos.join(", ") || "Ninguno"}`;
          divMat.textContent = materia.nombre;

          divMat.addEventListener("click", () => {
            if (divMat.dataset.bloqueada === "true") return;

            const estados = ["pendiente", "cursando", "aprobada"];
            const actual = estados.indexOf(divMat.dataset.estado);
            const siguiente = (actual + 1) % estados.length;
            progreso[materia.codigo] = estados[siguiente];
            localStorage.setItem("malla-lenguas", JSON.stringify(progreso));
            actualizarMalla();
          });

          divCiclo.appendChild(divMat);
        });

      divAño.appendChild(divCiclo);
    }

    container.appendChild(divAño);
  }
}

function actualizarMalla() {
  container.innerHTML = "";
  crearMalla();
}

actualizarMalla();

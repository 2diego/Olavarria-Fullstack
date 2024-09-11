document.addEventListener('DOMContentLoaded', () => {
  const tablero = document.getElementById('tablero');
  const restartBtn = document.getElementById('restart-btn');
  let primeraEleccion = true;
  let segundaEleccion = false;
  let primerCarta = null;
  let segundaCarta = null;
  let parejas = [];

  // Obtener imágenes de Pokémon desde la PokeAPI
  async function fetchPokemon() {
    const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8].map(i => Math.floor(Math.random() * 150) + 1); // 8 Pokémon aleatorios
    const responses = await Promise.all(pokemonIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)));
    const pokemones = await Promise.all(responses.map(res => res.json()));
    
    return pokemones.map(pokemon => ({
      name: pokemon.name,
      image: pokemon.sprites.front_default
    }));
  }

  // Inicializar el juego
  async function repartir() {
    tablero.innerHTML = '';
    parejas = [];
    
    const pokemones = await fetchPokemon();
    parejas = [...pokemones, ...pokemones]; // Crear parejas de Pokémon
    parejas.sort(() => Math.random() - 0.5); // Mezclar pares

    // Crear tarjetas
    parejas.forEach(pokemon => {
      const carta = document.createElement('div');
      carta.classList.add('carta');
      carta.innerHTML = `
        <div class="dorso"><img src="imagenes/dorso.jpg" alt="dorso carta"></div>
        <div class="frente"><img src="${pokemon.image}" alt="${pokemon.name}"></div>
      `;
      carta.addEventListener('click', verCarta);
      tablero.appendChild(carta);
    });
  }

  // Voltear carta
  function verCarta() {
    if (segundaEleccion || this === primerCarta) return;
    
    this.classList.add('vista');

    if (primeraEleccion) {
      primeraEleccion = false;
      primerCarta = this;
      return;
    }

    segundaCarta = this;
    verificarCoincidencia();
  }

  // Comprobar si hay coincidencia
  function verificarCoincidencia() {
    segundaEleccion = true;
    const firstPokemon = primerCarta.querySelector('.frente img').alt;
    const secondPokemon = segundaCarta.querySelector('.frente img').alt;

    if (firstPokemon === secondPokemon) {
      coincidencia();
    } else {
      discrepancia();
    }
  }

  // Deshabilitar las cartas que coinciden
  function coincidencia() {
    primerCarta.removeEventListener('click', verCarta);
    segundaCarta.removeEventListener('click', verCarta);
    resetEleccion();
  }

  // Voltear las cartas si no coinciden
  function discrepancia() {
    setTimeout(() => {
      primerCarta.classList.remove('vista');
      segundaCarta.classList.remove('vista');
      resetEleccion();
    }, 1000);
  }

  // Reiniciar elección
  function resetEleccion() {
    primeraEleccion = true;
    segundaEleccion = false;
    primerCarta = null;
    segundaCarta = null;
  }

  // Reiniciar juego
  restartBtn.addEventListener('click', repartir);

  // Iniciar el juego por primera vez
  repartir();
});

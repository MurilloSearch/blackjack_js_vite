import _ from 'underscore';
import { crearDeck,pedirCarta,valorCarta } from './usecases';

const blackJackModulo = (() => {

  'use strict'

  const tipos = ['C', 'D', 'S', 'H']
  const especiales = ['A', 'J', 'Q', 'K']

  let puntosJugador = 0, puntosComputadora = 0;

  const btnPedir = document.querySelector('#btnPedir'),
      btnNuevo = document.querySelector('#btnNuevo'),
      btnDetener = document.querySelector('#btnDetener');

  const smalls = document.querySelectorAll('small');

  const divCartasJugador = document.querySelector('#jugador-cartas');
  const divCartasComputadora = document.querySelector('#computadora-cartas');


  let deck  = crearDeck(tipos,especiales);

  btnNuevo.addEventListener('click', () => {
      deck = crearDeck(tipos,especiales);
      puntosJugador = 0;
      puntosComputadora = 0;
      divCartasJugador.innerHTML = '';
      divCartasComputadora.innerHTML = '';
      smalls.forEach(elem => elem.innerText = 0)
//        smalls[0].innerText = 0;
//        smalls[1].innerText = 0;
      btnPedir.disabled = false;
      btnDetener.disabled = false;
  })

  btnPedir.addEventListener('click', () => {

      const carta = pedirCarta(deck)
      puntosJugador = puntosJugador + valorCarta(carta)
      smalls[0].innerText = puntosJugador

      const imgCarta = document.createElement('img');
      imgCarta.src = `/assets/cartas/${carta}.png`;
      imgCarta.classList.add('carta');
      divCartasJugador.append(imgCarta);

      if (puntosJugador > 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
      } else if (puntosJugador === 21) {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
      }
      turnoComputadora(puntosJugador)

  })

  btnDetener.addEventListener('click', () => {
      btnPedir.disabled = true;
      turnoComputadora(puntosJugador)
      while (puntosComputadora % 21 < puntosJugador % 21) {
          turnoComputadora(puntosJugador)
      }
      if (puntosJugador % 21 < puntosComputadora % 21) {
          alert('Jugador gana')
      }

  })

  const turnoComputadora = (puntosMinimos) => {

      const carta = pedirCarta(deck);

      puntosComputadora = puntosComputadora + valorCarta(carta);
      smalls[1].innerText = puntosComputadora;

      const imgCarta = document.createElement('img');
      imgCarta.src = `/assets/cartas/${carta}.png`;
      imgCarta.classList.add('carta');
      divCartasComputadora.append(imgCarta);

      setTimeout(() => {
          if (puntosMinimos > 21 || puntosComputadora === 21) {
              alert('Computadora gana')
          } else if (puntosComputadora > 21) {
              alert('Jugador gana');
          }
      }, 100);
  }

  return {};

})();

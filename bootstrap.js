// Inicializa interações simples, som, cartas e efeitos.
const audioUrl = 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_1d2b9b3c1f.mp3?filename=romantic-piano-6059.mp3';

function $(s){return document.querySelector(s)}
function $all(s){return Array.from(document.querySelectorAll(s))}

document.addEventListener('DOMContentLoaded', () => {
  // ano
  $('#yr').textContent = new Date().getFullYear();

  // typewriter
  const tw = $('.typewriter');
  const text = tw?.dataset?.text || '';
  let i = 0;
  function typeFrame(){ 
      if(!tw) return;
      tw.textContent = text.slice(0, ++i);
      if(i < text.length) setTimeout(typeFrame, 34);
  }
  typeFrame();

  // show/hide sections
  const petArea = $('#pet-area');
  $('#open-pet').addEventListener('click', ()=> petArea.classList.toggle('hidden'));
  $('#petClose')?.addEventListener('click', ()=> petArea.classList.add('hidden'));

  // start modules
  startHearts();
  const pet = startPet();
  const dogInteractions = initDogInteractions(pet);

  // wire up feed animation
  const feedBtn = $('#feedBtn');
  if (feedBtn) {
      const originalClick = feedBtn.onclick;
      feedBtn.onclick = (e) => {
          if (feedBtn.disabled) return;
          originalClick?.(e);
          dogInteractions.animateEating();
      };
  }

  startCounter(); // Inicia o contador

  // Controles do modal de jogos
  const gamesModal = document.getElementById('modalJoguinho');
  const openGamesBtn = document.getElementById('open-games');
  const closeGamesBtn = document.getElementById('fecharJoguinho');

  openGamesBtn.onclick = () => gamesModal.classList.remove('hidden');
  closeGamesBtn.onclick = () => gamesModal.classList.add('hidden');

  // Controle do modal de jogos
  const modal = document.getElementById('modalJoguinho');
  const closeBtn = document.getElementById('fecharJoguinho');
  const gameContainer = document.querySelector('.game-container');
  const gameOptions = document.querySelectorAll('.game-option');
  
  function showModal() {
      modal.classList.remove('hidden');
      gameContainer.classList.add('hidden');
  }

  function hideModal() {
      modal.classList.add('hidden');
      gameContainer.classList.add('hidden');
  }

  openGamesBtn.addEventListener('click', showModal);
  closeBtn.addEventListener('click', hideModal);

  // Seleção de jogo
  gameOptions.forEach(button => {
      button.addEventListener('click', () => {
          gameContainer.classList.remove('hidden');
          const gameType = button.dataset.game;
          
          if (gameType === 'flappy') {
              document.getElementById('flapCanvas').style.display = 'block';
              document.getElementById('gameCanvas').style.display = 'none';
              document.getElementById('gameTitle').textContent = 'Flappy Duck';
          } else {
              document.getElementById('flapCanvas').style.display = 'none';
              document.getElementById('gameCanvas').style.display = 'block';
              document.getElementById('gameTitle').textContent = 'Dino Duck';
          }
      });
  });

  // Fecha modal ao clicar fora
  modal.addEventListener('click', (e) => {
      if (e.target === modal) hideModal();
  });

  initScores();
});

import { startHearts } from './effects.js';
import { startPet } from './pet.js';
import { initDogInteractions } from './dog-interactions.js';
import { startCounter } from './counter.js';
import { initScores } from './scores.js';
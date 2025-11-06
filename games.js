import { db } from './firebase-config.js';
import { ref, set, get } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

class GameManager {
    constructor() {
        this.modal = document.getElementById('gameModal');
        this.canvas = document.getElementById('gameCanvas');
        this.closeBtn = document.querySelector('.close-button');
        this.gameTitle = document.getElementById('gameTitle');
        this.scoreDisplay = document.getElementById('gameScore');
        this.currentGame = null;

        this.initializeEvents();
        this.loadBestScores();
    }

    initializeEvents() {
        // Botões de jogar
        document.querySelectorAll('.play-button').forEach(btn => {
            btn.onclick = () => this.startGame(btn.dataset.game);
        });

        // Fechar modal
        this.closeBtn.onclick = () => this.closeGame();
        this.modal.onclick = (e) => {
            if (e.target === this.modal) this.closeGame();
        };
    }

    async startGame(gameType) {
        this.modal.classList.remove('hidden');
        this.canvas.width = gameType === 'flappy' ? 320 : 480;
        this.canvas.height = gameType === 'flappy' ? 480 : 200;
        this.gameTitle.textContent = gameType === 'flappy' ? 'Flappy Duck' : 'Dino Duck';
        
        if (gameType === 'flappy') {
            const { FlappyGame } = await import('./games/flappy.js');
            this.currentGame = new FlappyGame(this.canvas, score => {
                this.scoreDisplay.textContent = Math.floor(score);
            });
        } else {
            const { DinoGame } = await import('./games/dino.js');
            this.currentGame = new DinoGame(this.canvas, score => {
                this.scoreDisplay.textContent = Math.floor(score);
            });
        }
    }

    closeGame() {
        this.modal.classList.add('hidden');
        if (this.currentGame) {
            this.currentGame.stop();
            this.currentGame = null;
        }
    }

    async loadBestScores() {
        const flappyScores = await get(ref(db, 'scores/flappyDuck'));
        const dinoScores = await get(ref(db, 'scores/dinoDuck'));
        
        const getBest = (scores) => {
            const data = scores.val() || [];
            return Math.max(...data.map(s => s.score), 0);
        };

        document.getElementById('flappyBest').textContent = getBest(flappyScores);
        document.getElementById('dinoBest').textContent = getBest(dinoScores);
    }
}

// Inicializa quando a página carregar
document.addEventListener('DOMContentLoaded', () => new GameManager());
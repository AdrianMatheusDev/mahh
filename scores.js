import { db } from './firebase-config.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

function updateScoresList(scores, elementId, limit = 5) {
    const container = document.getElementById(elementId);
    if (!container) return;

    const topScores = scores
        .sort((a, b) => b.score - a.score)
        .slice(0, limit);

    container.innerHTML = topScores.map((score, index) => `
        <div class="score-item">
            <span>${index + 1}. ${score.player}</span>
            <span>${Math.floor(score.score)}</span>
        </div>
    `).join('');
}

export function initScores() {
    const flappyRef = ref(db, 'scores/flappyDuck');
    const dinoRef = ref(db, 'scores/dinoDuck');

    onValue(flappyRef, (snapshot) => {
        const scores = snapshot.val() || [];
        updateScoresList(scores, 'flappyScores');
    });

    onValue(dinoRef, (snapshot) => {
        const scores = snapshot.val() || [];
        updateScoresList(scores, 'dinoScores');
    });
}
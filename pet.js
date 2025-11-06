import { db } from './firebase-config.js';
import { ref, set, onValue, get } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

export function startPet() {
    const petArea = document.getElementById('pet-area');
    const feedBtn = document.getElementById('feedBtn');
    const streakSpan = document.getElementById('petStreak');
    const feedersSpan = document.getElementById('feedersCount');
    
    // Referência para os dados do pet
    const petRef = ref(db, 'pet');
    
    // ID único para este dispositivo
    const deviceId = localStorage.getItem('deviceId') || crypto.randomUUID();
    localStorage.setItem('deviceId', deviceId);

    // Escuta mudanças no Firebase
    onValue(petRef, (snapshot) => {
        const data = snapshot.val() || {};
        const today = new Date().toLocaleDateString();
        
        // Atualiza contadores
        streakSpan.textContent = data.streak || 0;
        const todayFeeders = (data.feeders && data.feeders[today]) || [];
        feedersSpan.textContent = `${todayFeeders.length}/2`;
        
        // Desabilita botão se já alimentou
        feedBtn.disabled = todayFeeders.includes(deviceId);
    });

    // Função para alimentar
    async function feedPet() {
        const today = new Date().toLocaleDateString();
        
        // Busca dados atuais
        const snapshot = await get(petRef);
        const data = snapshot.val() || {};
        
        // Prepara dados dos alimentadores
        const feeders = data.feeders || {};
        const todayFeeders = feeders[today] || [];
        
        // Se já alimentou hoje, retorna
        if (todayFeeders.includes(deviceId)) return;
        
        // Adiciona novo alimentador
        todayFeeders.push(deviceId);
        feeders[today] = todayFeeders;
        
        // Se completou 2 alimentações hoje, aumenta streak
        const streak = (todayFeeders.length >= 2) ? (data.streak || 0) + 1 : (data.streak || 0);
        
        // Atualiza Firebase
        await set(petRef, {
            streak,
            feeders,
            lastUpdate: today
        });
        
        // Animação do cachorro
        const dog = document.querySelector('.dog-body-group');
        dog.style.animation = 'dog-eat 1s ease-in-out';
        setTimeout(() => dog.style.animation = '', 1000);
    }

    // Event listeners
    feedBtn.onclick = feedPet;
}
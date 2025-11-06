export function startCounter() {
    const dataInicio = new Date(2025, 7, 12, 20, 39, 0); // Agosto é mês 7 (zero-based)
    
    function updateCounter() {
        const now = new Date();
        const diff = now - dataInicio;
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('counter-days').textContent = days;
        document.getElementById('counter-hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('counter-minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('counter-seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    setInterval(updateCounter, 1000);
    updateCounter(); // Primeira atualização imediata
}
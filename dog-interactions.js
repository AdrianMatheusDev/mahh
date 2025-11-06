export function initDogInteractions(pet) {
    const $ = selector => document.querySelector(selector);
    const $$ = selector => Array.from(document.querySelectorAll(selector));

    const lookingDog = $('#looking-dog');
    const pupils = $$('.dog-pupil');
    const dogBody = $('.dog-body-group');

    // Configuração dos olhos
    if (lookingDog && pupils.length > 0) {
        const eyeCenters = [
            { x: 43, y: 25 }, // Ajustado para coordenadas do SVG atual
            { x: 72, y: 25 }
        ];
        const maxPupilMove = 3;

        // Olhos seguem o mouse
        document.addEventListener('mousemove', (e) => {
            const dogRect = lookingDog.getBoundingClientRect();
            
            pupils.forEach((pupil, index) => {
                const eyeCenterX = dogRect.left + (eyeCenters[index].x / 160) * dogRect.width;
                const eyeCenterY = dogRect.top + (eyeCenters[index].y / 145) * dogRect.height;

                const deltaX = e.clientX - eyeCenterX;
                const deltaY = e.clientY - eyeCenterY;
                const angle = Math.atan2(deltaY, deltaX);

                const moveX = Math.cos(angle) * maxPupilMove;
                const moveY = Math.sin(angle) * maxPupilMove;
                
                pupil.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });

        // Carinho no cachorro
        lookingDog.addEventListener('click', (e) => {
            e.stopPropagation();
            dogBody.style.animation = 'dog-pet 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            setTimeout(() => {
                dogBody.style.animation = 'dog-breathe 3.5s ease-in-out infinite';
            }, 600);
        });

        // Pulo ao clicar na página
        document.addEventListener('click', (e) => {
            if (e.target.closest('#looking-dog')) return;
            dogBody.style.animation = 'dog-jump 0.5s ease-out';
            setTimeout(() => {
                dogBody.style.animation = 'dog-breathe 3.5s ease-in-out infinite';
            }, 500);
        });
    }

    return {
        animateEating() {
            if (dogBody) {
                dogBody.style.animation = 'dog-eat 1s ease-in-out';
                setTimeout(() => {
                    dogBody.style.animation = 'dog-breathe 3.5s ease-in-out infinite';
                }, 1000);
            }
        }
    };
}
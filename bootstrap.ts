// This file is responsible for bootstrapping the application, ensuring that all necessary components and scripts are loaded in the correct order.

import { Hero } from './components/hero';
import { LoveLetter } from './components/love-letter';
import { InteractiveMap } from './components/interactive-map';
import { AudioPlayer } from './components/audio-player';
import { CanvasEffects } from './effects/canvas-effects';
import { WebGLAurora } from './effects/webgl-aurora';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    const heroSection = new Hero();
    const loveLetterSection = new LoveLetter();
    const interactiveMapSection = new InteractiveMap();
    const audioPlayerSection = new AudioPlayer();

    // Append components to the DOM
    document.body.appendChild(heroSection.render());
    document.body.appendChild(loveLetterSection.render());
    document.body.appendChild(interactiveMapSection.render());
    document.body.appendChild(audioPlayerSection.render());

    // Initialize effects
    CanvasEffects.init();
    WebGLAurora.init();
});
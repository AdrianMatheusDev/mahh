// main.ts

import { Hero } from './components/hero';
import { LoveLetter } from './components/love-letter';
import { InteractiveMap } from './components/interactive-map';
import { AudioPlayer } from './components/audio-player';
import { initCanvasEffects } from './effects/canvas-effects';
import { initWebGLAurora } from './effects/webgl-aurora';
import { fetchContent } from './utils/helpers';

document.addEventListener('DOMContentLoaded', async () => {
    // Initialize canvas effects for background
    initCanvasEffects();

    // Initialize WebGL aurora effect
    initWebGLAurora();

    // Fetch content from JSON file
    const content = await fetchContent('/data/content.json');

    // Create and display the hero section
    const heroSection = new Hero(content.hero);
    document.body.appendChild(heroSection.render());

    // Create and display the love letter section
    const loveLetterSection = new LoveLetter(content.loveLetter);
    document.body.appendChild(loveLetterSection.render());

    // Create and display the interactive map
    const interactiveMapSection = new InteractiveMap(content.map);
    document.body.appendChild(interactiveMapSection.render());

    // Initialize audio player
    const audioPlayer = new AudioPlayer(content.audio);
    document.body.appendChild(audioPlayer.render());
});
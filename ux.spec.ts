import { Selector } from 'testcafe';

fixture `Mariane Romantic Website UX Tests`
    .page `http://localhost:3000`; // Adjust the URL as needed for your local server

test('Hero section is visible and contains the correct title', async t => {
    const heroSection = Selector('.hero');
    const title = Selector('.hero-title');

    await t
        .expect(heroSection.visible).ok('Hero section is not visible')
        .expect(title.innerText).eql('Welcome to Mariane\'s World', 'Hero title is incorrect');
});

test('Love letter component displays the correct message', async t => {
    const loveLetter = Selector('.love-letter');
    const message = Selector('.love-letter-message');

    await t
        .click(Selector('.show-love-letter-button')) // Assuming there's a button to show the letter
        .expect(loveLetter.visible).ok('Love letter component is not visible')
        .expect(message.innerText).contains('My dearest Mariane', 'Love letter message is incorrect');
});

test('Interactive map loads and displays markers', async t => {
    const mapContainer = Selector('.interactive-map');

    await t
        .click(Selector('.show-map-button')) // Assuming there's a button to show the map
        .expect(mapContainer.visible).ok('Interactive map is not visible')
        .expect(mapContainer.childElementCount).gt(0, 'Map does not contain any markers');
});

test('Audio player is functional', async t => {
    const audioPlayer = Selector('.audio-player');
    const playButton = audioPlayer.find('.play-button');

    await t
        .expect(audioPlayer.visible).ok('Audio player is not visible')
        .click(playButton)
        .expect(playButton.hasClass('playing')).ok('Audio is not playing');
});

test('Gallery displays images correctly', async t => {
    const gallery = Selector('.gallery');
    const images = gallery.find('img');

    await t
        .expect(gallery.visible).ok('Gallery is not visible')
        .expect(images.count).gt(0, 'Gallery does not contain any images');
});
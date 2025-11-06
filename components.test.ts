import { render, screen } from '@testing-library/react';
import Hero from '../../src/scripts/components/hero';
import LoveLetter from '../../src/scripts/components/love-letter';
import InteractiveMap from '../../src/scripts/components/interactive-map';
import AudioPlayer from '../../src/scripts/components/audio-player';

describe('Mariane Romantic Website Components', () => {
  test('renders Hero component', () => {
    render(<Hero />);
    const heroElement = screen.getByText(/welcome to mariane/i);
    expect(heroElement).toBeInTheDocument();
  });

  test('renders Love Letter component', () => {
    render(<LoveLetter />);
    const letterElement = screen.getByText(/my dearest mariane/i);
    expect(letterElement).toBeInTheDocument();
  });

  test('renders Interactive Map component', () => {
    render(<InteractiveMap />);
    const mapElement = screen.getByRole('map');
    expect(mapElement).toBeInTheDocument();
  });

  test('renders Audio Player component', () => {
    render(<AudioPlayer />);
    const audioElement = screen.getByRole('audio');
    expect(audioElement).toBeInTheDocument();
  });
});
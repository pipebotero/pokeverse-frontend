import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PokemonCard from '../components/PokemonCard/PokemonCard';

test('renders pokemon card', () => {
  render(<PokemonCard name='Charmander'/>);
  const linkElement = screen.getByText(/Charmander/i);
  expect(linkElement).toBeInTheDocument();
});

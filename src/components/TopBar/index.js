import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.png'

export default function TopBar({ onCartClick, onSearchClick }) {


  return (
    <div className='topBar'>
      <a href='https://pokeapi.co/' target='_blank' rel='noopener noreferrer'>
        <img src={logoImg} alt='Pokémon' />
      </a>
    </div>
  );
}
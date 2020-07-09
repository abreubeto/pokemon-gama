import React, { useState } from 'react';
import './styles.css';
import logoImg from '../../assets/logo.png'
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { MdAccountBox } from 'react-icons/md';

export default function TopBar({ onCartClick, onSearchClick }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='topBar'>
      <a href='https://pokeapi.co/' target='_blank' rel='noopener noreferrer'>
        <img src={logoImg} alt='Pokémon' />
      </a>
    </div>
  );
}
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

      {/* <div className='searchBar'>

        <input placeholder='Pesquise por nome'
          type='text'
          onChange={e => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter')
              return onSearchClick(searchTerm);
          }} />

        {/* <AiOutlineSearch className='searchIcon'
          color='#6495ed'
          size={26}
          onClick={() => { return onSearchClick(searchTerm) }} /> */}

      </div> */}

      {/* <AiOutlineShoppingCart className='cartIcon'
        color='#FFF'
        size={55}
        onClick={onCartClick} />
      <a href='https://github.com/PhilipiMagalhaes' target='_blank' rel='noopener noreferrer'>
        <MdAccountBox className='profileIcon'
          color='#FFF'
          size={55} />
      </a> */}

    </div>
  );
}
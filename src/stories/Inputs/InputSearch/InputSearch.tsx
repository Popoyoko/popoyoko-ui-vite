import './InputSearch.css';
import React from 'react';
import search from '../../../Icons/Search/search.svg';

interface InputSearchProps {
    placeholder: string;
};

export const InputSearch = ({
    placeholder,
}: InputSearchProps) => {

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
          const searchTerm = event.target.value;
          //Faire quelque chose avec le terme de recherche (pour l'instant console.log)
          console.log('Recherche: ' + searchTerm);
        }
      };
    
    return (
        <div className='search'>
            <div className='input-container'>
                <input type='text' className='placeholder' placeholder={placeholder} onKeyDown={handleSearch} />
                <img src={search} alt='search'></img>
            </div>
        </div>
    )
}

import './InputDate.css';
import React from 'react';
import DateLine from '../../../Icons/DateLine/dateLine.svg';

interface InputDateProps {
    placeholder: string;
    srcIcon: string;
    onClick?: () => void;
};

export const InputDate = ({
    placeholder,
    srcIcon,
    onClick,
}: InputDateProps) => {
    return (
        <button className='dateBtn' onClick={onClick}>
            {placeholder}
            <img src={DateLine} alt='dateFlat'></img>
        </button>
    );
}
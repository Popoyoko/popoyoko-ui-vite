import './inputDate.css';
import React from 'react';

interface InputDateProps {
    placeholder: string;
    srcIcon: string;
    onClick?: () => void;
};

const InputDate = ({
    placeholder,
    srcIcon,
    onClick,
}: InputDateProps) => {
    return (
        <button className='dateBtn' onClick={onClick}>
            <p className='placeholder'>{placeholder}</p>
            <svg className='vector' href={srcIcon}></svg>
        </button>
    );
};

export default InputDate;
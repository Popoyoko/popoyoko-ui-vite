import './InputSelect.css';
import React from 'react';
import arrowtriangle from '../../../Icons/ArrowTriangle/triangle.svg';

interface InputSelectProps {
    label: string;
    href: string;
    options: string[];
    anchorElement: JSX.Element;
};

export const InputSelect = ({
    label,
    href,
    options,
    anchorElement,
}: InputSelectProps) => {
    return(
        <div className="select">
            <button className="selectbtn">
                {label}
                <img src={arrowtriangle} alt='arrowtriangle'></img>
            </button>
            <div className="select-content">
            {anchorElement}
            {options.map((option, index) => (
                <a key={index} href={href}>
                {option}
                </a>
            ))}
            </div>
        </div>
    )
}
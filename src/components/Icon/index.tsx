import "./icon.css";
import React from 'react';

interface IconProps {
    size?: "small" | "medium" | "large";
}

const Icon: React.FC<IconProps> = ({
    size,
    ...props
}) => {

    const className = `icon-${size}`;

    return (
        <div className={`icon-component ${className}`}>
        </div>
        
    );
};


export default Icon;
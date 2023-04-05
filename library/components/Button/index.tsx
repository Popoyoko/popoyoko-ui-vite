import './index.css'

import React, { MouseEventHandler } from 'react'

export type ButtonProps = {
    href?: string
    children: string
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ children, href, onClick, ...rest }: ButtonProps) =>
    href ? (
        <a href={href}>
            <button {...rest}>{children}</button>
        </a>
    ) : (
        <button {...rest} onClick={() => onClick}>
            {children}
        </button>
    )

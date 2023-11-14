import React from 'react'
type ButtonProps = {
    cta : string;
    bgColor: string;
    color: string;
}

export default function Button({cta, bgColor, color}: ButtonProps) {
    return (
        <button className={`bg-${bgColor} text-${color} p-3 rounded w-28 text-gray-50`}> {cta}</button>
    )
}

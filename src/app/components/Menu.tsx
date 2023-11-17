import React from 'react'

export default function Menu({title}) {
    return (
        <ul className="menu rounded-box bg-white mr-5 ml-5 border h-70">
            <li className="flex text-sm mb-3">
                {title}
            </li>
        </ul>
    )
}

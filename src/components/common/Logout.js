import React from 'react'

export const Logout = ({onLogout}) => {
    return (
        <div>
            <button  onClick={onLogout} className="px-4 py-2 shadow-lg rounded">Logout</button>
        </div>
    )
}

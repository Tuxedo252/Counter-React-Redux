import React from 'react'

export default function Container({ children }) {
    return (
        <div className="card" style={{ width: "55%" }}>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

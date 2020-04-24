import React from 'react'

export default function PlayerMovement({percent}) {
    return (
        <div className="player-movement-container">
            <div className="player-grid" style={{width: `${percent}%`}}>
                <i className="fad fa-ufo"></i>
            </div>
            <div className="background"></div>
        </div>
    )
}

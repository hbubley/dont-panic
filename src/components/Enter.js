import React from 'react'
import {Link} from 'react-router-dom'

function Enter() {
    return (
        <div>
            <Link to='/Game' style={{textDecoration:'none', color:'black'}}><button className="enter">Enter</button></Link>
        </div>
    )
}

export default Enter

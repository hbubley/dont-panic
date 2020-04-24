import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import { createUser } from '../../game-utility/api-helper'

export default function UserInput({score}) {
    const [user, setUser] = useState('');
    const [userData, setUserData] = useState({});

    let history = useHistory();

    useEffect(() => {
        if (userData && userData.length) {
            handleCreateUser(userData);
        }
      }, [userData]);

    const handleUserSet = (user, score) => {
        setUserData([{user, score}]);  

    };

    const handleCreateUser = async () => {
        const json = await createUser(userData);
        history.push("/scoreboard"); 
     }

     const handleSubmit = e => {
        e.preventDefault();
        handleUserSet(user, score);
    }

    return (
        <div>
            <h1>TIME TO JOIN A GA CODECAMP</h1>
            <label>ENTER YOUR INITIALS</label>
            <input value = {user} onChange={e => setUser(e.target.value)} placeholder="XXX"/>
            <p>SCORE: {score}</p>
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    )}
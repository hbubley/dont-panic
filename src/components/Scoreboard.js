import React, { useContext } from 'react';
import { DataContext } from "../App";
function ScoreBoard() {
    const data = useContext(DataContext);
    let display = <li>Loading...</li>
    if(data.users[0] == null){
        console.log("Here");
    }else{
        display = data.users.map((user, index) => {
            return <li key={index}>User: {user.user}, Score: {user.score}</li>
        });
    }
    
return (
    <>
    <div className="App-header">
        <h1>Scoreboard</h1>
    </div>
    <div className="scoreboard-background">
        <ul>
            {display}
        </ul>
    </div>
    </>
)
}
export default ScoreBoard
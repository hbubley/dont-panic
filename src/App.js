import React, { useState, useEffect, createContext } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import UserInput from "./components/game-components/UserInput";
import Scoreboard from "./components/Scoreboard";
import Enter from "./components/Enter";
import Canvas from "./components/Canvas";
import "./App.scss";

import { getAllUsers } from "./game-utility/api-helper";
export const DataContext = createContext();

function App() {

  const [users, setAllUsers] = useState({});

  useEffect(() => {
    const makeAPICall = async () => {
      const resp =  await getAllUsers();
      setAllUsers(resp);
    }
    makeAPICall();
  }, []);


  return (
    <div className="container">
      <div className="App">
        <div className="nav">
          <Link to="/Game" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            Game{" "}
          </Link>
          <Link
            to="/Scoreboard"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            Scoreboard{" "}
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            Menu{" "}
          </Link>
        </div>
        <h1 className="glitch" data-text="Don't Panic">
          Don't Panic
        </h1>
        <Switch>
          <Route exact path="/" render={() => <Enter />} />
          <Route path="/Game" render={() => <Canvas />} />
          <Route
            path="/userinput"
            render={() => <UserInput />}
          />
          <DataContext.Provider value={{users}}>
            <Route path="/Scoreboard" render={() => <Scoreboard />} />
          </DataContext.Provider>
          <Route path="/" render={() => <Menu />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
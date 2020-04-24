import React, { useState } from "react";
import TypingCheck from "./TypingCheck";
import PlayerMovement from "./PlayerMovement";
import UserInput from "./UserInput";
import "./game-css.scss";


export default function Game({ wordsArr, handleScore, handleLost }) {

  const [wpm, setWpm] = useState(0);
  const [level, setLevel] = useState(1);
  const [wordCount, setWordCount] = useState(0);
  const [percent, setPercent] = useState(0);
  const [playerScore, setPlayerScore] = useState(0);
 
  if (wordsArr && wordsArr.length) {
    //generate needed wordsArr to conditionally render, pulling it in here works

    const generate = (wordsArr) => {
      var random = wordsArr[Math.floor(Math.random()*wordsArr.length)]
      console.log('words.js random ',random)
      return (random && random.word)
    };

    let random = ''
    //difficulty filtered
    let easy = wordsArr.filter(diff =>{if(diff && diff.difficulty === 'easy'){return diff.word}})
    let medium = wordsArr.filter(diff =>{if(diff && diff.difficulty === 'medium'){return diff.word}})
    let hard = wordsArr.filter(diff =>{if(diff && diff.difficulty === 'hard'){return diff.word}})
    let dangerous = wordsArr.filter(diff =>{if(diff && diff.difficulty === 'dangerous'){return diff.word}})

function handleDifficulty() {
    if(level <= 3){random = generate(easy)}
    else if(level >= 4){random = generate(medium)}
    else if(level >=6){random = generate(hard)}
    else if(level >=9){random = generate(dangerous)}
    else{random = generate(wordsArr)}
  }
  handleDifficulty()


      const handleWPM = (input) => {
        setWpm(input);
      };
      const handleLevel = (input) => {
        setLevel(input);
      };
      const handleWordCount = (input) => {
        setWordCount(input);
        let percent = ((wordCount +1) / 10) * 100;
        setPercent(percent);
      };
      const handlePlayerScore = () => {
        let score = ((wpm + 1) * level).toFixed(2);
        setPlayerScore(score);
        handleScore(score)
      };

      return (
        <div className="game-container">
          <TypingCheck
            handleWPM={handleWPM}
            handleLevel={handleLevel}
            level={level}
            handleWordCount={handleWordCount}
            wordCount={wordCount}
            handlePlayerScore={handlePlayerScore}
            wordsArr={random}
            handleLost={handleLost}
            handleDifficulty={handleDifficulty}

          />
          <h3>WPM: {wpm}</h3>
          <h3>Level: {level}</h3>
          <h3>Word Count: {wordCount}</h3>
          <PlayerMovement percent={percent < 100 ? percent : 100} />
        </div>
      );
    }
    else { return <></> }
  }
import React, {useState, useEffect} from 'react'
import Game from "./game-components/Game"
import "../App.scss"
import {getAllWords} from "../game-utility/api-helper"
import UserInput from "../components/game-components/UserInput"
function Canvas() {
    const [wordsArr, setWordsArr] = useState('')
    const [lost, setLost] = useState(false)
    const [score, setScore] = useState(0)
    useEffect(() => {
      const makeAPICall = async () => {
        const resp =  await getAllWords()
        setWordsArr(resp) 
      }
      makeAPICall()
    }, [])
    const handleScore = (score) => {
      setScore(score)
    }
    const handleLost = () => {
      setLost(!lost)
    }
    return (
      <div>
              <div className="canvas">
                  {lost===false && <Game wordsArr={wordsArr} handleScore={handleScore} handleLost={handleLost}/>}
                  {lost===true && <UserInput score={score}/>}
              </div>

      </div>
  )
  }
export default Canvas

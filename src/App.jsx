// react, componentes, estáticos
import { useContext } from 'react'
import { QuizContext } from './context/quiz'
import './App.css'
import Welcome from './components/Welcome'
import Question from './components/Question'
import { useInsertionEffect } from 'react'
import { useEffect } from 'react'
import GameOver from './components/GameOver'

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
 
  useEffect(() => {
    dispatch({type: "REODER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  )
}

export default App


import { use } from "react"
import { useState } from "react"

const TURNS = {
  X: 'X',
  O: 'O'
}


const Square = ({children, IsSelected, updateBoard, index}) => {
  const className = `square ${IsSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return(
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {
          board.map((_, index)=>{
            return(
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
              {board[index]}      
              </Square>
            )

          })
        }
      </section>
    
        <section className="turn">
          <Square IsSelected={turn === TURNS.X}>
            {TURNS.X}
            </Square>
          <Square IsSelected={turn === TURNS.O}>
            {TURNS.O}
            </Square>
        </section>
    </main>
    
  ) 
}

export default App

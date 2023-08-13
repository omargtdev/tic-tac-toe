import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import Board from "./Board"
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <h1 className="text-center mt-3">Let's play</h1>
      <Game />
    </>
  )
}

function Game() {
  const PLAYERS = {
    first: "X",
    second: "O"
  }

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);
  const [nextPlayer, setNextPlayer] = useState(PLAYERS.first); // First with 'X'
  const [gameInfo, setGameInfo] = useState({ isOver: false, winner: null });

  const currentSquares = history[currentHistoryIndex];

  useEffect(() => {
    const winner = calculateWinner(currentSquares);
    if (winner) {
      setGameInfo({ isOver: true, winner });
      return;
    }

    // Draw game
    if (history.length == 10) {
      setGameInfo({ isOver: true, winner: "none" })
    }
  }, [currentHistoryIndex])

  const handleReset = () => {
    setCurrentHistoryIndex(0);
    setNextPlayer(PLAYERS.first);
    setGameInfo({ isOver: false, winner: null });
    setHistory([Array(9).fill(null)])
  }

  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setCurrentHistoryIndex(history.length);

    // Changing player
    setNextPlayer(
      nextPlayer == PLAYERS.first
        ? PLAYERS.second
        : PLAYERS.first
    );
  }

  const handleGoToMove = historyIndex => {
    setCurrentHistoryIndex(historyIndex);
  }

  return (
    <Container className="m-auto mt-4" style={{ maxWidth: "600px" }}>
      <Row className="h3 justify-content-between align-items-center">
        <div>
          <p className="text-start mb-0">
            {!gameInfo.isOver ? "Next player: " : "Winner: "}
            <span className="text-success">
              {!gameInfo.isOver ? nextPlayer : gameInfo.winner}
            </span>
            <span className="ml-4 h6">
              {gameInfo.isOver && `You are viewing move #${currentHistoryIndex}`}
            </span>
          </p>
        </div>
        <div className="d-flex justify-end">
          <DropdownButton
            disabled={!gameInfo.isOver}
            className="mr-2"
            as={ButtonGroup}
            variant="outline-secondary"
            title="History">
            {gameInfo.isOver
              && (
                history.slice(1).map((_, index) => {
                  const realIndex = index + 1;
                  return (
                    <Dropdown.Item
                      onClick={() => handleGoToMove(realIndex)}
                      eventKey={realIndex}
                      key={realIndex}>
                      Go to move #{realIndex}
                    </Dropdown.Item>
                  );
                }
                )
              )}
          </DropdownButton>
          <Button
            variant="outline-danger"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </Row>
      <Board
        squares={currentSquares}
        isGameOver={gameInfo.isOver}
        onPlay={handlePlay}
        nextPlayer={nextPlayer}
      />
    </Container>
  );
}

function calculateWinner(squares) {
  const waysToWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < waysToWin.length; i++) {
    const [a, b, c] = waysToWin[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] == squares[c])
      return squares[a];
  }

  return null;
}

export default App

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

function Board() {

  const PLAYERS = {
    first: "X",
    second: "O"
  }

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(PLAYERS.first); // First with 'X'
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (calculateWinner(squares)) {
      setIsGameOver(true);
    }
  }, [squares])

  const handleReset = () => {
    setNextPlayer(PLAYERS.first);
    setIsGameOver(false);
    setSquares(Array(9).fill(null))
  }

  const handleSquareClick = i => {
    const nextSquares = [...squares];
    nextSquares[i] = nextPlayer;
    setSquares(nextSquares);

    // Changing player
    setNextPlayer(
      nextPlayer == PLAYERS.first
        ? PLAYERS.second
        : PLAYERS.first
    );
  }

  return (
    <>
      <Container className="m-auto mt-4" style={{ maxWidth: "600px" }}>
        <Row className="h3 justify-content-between align-items-center">
          <div>
            <p className="text-start mb-0">
              {!isGameOver ? "Next player: " : "Winner: "}
              <span className="text-success">
                {!isGameOver ? nextPlayer : calculateWinner(squares)}
              </span>
            </p>
          </div>
          <div className="d-flex justify-end">
            {/* TODO: Make history to go an specific time of game */}
            {/* <Button variant="outline-secondary mr-2">Back</Button> */}
            <Button
              variant="outline-danger"
              onClick={handleReset}
            >
              Reset
            </Button>
          </div>
        </Row>
        <Row>
          <Col style={{
            minWidth: "100px",
            minHeight: "100px"
          }}
            className="border border-primary d-flex justify-content-center align-items-center p-0">
            <Square
              value={squares[0]}
              onSquareClick={() => handleSquareClick(0)}
              disabled={isGameOver}
            />
          </Col>
          <Col
            style={{
              minWidth: "100px",
              minHeight: "100px"
            }}
            className="border border-primary d-flex justify-content-center align-items-center p-0">
            <Square
              value={squares[1]}
              onSquareClick={() => handleSquareClick(1)}
              disabled={isGameOver}
            />
          </Col>
          <Col
            style={{
              minWidth: "100px",
              minHeight: "100px"
            }}
            className="border border-primary d-flex justify-content-center align-items-center p-0">
            <Square
              value={squares[2]}
              onSquareClick={() => handleSquareClick(2)}
              disabled={isGameOver}
            />
          </Col>
        </Row>
        <Row>
          <Col style={{
            minWidth: "100px",
            minHeight: "100px"
          }}
            className="border border-primary d-flex justify-content-center align-items-center p-0">
            <Square
              value={squares[3]}
              onSquareClick={() => handleSquareClick(3)}
              disabled={isGameOver}
            />
          </Col>
          <Col
            style={{
              minWidth: "100px",
              minHeight: "100px"
            }}
            className="border border-primary d-flex justify-content-center align-items-center p-0">
            <Square
              value={squares[4]}
              onSquareClick={() => handleSquareClick(4)}
              disabled={isGameOver}
            />
          </Col>
          <Col
            style={{
              minWidth: "100px",
              minHeight: "100px"
            }}
            className="border border-primary d-flex justify-content-center align-items-center p-0">
            <Square
              value={squares[5]}
              onSquareClick={() => handleSquareClick(5)}
              disabled={isGameOver}
            />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              minWidth: "100px",
              minHeight: "100px"
            }}
            className="border border-primary d-flex justify-content-center align-items-center p-0">
            <Square
              value={squares[6]}
              onSquareClick={() => handleSquareClick(6)}
              disabled={isGameOver}
            />
          </Col>
          <Col
            style={{
              minWidth: "100px",
              minHeight: "100px"
            }}
            className="border border-primary d-flex justify-content-center align-items-center p-0">
            <Square
              value={squares[7]}
              onSquareClick={() => handleSquareClick(7)}
              disabled={isGameOver}
            />
          </Col>
          <Col
            style={{
              minWidth: "100px",
              minHeight: "100px"
            }}
            className="border border-primary d-flex justify-content-center align-items-center p-0">
            <Square
              value={squares[8]}
              onSquareClick={() => handleSquareClick(8)}
              disabled={isGameOver}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

function Square({ value, onSquareClick, disabled }) {
  return (
    <Button disabled={disabled || value} variant="light w-100 h-100" onClick={onSquareClick}>
      <span className="display-3">{value}</span>
    </Button>
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

export default Board;

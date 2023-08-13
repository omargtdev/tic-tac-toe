import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Board({ squares, isGameOver, onPlay, nextPlayer }) {

  const handleSquareClick = i => {
    const nextSquares = [...squares];
    nextSquares[i] = nextPlayer;
    onPlay(nextSquares);
  }

  return (
    <Container className="mt-4" style={{ maxWidth: "600px" }}>
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
  );
}

function Square({ value, onSquareClick, disabled }) {
  return (
    <Button disabled={disabled || value} variant="light w-100 h-100" onClick={onSquareClick}>
      <span className="display-3">{value}</span>
    </Button>
  );
}

export default Board;

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
class Square extends React.Component {
  render() {
    return (
      <button 
        className="square"
        onClick={ 
          // 내장된 DOM <button> 컴포넌트에 있는 onClick prop이, React에게 클릭 이벤트 리스너를 설정하라고 알려준다.
          // 버튼을 클릭하면 render()에 정의된 onClick 이벤트 핸들러를 호출한다. (=> this.props.onClick())
          // Board에서 Square로 onClick{() => this.handleClick(i)} 을 전달했기 때문에 Square를 클릭하면 Board의 handleClick을 호출한다. 
          () => this.props.onClick()
        }
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null)
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    squares[i] = '💜'
    this.setState({ squares })
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

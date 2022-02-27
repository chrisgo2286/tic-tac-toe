import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
    render() {
      console.log(this.props.squares)
      return (
        <React.Fragment>
          <h3>Tic Tac Toe</h3>
          <div className='board'>{ this.props.squares.map((square, ndx) => (
            <Square
              key={ndx}
              content={square.content}
            />
          ))}
          </div>
        </React.Fragment>
      )
    }
}
export default Board;
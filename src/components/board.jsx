import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
    render() {
      return (
        <React.Fragment>
          <h3>Tic Tac Toe</h3>
          <div className='board'>{ this.props.squares.map((square) => (
            <Square
              key={square.id}
              square={square}
              onClick={this.props.onClick}
            />
          ))}
          </div>
        </React.Fragment>
      )
    }
}
export default Board;
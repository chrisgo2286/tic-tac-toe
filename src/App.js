import React, { Component } from 'react';
import './App.css';
import Board from './components/board';

class App extends Component {
  state = {
    currentPlayer: 'o',

    squares: [
      { id: 1, content: ''}, 
      { id: 2, content: ''}, 
      { id: 3, content: ''},
      { id: 4, content: ''}, 
      { id: 5, content: ''}, 
      { id: 6, content: ''},
      { id: 7, content: ''}, 
      { id: 8, content: ''}, 
      { id: 9, content: ''},
    ]
  }

  onClick = (id) => {
    if(this.invalidMove(id)) {
      return;
    }
    
    const squares = [...this.state.squares]
    const currentPlayer = this.state.currentPlayer;
    squares[id-1].content = currentPlayer;
    this.setState({ currentPlayer, squares })

    if(this.gameOver()) {
      console.log('Game Over')
      return;
    }

    this.changePlayer();
  }

  invalidMove = (id) => {
    const squares = [...this.state.squares]
    return (squares[id-1].content !== '') ? true : false;
  }

  gameOver = () => {
    if(this.winningMove()) {
      console.log(this.state.currentPlayer + ' is the winner!')
      return true;
    }
    
    if(this.gameTied()) {
      console.log('Tied Game')
      return true;
    }
  }

  winningMove = () => {
    const winningMoves = [
      [0, 1, 2], 
      [3, 4, 5], 
      [6, 7, 8], 
      [0, 3, 6], 
      [1, 4, 7], 
      [2, 5, 8], 
      [0, 4, 8], 
      [2, 4, 6]
    ]
    for(var i=0; i<8; i++) {
      var ndx1 = winningMoves[i][0]
      var ndx2 = winningMoves[i][1]
      var ndx3 = winningMoves[i][2]

      if(this.state.squares[ndx1].content === this.state.squares[ndx2].content && this.state.squares[ndx1].content === this.state.squares[ndx3].content && this.state.squares[ndx1].content !== '') {
        console.log(ndx1, ndx2, ndx3)
        return true;
      }
    }
  }

  gameTied = () => {
    for(var i=0; i<9; i++) {
      if(this.state.squares[i].content === '') {
        return false;
      }
    }  
    return true;
  }
  changePlayer = () => {
    var currentPlayer = this.state.currentPlayer;
    if(currentPlayer === 'o') {
      currentPlayer = 'x';
      this.setState({ currentPlayer });
    } else {
      currentPlayer = 'o';
      this.setState({ currentPlayer });
    }
  }
  
  render() {
    return (
      <Board 
        squares={this.state.squares}
        onClick={this.onClick}
      />
    )
  }
}
export default App;

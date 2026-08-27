import React, { useReducer } from 'react';

const Lab = () => {
  const initialState = {
    player: "",
    computer: "",
    result: ""
  };

  function reducer(state, action) {
    const player = action.payload;

    const choices = ["stone", "paper", "scissors"];
    const computer = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if(player===computer) {
      result="Draw!";
    }
    else if(
      (player==="stone" && computer==="scissors") ||
      (player==="paper" && computer==="stone") ||
      (player==="scissors" && computer==="paper")
    ){
      result = "You Win! 🎉";
    }
    else {
      result = "Computer Wins! 🤖";
    }
    return{
      player: player,
      computer: computer,
      result: result
    };
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Stone Paper Scissors</h1>

      <button onClick={()=>dispatch({ type: "PLAY", payload: "stone" })}>
        🪨 Stone
      </button>

      <button onClick={()=>dispatch({ type: "PLAY", payload: "paper" })}>
        📄 Paper
      </button>

      <button onClick={()=>dispatch({ type: "PLAY", payload: "scissors" })}>
        ✂️ Scissors
      </button>

      <h3>You chose: {state.player}</h3>
      <h3>Computer chose: {state.computer}</h3>
      <h2>{state.result}</h2>
    </div>
  );
};

export default Lab;
import React, { useReducer } from 'react'

const ques_03 = () => {
    function reducer(state, action){
        if (action.type =="++"){
            return state+1
        }
    }
    let [state, dispatch] = useReducer(reducer,0)
  return (
    <div>
        <h2>{state}</h2>
        <button onClick={()=>dispatch({type:"++"})}>Increment</button>
    </div>
  )
}

export default ques_03
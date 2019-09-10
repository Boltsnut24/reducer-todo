import React, { useReducer } from 'react';
import {initialState, reducer } from '../reducers/reducer.js';

export default function Todo(){
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return(
    <>
      {state.map(listItem => {
        return (
         <div>
            <h2>{listItem.item}</h2>
            <button>Done!</button>
         </div>
        )
      })}
    </>
  )
}
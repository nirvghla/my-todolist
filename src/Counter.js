import React, { useState ,useReducer} from 'react'

const initialState={
    count:0
}

function reducer(state,action){
    switch(action.type){
        case "increment":
            return{
                count:state.count+1
            };
      case "decrement":
                    return{
                        count:state.count-1
                    };

        case "reset":
            return initialState;
        default:
            return initialState;
    }
}
export default function Counter(){
const [state, dispatch] = useReducer(reducer, initialState)
    return(<div>
        Count: {state.count}
       <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
       <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
       <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>)
}
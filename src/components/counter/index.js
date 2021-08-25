
import React from "react";

export const Counter =({value, onIncrement, onDecrement})=>{

    const incrementIfOdd=() =>{
        if (value % 2 !== 0) {
            onIncrement()
        }
    }

    const incrementAsync=() =>{
        setTimeout(onIncrement, 1000)
    }

    return (
        <div>
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
                {' '}
                <button onClick={()=> incrementIfOdd()}>
                    Increment if odd
                </button>
                {' '}
                <button onClick={()=> incrementAsync()}>
                    Increment async
                </button>
            </p>
        </div>
    )
}
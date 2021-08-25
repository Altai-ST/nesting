// import { NestingExample } from "./nesting";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "./components/counter";
import { store } from "./components/store";

const App =()=> {
  const dispatch = useDispatch()
  const count = useSelector(state => state)

  const onIncrement=() =>{
    dispatch({ type: 'INCREMENT' })
    console.log(store.getState())
  }
  
  const onDecrement=() =>{
    dispatch({ type: 'DECREMENT' })
    console.log(store.getState())
  }

  return (
    <div className="App">
      {/* <NestingExample/> */}
      <Counter value={count}
                       onIncrement={()=> onIncrement()}
                       onDecrement={()=> onDecrement()} />
    </div>
  );
}

export default App;

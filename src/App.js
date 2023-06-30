import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { inc, dec } from './actions';

function App() {
  const count = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div className="App">
      halooooo {count}
      <button onClick={() => dispatch(inc())}>add</button>
      <button onClick={() => dispatch(dec())}>remove</button>
    </div>
  );
}

export default App;

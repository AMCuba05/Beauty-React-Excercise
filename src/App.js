import './App.css';
import {useDispatch} from "react-redux";
import {getUsers} from "./redux/actions/users";

function App() {
    const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
          <button onClick={()=> dispatch(getUsers())}>hola</button>
      </header>
    </div>
  );
}

export default App;

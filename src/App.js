import { Provider } from "react-redux";
import TodoList from "./components/TodoList";
import { createStore } from "redux";
import TodoReducer from "./TodoReducer";

const Store = createStore(TodoReducer);

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
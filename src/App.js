import "./App.css";
import { TodoHeader } from "./components/Header/TodoHeader";
import { Fragment } from "react";
import { TodoInput } from "./components/Input/TodoInput";
import { TodoCard } from "./components/Card/TodoCard";

//useState - hook
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Sport machen",
      done: false,
      id: uuidv4(),
    },
    {
      title: "React lernen",
      done: false,
      id: uuidv4(),
    },
    {
      title: "arbeiten",
      done: false,
      id: uuidv4(),
    },
  ]);
  return (
      <div className="app">
        <TodoHeader />
        <TodoInput todos={todos} setTodos={setTodos} />
        {todos
          ? todos.map((todo) => {
              return (
             
                <Fragment key={todo.id}>
                  <TodoCard
                    title={todo.title}
                    done={todo.done}
                    id={todo.id}
                    todos={todos}
                    setTodos={setTodos}
                  />
                </Fragment>
              );
            })
          : null}
      </div>
  );
}

export default App;

import { useState, useRef } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const inputRef = useRef();

  const handleAddTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: inputRef.current.value,
      checked: false,
    };
    setTodos([...todos, newTodo]);
    inputRef.current.value = "";
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    );
  };

  return (
    <div className=" w-full max-w-[540px] bg-white mt-[100px] mx-auto mb-[20px] pt-[40px] pb-[70px] px-[30px] rounded-lg ">
      <div className=" flex items-center mb-5  justify-center">
        <h1 className="text-3xl font-bold text-black">TO-DO List</h1>
        <img
          src="/icon.png"
          className=" w-[30px] ml-[10px]  "
        />
      </div>
      <div className=" flex items-center justify-between bg-[#edeef0] rounded-[30px] pl-[20px] mb-[25px] ">
        <input
          ref={inputRef}
          className=" flex-1 border-none outline-none bg-transparent p-[10px] font-medium "
          type="text"
          placeholder="Add your text"
        />
        <button
          onClick={handleAddTodo}
          className="  border-none outline-none  bg-[#ff5945] text-yellow-50 font-[16px] cursor-pointer rounded-full py-[16px] px-[50px]  "
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li  key={todo.id} className={todo.checked ? "checked" : ""}>
            <div className=" w-full flex space-x-4">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(todo.id)}
              /><div>
              {todo.text}</div>
            </div>
            <button className=" text-red-600 " onClick={() => handleRemoveTodo(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

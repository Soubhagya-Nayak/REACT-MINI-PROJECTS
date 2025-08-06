import { useState, useEffect } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";
import { TodoForm } from "./components/TodoForm"
import { TodoItem } from "./components";

export const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => 
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => 
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo ))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, toggleComplete, updateTodo}}>
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-900 via-purple-900 to-black py-12 px-2">
        <div className="w-full mx-auto shadow-lg rounded-xl bg-white/10 px-6 py-8 text-white">
          <h1 className="text-4xl font-extrabold text-center mb-10 mt-2 drop-shadow-lg">
            Manage Your Todos
          </h1>
          <div className="mb-8"><TodoForm /></div>
          <div className="flex flex-col gap-y-4">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

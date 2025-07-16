import { TodoForm } from "./TodoForm";
import { useState } from "react";
import "./Todo.css";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocalStorage";


export const Todo = () => {
    const [task, setTask] = useState(() => getLocalStorageData());

    // Todo input submit
    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;

        // to check the input field is empty or not.
        if (!content) return;

        // to check the data is exsting or not.
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content);

        if (ifTodoContentMatched) return;

        setTask((prevTask) => [...prevTask, { id, content, checked }]);
    };

    // todo add data to local storage
    setLocalStorageData(task);

    // Todo handleDeleteTodo function
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
    }

    // Todo handleClearButton function
    const handleClearButton = () => {
        setTask([]);
    };

    // Todo hanldeCheckedTodo function
    const hanldeCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked };
            } else {
                return curTask;
            }
        });
        setTask(updatedTask);
    }


    return (
        <section className="todo-container">
            <header>
                <h1>TODO List</h1>
                <TodoDate />
            </header>

            <TodoForm onAddTodo={handleFormSubmit} />

            <section className="myUnOrdList">
                <ul>
                    {
                        task.map((curTask) => {
                            return (
                                <TodoList
                                    key={curTask.id}
                                    data={curTask.content}
                                    checked={curTask.checked}
                                    onHandleDeleteTodo={handleDeleteTodo}
                                    onHandleCheckedTodo={hanldeCheckedTodo}
                                />
                            )
                        })
                    }
                </ul>
            </section>

            <section>
                <button className="clear-btn" onClick={handleClearButton}>Clear All</button>
            </section>
        </section>
    )
}
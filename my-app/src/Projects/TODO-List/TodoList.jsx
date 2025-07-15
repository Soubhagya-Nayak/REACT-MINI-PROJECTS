import { MdCheckCircle, MdDelete } from "react-icons/md"

export const TodoList = ({ data, checked, onHandleDeleteTodo, onHandleCheckedTodo}) => {
    return (
        <>
            <li className="todo-item">
                <span className={checked ? "checkList" : "notChecked"}>{data}</span>
                <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}><MdCheckCircle /></button>
                <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}><MdDelete /></button>
            </li>
        </>
    )
}
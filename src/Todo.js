import { useState } from "react";

function Todo() {
    const [newToDo, setNewToDo] = useState("");
    const [toDoArray, setToDoArray] = useState(["wash", "clean"]);
    return <div>
        <h1>

            To Do
        </h1>
        <input value={newToDo} onChange={event => setNewToDo(event.target.value)} ></input>
        <button onClick={() => {
            let newToDoArray = [...toDoArray, newToDo];
            setToDoArray(newToDoArray);
        }}>
            Submit
        </button>
        <h1>
            {newToDo}
        </h1>
        <ul>
            {toDoArray.map((todo, index) =>
                <li key={index}>
                    {todo}
                </li>)}
        </ul>
    </div>
}

export default Todo;
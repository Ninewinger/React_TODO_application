import React, { useState } from 'react';

function Todo() {
    const [todo, setTodo] = useState([]);
    console.log(todo)

    const lista = todo.map((todo, i) => {
        return <li className="list" key={i}>{todo}<button className="close" onClick={() => removeTask(i)}>X</button></li>
    })

    const handleKeypress = e => {
        if (e.keyCode === 13 && e.target.value !== "") {
            setTodo(todo.concat(e.target.value))
            e.target.value = ""
        }
    };

    function question() {
        if (todo.length === 0) {
            return "No tasks, add a task"
        }
        else {
            return "what need to be done"
        }
    }

    function removeTask(i) {
        var array = [...todo];
        console.log(i)
        array.splice(i, 1);
        setTodo(array);
    }
    
    function removeAll(){
        setTodo([])
    }

    return (
        <>
            <h1>todos</h1>
            <div id="contenedor">
                <input id="" type="text" placeholder={question()} onKeyUp={handleKeypress} />
                <ul>
                    {lista}
                    <li id="itemsLeft">{todo.length} items left</li>
                    <button className="rall" onClick={() => removeAll()}>Remove all tasks</button>
                </ul>
            </div>
        </>
    );
}

export default Todo;
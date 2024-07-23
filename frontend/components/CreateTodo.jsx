// CreateTodo.jsx
import { useState } from 'react';

export function CreateTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input 
                id="title"
                style={{ padding: "10px", margin: "10px", borderRadius: "5px" }}
                type="text" 
                placeholder="title"
                onChange={function(e) { setTitle(e.target.value); }}
            />
            <br/>
            <input 
                id="description"
                style={{ padding: "10px", margin: "10px", borderRadius: "5px" }}
                type="text"
                placeholder="description"
                onChange={function(e) { setDescription(e.target.value); }}
            />
            <br/>
            <button 
                style={{ padding: "10px", margin: "10px", borderRadius: "5px" }}
                onClick={function() {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                    .then(async function(res) { 
                        const json = await res.json()
                        addTodo(json);
                        console.log(json); 
                    })
                    
                }}
            >
                Add Task
            </button>
        </div>
    );
}

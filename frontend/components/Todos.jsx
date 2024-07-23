// Todos.jsx
export function Todos({ todos }) {
    return (
        <div>
            {todos.map(todo => (
                <div key={todo._id}>
                    <p style={{ fontWeight: "normal", fontSize: "18px" }}>
                        Task: {todo.title}
                    </p>
                    <p style={{ fontWeight: "normal", fontSize: "14px", color: "gray" }}>
                        Description: {todo.description}
                    </p>
                    <button>{todo.completed ? "Completed" : "Not Completed"}</button>
                </div>
            ))}
        </div>
    );
}

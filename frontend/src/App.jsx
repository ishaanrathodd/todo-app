// App.jsx
import { useState } from 'react';
import './App.css';
import { CreateTodo } from '../components/CreateTodo';
import { Todos } from '../components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]); // Update the todos state with the new todo
  };

  return (
    <div>
      <CreateTodo addTodo={addTodo} /> {/* Pass the addTodo function */}
      <Todos todos={todos} />
    </div>
  );
}

export default App;

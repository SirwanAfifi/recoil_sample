import { useRecoilState } from "recoil";
import { todosState } from "../store";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const toggleTodo = (id: string) =>
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  const removeTodo = (id: string) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <>
      <div className="row">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Completed?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.completed ? "✅" : ""}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info"
                    onClick={(_) => toggleTodo(todo.id!)}
                  >
                    Toggle
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(_) => removeTodo(todo.id!)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoList;

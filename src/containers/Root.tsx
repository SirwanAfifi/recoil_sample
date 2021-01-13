import { RecoilRoot } from "recoil";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
export const Root = () => (
  <RecoilRoot>
    <div className="container">
      <h1>Todos</h1>
      <AddTodo />
      <TodoList />
    </div>
  </RecoilRoot>
);

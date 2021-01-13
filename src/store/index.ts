import { atom, selector } from "recoil";

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

export const todosState = atom({
  key: "todos",
  default: [] as Todo[],
});

export const infoValue = selector({
  key: "infoValue",
  get: ({ get }) => ({
    total: get(todosState).length,
    completed: get(todosState).filter((todo) => todo.completed).length,
    notCompleted: get(todosState).filter((todo) => !todo.completed).length,
  }),
});

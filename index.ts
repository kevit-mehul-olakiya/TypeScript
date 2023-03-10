import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface ToDo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((response) => {
  const todo = response.data as ToDo;
  // console.log(response.data);

  const Id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(Id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(` ${id} and ${title} and also ${completed}`);
};

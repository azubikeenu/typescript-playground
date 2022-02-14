import axios from 'axios';
const url = 'http://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with id ${id}
    Has a title of ${title}
    and a completion status of ${completed}
  `);
};

axios
  .get(url)
  .then((response) => {
    const todo = response.data as Todo;
    const { id, title, completed } = todo;
    logToDo(id, title, completed);
  })
  .catch((err) => console.log(err));

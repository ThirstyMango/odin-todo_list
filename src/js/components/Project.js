export default class Project {
  #title;
  #description;
  #dueDate;
  #priority;
  #finished;
  #todos = [];

  constructor({ title, description, dueDate, priority, finished, todos }) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#finished = finished;
    this.#todos = todos.map((todo) => this.createTodo(todo));
  }

  // GETTERS AND SETTERS

  // title
  getTitle = () => this.#title;

  setTitle = (title) => (this.#title = title);

  // description
  getDescription = () => this.#description;

  setDescription = (description) => (this.#description = description);

  // dueDate
  getDueDate = () => this.#dueDate;

  setDueDate = (dueDate) => (this.#dueDate = dueDate);

  // priority
  getPriority = () => this.#priority;

  setPriority = (priority) => (this.#priority = priority);

  // finished
  getFinished = () => this.#finished;

  setFinished = (finished) => (this.#finished = finished);

  // todos
  getTodos = () => this.#todos;
}

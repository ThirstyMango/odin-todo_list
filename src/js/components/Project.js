import Todo from "./Todo";

export default class Project {
  #id;
  #title;
  #description;
  #dueDate;
  #priority;
  #open;
  #todos = [];

  constructor({ title, description, dueDate, priority, open, todos }) {
    this.#id = crypto.randomUUID();
    this.#title = title || undefined;
    this.#description = description || undefined;
    this.#dueDate = dueDate ? new Date(dueDate) : new Date();
    this.#priority = Number(priority) || 1;
    this.#open = Boolean(open) || false;
    this.#todos = todos || [];

    Object.freeze(this);
  }

  // todos
  getTodos = () => [...this.#todos];

  getTodo = (id) => this.#todos.filter((todo) => todo.getId() === id);

  // todo handling

  #createTodo(data) {
    return new Todo(data);
  }

  addTodo(data) {
    const todo = this.#createTodo(data);
    this.#todos.push(todo);
  }

  removeTodo(id) {
    this.#todos = this.#todos.filter((todo) => todo.getId() !== id);
  }

  // GETTERS AND SETTERS
  getId = () => this.#id;

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

  // open
  getOpen = () => this.#open;

  setOpen = (open) => (this.#open = open);
}

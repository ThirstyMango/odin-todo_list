import Todo from "./Todo";

export default class Project {
  #id;
  #title;
  #description;
  #due;
  #priority;
  #open;
  #todos = [];

  constructor({ title, description, due, priority, open, todos }) {
    this.#id = crypto.randomUUID();
    this.#title = title || "";
    this.#description = description || "";
    this.#due = due ? new Date(due) : undefined;
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

  /**
   *   @param {Object} data - data
   *   @param {String} data.title - title
   *   @param {String} data.description - description
   *   @param {Date} data.due - due date
   *   @param {Number} data.priority - priority
   *   @param {Boolean} data.open - open or closed
   *   @param {String} data.note - note
   */
  addTodo(data) {
    const todo = this.#createTodo(data);
    this.#todos.push(todo);
    return todo;
  }

  removeTodo(id) {
    const removeIndex = this.#todos.findIndex((todo) => todo.id === id);

    if (removeIndex === -1) {
      throw new Error("Todo not found");
    }

    const removedTodo = this.#todos.splice(removeIndex, 1);
    return removedTodo[0];
  }

  // GETTERS AND SETTERS
  getId = () => this.#id;

  // title
  getTitle = () => this.#title;

  setTitle = (title) => (this.#title = title);

  // description
  getDescription = () => this.#description;

  setDescription = (description) => (this.#description = description);

  // due
  getDue = () => this.#due;

  setDue = (due) => (this.#due = due);

  // priority
  getPriority = () => this.#priority;

  setPriority = (priority) => (this.#priority = priority);

  // open
  getOpen = () => this.#open;

  setOpen = (open) => (this.#open = open);
}

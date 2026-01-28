export default class Todo {
  #id;
  #title;
  #description;
  #due;
  #priority;
  #open;
  #note;

  constructor({ title, description, due, priority, open, note }) {
    this.#id = crypto.randomUUID();
    this.#title = title || "";
    this.#description = description || "";
    this.#due = due ? new Date(due) : new Date();
    this.#priority = Number(priority) || 1;
    this.#open = Boolean(open) || false;
    this.#note = note || "";

    Object.freeze(this);
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
  getopen = () => this.#open;

  setopen = (open) => (this.#open = open);

  // note
  getNote = () => this.#note;

  setNote = (note) => (this.#note = note);
}

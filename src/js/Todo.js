export default class Todo {
  #id;
  #title;
  #description;
  #dueDate;
  #priority;
  #finished;
  #note;

  constructor({ title, description, dueDate, priority, finished, note }) {
    this.#id = crypto.randomUUID();
    this.#title = title || undefined;
    this.#description = description || undefined;
    this.#dueDate = dueDate ? new Date(dueDate) : new Date();
    this.#priority = Number(priority) || 1;
    this.#finished = Boolean(finished) || false;
    this.#note = note || undefined;

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

  // dueDate
  getDueDate = () => this.#dueDate;

  setDueDate = (dueDate) => (this.#dueDate = dueDate);

  // priority
  getPriority = () => this.#priority;

  setPriority = (priority) => (this.#priority = priority);

  // finished
  getFinished = () => this.#finished;

  setFinished = (finished) => (this.#finished = finished);

  // note
  getNote = () => this.#note;

  setNote = (note) => (this.#note = note);
}

export default class Todo {
  #title;
  #description;
  #dueDate;
  #priority;
  #finished;
  #note;

  constructor({ title, description, dueDate, priority, finished, note }) {
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#finished = finished;
    this.#note = note;

    Object.freeze(this);
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

  // note
  getNote = () => this.#note;

  setNote = (note) => (this.#note = note);
}

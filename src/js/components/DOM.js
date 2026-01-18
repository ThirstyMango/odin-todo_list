export default class DOM {
  constructor() {
    this.#cacheDOM();
  }

  #cacheDOM() {
    this.todoList = document.querySelector(".list");
  }
}

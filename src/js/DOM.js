export default class DOM {
  constructor() {
    this.#cacheDOM();
  }

  #cacheDOM() {
    this.todoList = document.querySelector(".list");
    this.projectsList = document.querySelector(".projects__list");

    this.btnAddProject = document.querySelector("#btn-add-project");
    this.btnCloseProjectForm = document.querySelector(
      "#btn-close-project-form",
    );

    this.btnAddTodo = document.querySelector("#btn-add-todo");
    this.btnCloseTodoForm = document.querySelector("#btn-close-todo-form");

    this.formAddProject = document.querySelector("#form-add-project");
    this.formAddTodo = document.querySelector("#form-add-todo");

    this.projectHeader = document.querySelector("#project-name-header");
    this.projectDetails = document.querySelector("#project-details");

    this.recentlyFinishedTodos = document.querySelector(
      "#recently-finished-todos",
    );
  }
}

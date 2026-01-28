export default class DOM {
  constructor() {
    this.#cacheDOM();
  }

  #cacheDOM() {
    this.todoList = document.querySelector(".list");
    this.projectsList = document.querySelector(".projects__list");

    this.btnAddProject = document.querySelector("#btn-add-project");
    this.btnCloseForm = document.querySelector("#btn-close-form");

    this.formAddProject = document.querySelector("#form-add-project");

    this.projectHeader = document.querySelector("#project-name-header");
    this.projectDetails = document.querySelector("#project-details");
  }
}

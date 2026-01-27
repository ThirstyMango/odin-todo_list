import "./style.css";
import "./css/boilerplate.css";
import "./css/main.css";
import "./css/nav.css";
import "./css/sidebar.css";
import Library from "./js/Library";
import View from "./js/View";
import DOM from "./js/DOM";

new (class Controller {
  constructor(library, view, dom) {
    this.library = library || undefined;
    this.view = view || undefined;
    this.dom = dom || undefined;

    this.#bindEvents();

    // this.library.addProject({
    //   title: "Project 1",
    //   description: "A new project",
    //   dueDate: "1.1.2021",
    //   priority: 1,
    //   open: false,
    // });
    // const todo = this.library.addTodo({
    //   title: "Todo 1",
    //   description: "Not so important todo",
    //   dueDate: "1.2.2022",
    // });
    // this.view.renderTodo(this.dom.todoList, todo);
  }

  #bindEvents() {
    this.dom.btnAddProject.addEventListener("click", () =>
      this.switchElements(this.dom.btnAddProject, this.dom.formAddProject),
    );
    this.dom.btnCloseForm.addEventListener("click", () =>
      this.switchElements(this.dom.btnAddProject, this.dom.formAddProject),
    );
    this.dom.formAddProject.addEventListener("submit", (e) =>
      this.handleProjectAdd(e),
    );
  }

  switchElements(el1, el2) {
    this.view.toggleElements(el1, el2);
  }

  handleProjectAdd(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const [title, description, due, priority] = [
      formData.get("title"),
      formData.get("description"),
      formData.get("due"),
      formData.get("priority"),
    ];

    const projectObj = this.library.addProject({
      title,
      description,
      due,
      priority,
    });

    this.view.renderProject(this.dom.projectsList, projectObj);
    this.view.clearForm(this.dom.formAddProject);

    this.switchElements(this.dom.btnAddProject, this.dom.formAddProject);
  }

  isNewProjectValid(title, description, due, priority) {
    return true;
  }
})(new Library(), new View(), new DOM());

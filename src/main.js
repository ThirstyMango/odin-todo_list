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

    // If cached
    this.library.fetch();
  }

  #bindEvents() {
    this.dom.btnAddProject.addEventListener("click", () =>
      this.view.toggleElements(this.dom.btnAddProject, this.dom.formAddProject),
    );
    this.dom.btnCloseProjectForm.addEventListener("click", () =>
      this.view.toggleElements(this.dom.btnAddProject, this.dom.formAddProject),
    );
    this.dom.btnAddTodo.addEventListener("click", () =>
      this.view.toggleElements(
        this.dom.btnAddTodo,
        this.dom.formAddTodo,
        this.dom.recentlyFinishedTodos,
      ),
    );
    this.dom.btnCloseTodoForm.addEventListener("click", () =>
      this.view.toggleElements(
        this.dom.btnAddTodo,
        this.dom.formAddTodo,
        this.dom.recentlyFinishedTodos,
      ),
    );
    this.dom.formAddProject.addEventListener("submit", (e) =>
      this.handleProjectAdd(e),
    );
    this.dom.projectsList.addEventListener("click", (e) =>
      this.handleProjectClick(e),
    );
  }

  handleTodoAdd(e) {
    e.preventDefault();
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

    this.library.addProject();
    this.library.save();

    const project = this.library.addProject({
      title,
      description,
      due,
      priority,
    });

    this.view.renderProject(
      this.dom.projectsList,
      this.dom.projectHeader,
      this.dom.projectDetails,
      project,
    );
    this.view.clearForm(this.dom.formAddProject);

    this.view.toggleElements(this.dom.btnAddProject, this.dom.formAddProject);
  }

  handleProjectClick(e) {
    if (!e.target.dataset.obj === "project") return;

    const projectId = e.target.closest("[data-project-id]").dataset.projectId; //.dataset["project-id"];

    const project = this.library.getProject(projectId);

    this.view.renderProjectPage(
      this.dom.projectHeader,
      this.dom.projectDetails,
      project,
    );
  }
})(new Library(), new View(), new DOM());

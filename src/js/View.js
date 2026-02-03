import { format } from "date-fns";

export default class View {
  // Renders
  renderTodo(container, todo) {
    const content = `
    <li class="todo">
        <p class="todo__title">${todo.getTitle()}</p>
        <p class="todo__description">${todo.getDescription()}</p>
        <p class="todo__due">${todo.getdue()}</p>
        <p class="todo__priority">${todo.getPriority()}</p>
        <p class="todo__finished">${todo.getFinished()}</p>
        <p class="todo__note">${todo.getNote()}</p>
    </li>
    `;

    container.innerHTML += content;
  }

  renderTodos(container, todos) {
    container.innerHTML = "";
    todos.forEach((todo) => this.renderTodo(container, todo));
  }

  renderProject(menuContainer, nameContainer, detailsContainer, project) {
    this.renderProjectMenu(menuContainer, project);
    this.renderProjectPage(nameContainer, detailsContainer, project);
  }

  renderProjectPage(nameContainer, detailsContainer, project) {
    this.renderProjectName(nameContainer, project);
    this.renderProjectDetails(detailsContainer, project);
  }

  renderProjectMenu(container, project) {
    const content = `
        <li class="project" data-project-id="${project.getId()}">
           <p class="project__name" data-obj="project"><a href="#">${project.getTitle()}</a></p>
        </li>
    `;
    // <p class="project__due">${project.getDue() ? "get" + project.getDue() : ""}</p>
    this.addContent(container, content);
  }

  renderProjectName(container, project) {
    this.clearContent(container);
    const content = `${project.getTitle()}`;
    this.addContent(container, content);
  }

  renderProjectDetails(container, project) {
    this.clearContent(container);
    const priorityNames = ["Low", "Medium", "High"];
    const content = `

            <h3 class="article__header">Project details</h3>
            <div
              class="article__content article__content--user"
            >
              <div class="infobox">
                    <h3 class="infobox__header">Title:</h3>
                    <p class="infobox__content">${project.getTitle()}</p>
                </div>
                <hr />
                <div class="infobox">
                    <h3 class="infobox__header">Description:</h3>
                    <p class="infobox__content">${project.getDescription() || "Not assigned"}</p>
                </div>
                <hr />
                <div class="infobox">
                    <h3 class="infobox__header">Due:</h3>
                    <p class="infobox__content">${project.getDue() ? format(project.getDue(), "d MMMM Y HH':'m") : "Not assigned"}</p>
                </div>
                <hr />
                <div class="infobox">
                    <h3 class="infobox__header">Priority:</h3>
                    <p class="infobox__content">${project.getPriority() ? priorityNames[project.getPriority()] : "Not assigned"}</p>
                </div>
                <hr />
                <div class="infobox">
                    <h3 class="infobox__header">Open:</h3>
                    <p class="infobox__content">${project.getOpen() ? "Open" : "Closed"}</p>
                </div>
                <hr />
                <button type="button" class="btn" data-project-id="${project.getId()}">Edit project</button>
            </div>
    `;
    this.addContent(container, content);
  }

  renderProjects(container, projects) {
    projects.forEach((project) => this.renderProject(container, project));
  }

  // Helper functions
  addContent(el, content) {
    el.innerHTML += content;
  }

  clearContent(el) {
    el.innerHTML = "";
  }

  toggleElements(...els) {
    els.forEach((el) => this.toggleElement(el));
  }

  toggleElement(el) {
    if (!el) throw new Error("Element not found");

    const hidden = el.classList.contains("hidden") ? true : false;

    if (!hidden) {
      this.hideElement(el);
      return;
    }

    this.showElement(el);
  }

  hideElement(el) {
    el.classList.add("hidden");
  }

  showElement(el) {
    el.classList.remove("hidden");
  }

  clearForm(el) {
    el.reset();
  }
}

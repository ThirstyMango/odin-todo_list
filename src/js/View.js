export default class View {
  renderTodo(container, todo) {
    const content = `
    <li class="todo">
        <p class="todo__title">${todo.getTitle()}</p>
        <p class="todo__description">${todo.getDescription()}</p>
        <p class="todo__dueDate">${todo.getDueDate()}</p>
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

  renderProject(container, project) {
    const content = `
        <li class="project" id="project-${project.getId()}">
           <p class="project__name"><a href="#">${project.getTitle()}</a></p>
        </li>
    `;
    container.innerHTML += content;
  }

  renderProjects(container, projects) {
    projects.forEach((project) => this.renderProject(container, project));
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

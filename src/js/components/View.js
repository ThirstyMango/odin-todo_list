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

    container.innerHTML = content;
  }

  renderTodos(container, todos) {
    todos.forEach((todo) => this.renderTodo(container, todo));
  }
}

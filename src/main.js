import Library from "./js/components/Library";
import View from "./js/components/View";
import DOM from "./js/components/DOM";

new (class Controller {
  constructor(library, view, dom) {
    this.library = library || undefined;
    this.view = view || undefined;
    this.dom = dom || undefined;

    this.library.addProject({
      title: "Project 1",
      description: "A new project",
      dueDate: "1.1.2021",
      priority: 1,
      open: false,
    });

    const todo = this.library.addTodo({
      title: "Todo 1",
      description: "Not so important todo",
      dueDate: "1.2.2022",
    });

    this.view.renderTodo(this.dom.todoList, todo);
  }
})(new Library(), new View(), new DOM());

import Project from "./Project";

export default class Library {
  #projects;

  constructor(projects = []) {
    this.#projects = projects;

    Object.freeze(this);
  }

  getProjects = () => [...this.#projects];

  getProject = (id) => this.#projects.find((project) => project.getId() === id);

  #createProject(projectData = {}) {
    return new Project(projectData);
  }

  removeProject(id) {
    const removeIndex = this.#projects.findIndex(
      (project) => project.getId() === id,
    );

    if (removeIndex === -1) {
      throw new Error("Project not found.");
    }

    const removedProject = this.#projects.splice(removeIndex, 1);
    return removedProject[0];
  }

  /**
   *   @param {Object} data - data
   *   @param {String} data.title - title
   *   @param {String} data.description - description
   *   @param {Date} data.due - due date
   *   @param {Number} data.priority - priority
   *   @param {Boolean} data.open - open or closed
   *   @param {Array} data.todos - assigned todos to the project
   */

  addProject(data) {
    const project = this.#createProject(data);
    this.#projects.push(project);
    return project;
  }

  removeTodo(id, projectId) {
    const project = this.getProject(projectId);
    return project.removeTodo(id);
  }

  addTodo(data, projectId) {
    const project = this.getProject(projectId);
    return project.addTodo(data);
  }
}

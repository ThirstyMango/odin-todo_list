import Project from "./Project";

export default class Library {
  #projects;
  #currProject;

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

    this.#projects.splice(removeIndex, 1);
  }

  addProject(data) {
    const project = this.#createProject(data);
    this.#projects.push(project);
    this.#currProject = project;
  }

  removeTodo(id, projectId) {
    projectId = projectId || this.#currProject.getId();

    const project = this.getProject(projectId);

    project.removeTodo(id);
    console.log(project.getTodos());
  }

  addTodo(data, projectId) {
    projectId = projectId || this.#currProject.getId();
    const project = this.getProject(projectId);
    project.addTodo(data);
  }
}

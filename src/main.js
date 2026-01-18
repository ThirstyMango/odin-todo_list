import Library from "./js/components/Library";
import View from "./js/components/View";
import DOM from "./js/components/DOM";

new (class Controller {
  constructor(library, view = null, dom = null) {}
})(new Library());

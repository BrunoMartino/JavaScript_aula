import outsideClick from "./outsideclick.js";
export default class initDropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);

    //define argumentos padrão no caso do usuário não definir
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.handleClick = this.handleClick.bind(this);
  }
  // Ativa o dropdownMenu e e adiciona função
  // que observa o clique fora dele
  handleClick(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add("ativo");
    outsideClick(element, this.events, () => {
      element.classList.remove("ativo");
    });
  }
  // adiciona os eventos ao dropdownmenu
  addDropdownMenuEvents() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.handleClick);
      });
    });
  }
  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvents();
    }
    return this;
  }
}

import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];
  if (menuButton) {
    function openMenu(event) {
      if (event.type === "touchstart") event.preventDefault();
      menuList.classList.add("ativo");
      menuButton.classList.add("ativo");
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("ativo");
        menuButton.classList.remove("ativo");
      });
    }
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
}

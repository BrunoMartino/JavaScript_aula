import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/animacao-scroll.js";
import Accordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu_mobile.js";
import initDate from "./modules/date_object.js";
import initFetchAnimais from "./modules/fetchAnimais.js";
import initFetchBitcoin from "./modules/fetchBitcoin.js";
import initNumerosAnimal from "./modules/numerosAnimal.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initDate();
initFetchAnimais();
initFetchBitcoin();
initNumerosAnimal();
initAnimacaoScroll();

export default class NumerosAnimal {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  // recebe um elemento do Dom, com numero em seu texto
  // incrementa de 0 até numero total
  static incremenarNumero(numero) {
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  // ativa incrementar numero para cada numero selecionado no DOM
  animaNumeros() {
    this.numeros.forEach((numero) => {
      this.constructor.incremenarNumero(numero);
    });
  }
  // funcao que ocorre quando a mutaçao é observada
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  // Adiciona MutationObserver para verificar
  //quanto a classe ativo é adicionada ao elemento target
  AddMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) {
      this.AddMutationObserver();
    }
    return this;
  }
}

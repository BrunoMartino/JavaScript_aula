import NumerosAnimal from "./numerosAnimal.js";

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span> `;
    return div;
  }
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaanimaisNumeros() {
    const animalNumeros = new NumerosAnimal(
      "[data-numero]",
      ".numeros",
      "ativo"
    );
    animalNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      animaisJson.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaanimaisNumeros();

      const animalNumeros = new NumerosAnimal(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animalNumeros.init();
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  return criarAnimais();
}

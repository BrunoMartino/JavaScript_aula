export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((r) => r.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);
      const doarPreco = (1000 / json.BRL.sell).toFixed(4);
      btcPreco.innerText = "BTC " + doarPreco.replace(".", ",");
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
//

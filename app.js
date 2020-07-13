const boton = document.querySelector("#btn");
const body = document.querySelector("body");
const tweetBtn = document.querySelector("#bird");
const quote = document.querySelector("#quote ");
const autor = document.querySelector("#author");
const colores = [
  "#34F6F2",
  "#7D53DE",
  "#78E3FD",
  "#F96F5D",
  "#F18F01",
  "#EA2B1F",
  "#27FB6B",
  "0A2E36",
  "#45F0DF",
  "#FFC857",
  "#00A8E8",
];

boton.addEventListener("click", () => {
  const frase = fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
  )
    .then((response) => response.json())
    .then((data) => {
      quote.textContent =
        data.quotes[parseInt(Math.random() * data.quotes.length)].quote;

      autor.textContent =
        data.quotes[parseInt(Math.random() * data.quotes.length)].author;
    });

  let color = parseInt(Math.random() * colores.length);
  body.style.backgroundColor = colores[color];

  boton.style.backgroundColor = colores[color];
});

//parseInt(Math.random() * colors.length);

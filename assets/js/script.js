// Globales //
var firstNumber = document.querySelector("#firstNumber");
var secondNumber = document.querySelector("#secondNumber");
var thirdNumber = document.querySelector("#thirdNumber");

// Parte 1 //
var imgWrapper = document.querySelector("#img-wrapper");

const onClickHandlerFirst = () => {
  if (imgWrapper.style.border) {
    imgWrapper.style.border = "";
  } else {
    imgWrapper.style.border = "solid red 2px";
  }
};

// Parte 2 //
const onClickHandlerSecond = () => {
  var firstNumberValue = Number(firstNumber.value);
  var secondNumberValue = Number(secondNumber.value);
  var thirdNumberValue = Number(thirdNumber.value);

  var message = document.getElementById("message")

  var totalStickers = firstNumberValue + secondNumberValue + thirdNumberValue;

  if (totalStickers <= 10) {
    message.innerHTML = `<p>Llevas ${totalStickers} stickers.</p>`;
  } else {
    message.innerHTML = `<p>Llevas demasiados stickers.</p>`;
  }
};
// Parte 3 //
const onClickHandlerThird = () => {
  var firstNumberValue = firstNumber.value;
  var secondNumberValue = secondNumber.value;
  var thirdNumberValue = thirdNumber.value;

  var password = `${firstNumberValue}${secondNumberValue}${thirdNumberValue}`;

  if (password == 911) {
    document.getElementById("message").innerHTML = `<p>password 1 correcto</p>`;
  } else if (password == 714) {
    document.getElementById("message").innerHTML = `<p>password 2 correcto</p>`;
  } else {
    document.getElementById("message").innerHTML = `<p>password incorrecto</p>`;
  }
};

// Botones pagina siguiente-previa //

const nextPage = () => {
  var pageNumber = document.querySelector("#pageNumber");

  if (pageNumber.value == "first") {
    window.location.href = "./parte-dos.html";
    return;
  } else if (pageNumber.value == "second") {
    window.location.href = "./parte-tres.html";
    return;
  } else {
    window.location.href = "./index.html";
    return;
  }
};

const prevPage = () => {
  var pageNumberPrev = document.querySelector("#pageNumberPrev");

  if (pageNumberPrev.value == "second") {
    window.location.href = "./index.html";
    return;
  } else {
    window.location.href = "./parte-dos.html";
  }
};

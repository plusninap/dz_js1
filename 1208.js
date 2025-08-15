function playGame() {
  const player = document.getElementById("playerChoice").value.toLowerCase();
  const randomNum = Math.floor(Math.random() * 3); // 0, 1 или 2
  let computer;

  // Превращаем число в выбор компьютера
  if (randomNum === 0) computer = "камень";
  else if (randomNum === 1) computer = "ножницы";
  else computer = "бумага";

  if (player !== "камень" && player !== "ножницы" && player !== "бумага") {
    document.getElementById("gameResult").innerText = "Ошибка! Введите 'камень', 'ножницы' или 'бумага'.";
    return;
  }

  if (player === computer) {
    document.getElementById("gameResult").innerText = `Ничья! Оба выбрали ${computer}.`;
  } else if (
    (player === "камень" && computer === "ножницы") ||
    (player === "ножницы" && computer === "бумага") ||
    (player === "бумага" && computer === "камень")
  ) {
    document.getElementById("gameResult").innerText = `Вы победили! Компьютер выбрал ${computer}.`;
  } else {
    document.getElementById("gameResult").innerText = `Вы проиграли! Компьютер выбрал ${computer}.`;
  }
}
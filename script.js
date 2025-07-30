document.addEventListener("DOMContentLoaded", () => {
  const game = document.getElementById("game");
  const message = document.getElementById("message");
  const counter = document.getElementById("counter");

  const totalCats = 5;
  let foundCats = 0;

  function createCat(id) {
    const cat = document.createElement("div");
    cat.classList.add("cat");
    cat.style.backgroundImage = `url('cat${id}.png')`;

    const gameWidth = game.clientWidth;
    const gameHeight = game.clientHeight;
    const catSize = 50;

    const x = Math.random() * (gameWidth - catSize);
    const y = Math.random() * (gameHeight - catSize);

    cat.style.left = `${x}px`;
    cat.style.top = `${y}px`;

    cat.addEventListener("click", () => {
      if (!cat.classList.contains("found")) {
        cat.classList.add("found");
        cat.style.filter = "grayscale(100%)";
        foundCats++;
        counter.textContent = `Cats Found: ${foundCats} / ${totalCats}`;
        if (foundCats === totalCats) {
          message.textContent = "🎉 You found all the cats! 🎉";
        }
      }
    });

    game.appendChild(cat);
    cat.style.display = "block";
  }

  for (let i = 1; i <= totalCats; i++) {
    createCat(i);
  }
});

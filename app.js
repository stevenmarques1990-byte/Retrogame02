async function loadGames() {
  const main = document.getElementById('main');
  main.innerHTML = '';

  const res = await fetch('retro_games.json');
  const data = await res.json();

  for (const consoleName in data) {
    const consoleDiv = document.createElement('div');
    consoleDiv.className = 'console';
    
    const h2 = document.createElement('h2');
    h2.textContent = consoleName;
    consoleDiv.appendChild(h2);

    data[consoleName].forEach(game => {
      const gameDiv = document.createElement('div');
      gameDiv.className = 'game';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = game.owned;
      checkbox.addEventListener('change', () => game.owned = checkbox.checked);

      const img = document.createElement('img');
      img.src = game.img;
      img.alt = game.name;

      const label = document.createElement('label');
      label.textContent = game.name;

      gameDiv.appendChild(checkbox);
      gameDiv.appendChild(img);
      gameDiv.appendChild(label);
      consoleDiv.appendChild(gameDiv);
    });

    main.appendChild(consoleDiv);
  }
}

loadGames();

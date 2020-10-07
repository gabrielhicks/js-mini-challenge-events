/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/
/***** Deliverable 1 *****/
const header = document.querySelector("#header");

function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

header.addEventListener("click", e => {
  toggleColor(header);
});

/***** Deliverable 2 *****/
const form = document.querySelector("form");

form.addEventListener("submit", e => {
  e.preventDefault();
  const submit = e.target;
  const number = submit["number"].value
  const name = submit["name"].value
  const nickname = submit["nickname"].value
  const photo = submit["photo"].value

  const newPlayer = {
    number: number,
    name: name,
    nickname: nickname,
    photo: photo,
    likes: 1000
  };
  renderPlayer(newPlayer);
});

/***** Deliverable 3 *****/

document.addEventListener("click", e => {
  e.preventDefault();
  if(e.target.matches(".like-button")) {
    e.target.previousElementSibling.innerHTML = `${parseInt(e.target.previousElementSibling.innerHTML) + 1} likes`
  }
});
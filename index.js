document.querySelector("form").addEventListener("submit", addGame);
const message = document.querySelector('#message')
function addGame(event) {
  event.preventDefault();
  let inputField = document.querySelector('input')
  const game = document.createElement('li')
  const gameTitle = document.createElement("span");
  gameTitle.textContent = inputField.value;
  gameTitle.addEventListener("click", completeGame);
  game.appendChild(gameTitle)

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("id", "deleteButton")
  deleteBtn.addEventListener("click", deleteGame);
  game.appendChild(deleteBtn);

  const list = document.querySelector("ul");
  list.appendChild(game);
  inputField.value = ''
}

function deleteGame(event) {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    
    message.textContent = `Game deleted!`

    revealMessage()

    event.target.parentNode.remove();
}

function completeGame(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {        
        message.textContent = `You completed ${event.target.textContent}, great job!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }

    revealMessage()
}

function revealMessage() {
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}
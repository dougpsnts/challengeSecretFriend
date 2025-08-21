let friendsArray = [];
let shuffledArray = [];
const addButton = document.querySelector('.add-btn');
const nameInput = document.querySelector('.input-name');
const drawBtn = document.querySelector('.draw-btn');
const errMsg1 = document.querySelector('.error-message1');
const errMsg2 = document.querySelector('.error-message2');
const nameTags = document.querySelector('.name-tags');
const secretName = document.querySelector('.secret-name');
const eyeIcon = document.querySelector('.hidden-icon');
const hideBtn = document.querySelector('.hide-btn');
const resetBtn = document.querySelector('.reset-btn');

/* Allows to confirm the input pressing Enter */
nameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addFriend();
  }
});

/* Adds a new friend to the list */
function addFriend() {
  const name = nameInput.value.trim();

  if (name && !friendsArray.includes(name)) {
    friendsArray.push(name);
    shuffledArray = [...friendsArray]; // Create a copy of the friendsArray for drawing
    nameInput.value = '';
    errMsg1.hidden = true;
    renderNameTags();
  } else {
    errMsg1.hidden = false;
  }
}

/* Updates and shows the current list of names */
function renderNameTags() {
  nameTags.innerHTML = "";
  friendsArray.forEach(friend => {
    nameTags.innerHTML += `<span class="tag">${friend}<button class="remove-tag" onclick="eraseFriend('${friend}')">&times;</button></span>`;
  });
  if (friendsArray == "") {
    resetBtn.disabled = true;
    drawBtn.disabled = true;
  } else {
    resetBtn.disabled = false;
    drawBtn.disabled = false;
  }
}

/* Removes a friend from the list */
function eraseFriend(friend) {
    friendsArray = friendsArray.filter(item => item !== friend);
    renderNameTags();
    errMsg1.hidden = true;
    if (friendsArray.length === 0) {
        resetBtn.disabled = true;
        drawBtn.disabled = true;
    }
}

/* Picks a random name to be the Secret Friend */
function drawFriend() {
    const sortedFriend = shuffledArray[parseInt(Math.random() * shuffledArray.length + 1) - 1];

  if (shuffledArray.length < 1) {
    secretName.textContent = "";
    errMsg2.hidden = false;
    hideBtn.disabled = true;
    drawBtn.disabled = true;
  } else {
    let pickName = sortedFriend;
    secretName.textContent = `${pickName}!`;
    shuffledArray = shuffledArray.filter(friend => friend !== sortedFriend);
    hideBtn.disabled = false;
  }
  eyeIcon.hidden = false;
  secretName.hidden = true;
  hideName();
}


/* Hides or shows sorted name */
function hideName() {
  if (eyeIcon.hidden == false && secretName.hidden == true) {
    eyeIcon.hidden = true;
    secretName.hidden = false;
    hideBtn.innerHTML = `<span class="icon"><i class="fa-solid fa-eye-slash"></i></span><p>Hide secret name</p>`;
  } else {
    secretName.hidden = true;
    eyeIcon.hidden = false;
    hideBtn.innerHTML = `<span class="icon"><i class="fa-solid fa-eye"></i></span><p>Show secret name</p>`;
  }
  hideBtn.active = true;
}

/* Wipes everything and start a fresh new game */
function resetGame() {
  friendsArray = [];
  shuffledArray = [];
  drawBtn.disabled = true;
  hideBtn.disabled = true;
  resetBtn.disabled = true;
  eyeIcon.hidden = true;
  secretName.hidden = true;
  secretName.innerHTML = "";
  errMsg2.hidden = true;
  renderNameTags();
}
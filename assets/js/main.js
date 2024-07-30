const userName = document.querySelector("#username");
const nameMessage = document.querySelector("#username-message");

const age = document.querySelector("#age");
const ageMessage = document.querySelector("#age-message");

const sendBtn = document.querySelector("#sendBtn");

const tbody = document.querySelector("#tbody");

const users = [];
sendBtn.addEventListener("click", () => {
  if (userName.value.trim() === "") {
    ageMessage.innerHTML = "";
    nameMessage.innerHTML = "Please fill in this field";
  } else if (userName.value.length < 4) {
    nameMessage.innerHTML = "Username must be at least 4 characters long";
  } else if (age.value.trim() === "") {
    nameMessage.innerHTML = "";
    ageMessage.innerHTML = "Please fill in this field";
  } else if (age.value < 18) {
    nameMessage.innerHTML = "";
    ageMessage.innerHTML = "You can not be under 18";
  } else if (age.value > 65) {
    nameMessage.innerHTML = "";
    ageMessage.innerHTML = "You can not be over 65";
  } else {
    ageMessage.innerHTML = "";
    nameMessage.innerHTML = "";

    const user = {
      username: userName.value,
      age: age.value,
      id: 0,
    };
    users.push(user);
    user.id = users.length;

    tbody.innerHTML += `
                <tr id="row">
                <td>${users.indexOf(user) + 1}</td>
                <td>${user.username}</td>
                <td>${user.age}</td>
                <td><button class="btn-delete"><i class="fa-regular fa-trash-can delete-icon"></i></button></td>
                </tr>
                `;
    userName.value = "";
    age.value = "";
    console.log(user);
  }
});

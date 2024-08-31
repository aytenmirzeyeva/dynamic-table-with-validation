document.addEventListener("DOMContentLoaded", () => {
  const userName = document.querySelector("#username");
  const nameMessage = document.querySelector("#username-message");

  const age = document.querySelector("#age");
  const ageMessage = document.querySelector("#age-message");
  const userForm = document.querySelector("#user-form");

  const tbody = document.querySelector("#tbody");

  const users = [];
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (userName.value.trim() === "") {
      ageMessage.innerHTML = "";
      nameMessage.innerHTML = "Please fill in this field";
    } else if (userName.value.length < 4) {
      nameMessage.innerHTML = "Username must be at least 4 characters long";
    } else if (age.value.trim() === "") {
      nameMessage.innerHTML = "";
      ageMessage.innerHTML = "Please fill in this field";
    } else if (age.value < 18 || age.value > 65) {
      nameMessage.innerHTML = "";
      ageMessage.innerHTML = "Please enter 18-65 age";
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
                <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.age}</td>
                <td><button id="delete-button"><i class="fa-regular fa-trash-can"></i></button></td>
                </tr>
                `;
      userName.value = "";
      age.value = "";
    }
  });
  tbody.addEventListener("click", (e) => {
    if (e.target.closest("#delete-button")) {
      const row = e.target.closest("tr");
      if (row) {
        row.remove();
      }
    }
  });
});

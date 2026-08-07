let forgotBtn = document.getElementById("forgot-btn");
forgotBtn.addEventListener("click", function () {
  window.location.href = "../index.html";
});

let registerBtn = document.getElementById("register-btn");
registerBtn.addEventListener("click", () => {
   
  let userName = document.getElementById("user-name");
  let email = document.getElementById("email")
  let phone = document.getElementById("phone")
  let address = document.getElementById("address")
  let password = document.getElementById("password")
  let confirmPassword = document.getElementById("confirm-password")
  console.log(userName.value);
  console.log(email.value);
  console.log(phone.value);
  console.log(address.value);
  console.log(password.value);
});

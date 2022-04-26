var generateBtn = document.querySelector("#generate");
const password = document.querySelector("#password");
const button = document.querySelector("button");
let characetrs =
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%*^&()_+{}:"<>:?[]/£,.';
let passwordLenght = 9;
let passwordValue = "";
const createPassword = () => {
  passwordValue = "";
  for (let i = 0; i < passwordLenght; i++) {
    let number = Math.floor(Math.random() * characetrs.length);
    passwordValue += characetrs.substring(number, number + 1);
  }
  password.value = passwordValue;
};
button.addEventListener("click", createPassword);

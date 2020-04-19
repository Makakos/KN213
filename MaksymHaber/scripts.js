var button = document.getElementById("check");

function mail_check() {
  //за допомогою регулярних виразів перевіряється правильність вводу пошти
  //парль обов'язково починається з літери,обов'язково має символ @
  var regex1 = new RegExp("^[A-Za-z][A-Za-z0-9]*@[a-z]*.com");
  var mail = document.getElementById("mail").value;
  var match1 = regex1.exec(mail);
  var mail_check = true;

  if (match1 === null) {
    //перевіряє чи написано щось у полі пошти
    if (mail == "") {
      alert("Please enter your male");
    } else {
      alert("Wrong male. Try again");
    }
  } else {
    if (mail.localeCompare(match1[0]) == 0 && match1.length == 1) {
      mail_check = true;
    } else {
      alert("Wrong male. Try again");
    }
  }
  return mail_check;
}
function password_check() {
  //за допомогою регулярних виразів перевіряється правильність вводу паролю
  //пароль може мати від 5 до 25 символів
  var regex2 = new RegExp("[A-Za-z0-9]{5,25}");

  var regex3 = new RegExp("[A-Z]");

  var regex4 = new RegExp("[a-z]");
  var password = document.getElementById("password").value;
  var match2 = regex2.exec(password);
  var pass_check = false;

  if (match2 === null) {
    if (password == "" || password.length < 5) {
      alert("Password must consist at least 5 symbols");
    } else {
      alert("Wrong password. Try again");
    }
  } else {
    //пароль обов'язково має мати принаймні 1 велику літеру
    if (regex3.test(password)) {
      //пароль обов'язково має мати принаймні 1 маленьку літеру
      if (regex4.test(password)) {
        pass_check = true;
      } else {
        pass_check = false;
        alert("Password must contain at least 1 lowercase letter");
      }
    } else {
      pass_check = false;
      alert("Password must contain at least 1 uppercase letter");
    }
  }
  return pass_check;
}
function checkbox_check() {
  var checkbox_check;
  if (!document.getElementById("checkbox").checked) {
    alert("Please mark that you agree with privacy policy");
    checkbox_check = false;
  } else {
    checkbox_check = true;
  }
  return checkbox_check;
}
function registration_check() {
  //чи правильно введено пошту
  var mail = mail_check();
  //чи правильно введено пароль
  var password = password_check();
  //чи відмічений checkbox
  var checkbox = checkbox_check();

  //якщо пошта і пароль введені правильно виводиться відповідне повідомлення
  if ((mail == true) & (password == true) & (checkbox == true)) {
    alert("You logged in");
  } else {
    return false;
  }
}

function mail_regex_check() {
  var regex1 = new RegExp("^[A-Za-z][A-Za-z0-9]*@[a-z]*.com");
  var mail = document.getElementById("mail").value;
  var match1 = regex1.exec(mail);
  if (match1 === null) {
    return false;
  } else {
    if (mail.localeCompare(match1[0]) == 0 && match1.length == 1) {
      return true;
    } else {
      return false;
    }
  }
}
function password_regex_check() {
  var regex2 = new RegExp("[A-Za-z0-9]{5,25}");

  var regex3 = new RegExp("[A-Z]");

  var regex4 = new RegExp("[a-z]");
  var password = document.getElementById("password").value;
  if (regex2.test(password)) {
    if (regex3.test(password)) {
      //пароль обов'язково має мати принаймні 1 маленьку літеру
      if (regex4.test(password)) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
}
//перевіряє чи правильно заповнені поля пошти і пароля та перевіряє чи відмічений checkbox
button.addEventListener("click", registration_check);

var mail = document.getElementById("mail");
function mail_backlight() {
  var mail_ch = mail_regex_check();
  mail.style.outline = "none";
  if (mail_ch == false) mail.style.border = "3px solid red";
  else if (mail_ch == true) mail.style.border = "3px solid green";
}
var password = document.getElementById("password");
function password_backlight() {
  var pass_ch = password_regex_check();
  password.style.outline = "none";
  if (pass_ch == false) password.style.border = "3px solid red";
  else if (pass_ch == true) password.style.border = "3px solid green";
}

mail.addEventListener("keyup", mail_backlight);
password.addEventListener("keyup", password_backlight);

mail.addEventListener("blur", () => {
  mail.style.border = null;
});
password.addEventListener("blur", () => {
  password.style.border = null;
});

var res1 = document.querySelector(".ch1");
function theme1() {
  var h = document.getElementById("header");
  var reg = document.getElementById("registration");
  var block = document.getElementById("block1");
  var footer = document.getElementById("footer");
  var pannel = document.querySelectorAll(".pannel li a");
  var feedback = document.querySelector(".feedback");
  var theme1 = document.querySelector(".theme1");
  var theme2 = document.querySelector(".theme2");
  h.style.background = "#1e1c16";
  reg.style.backgroundColor = "rgba(121, 24, 231, 0.8)";
  reg.style.color = "#fdfdd8";
  block.style.backgroundImage = "url(black.jpg)";
  footer.style.background = "#1f1714";
  footer.style.color = "#fdfdd8";
  for (let elem of pannel) {
    elem.style.color = "#fdfdd8";
    elem.style.backgroundColor = "#1e1c16";
  }
  feedback.style.backgroundImage = "url(black2.jpg)";
  theme1.style.display = "none";
  theme2.style.display = "inline";
}
res1.addEventListener("click", theme1);

var res2 = document.querySelector(".ch2");
function theme2() {
  var h = document.getElementById("header");
  var reg = document.getElementById("registration");
  var block = document.getElementById("block1");
  var footer = document.getElementById("footer");
  var pannel = document.querySelectorAll(".pannel li a");
  var feedback = document.querySelector(".feedback");
  var theme1 = document.querySelector(".theme1");
  var theme2 = document.querySelector(".theme2");

  h.style.background = null;
  reg.style.backgroundColor = null;
  reg.style.color = null;
  block.style.backgroundImage = null;
  footer.style.background = null;
  footer.style.color = null;
  for (let elem of pannel) {
    elem.style.color = null;
    elem.style.backgroundColor = null;
  }
  feedback.style.backgroundImage = null;
  theme1.style.color = null;
  theme1.style.display = null;
  theme2.style.display = null;
}

res2.addEventListener("click", theme2);

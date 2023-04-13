var LOGIN_KEY = "Login";

const Acount = JSON.parse(localStorage.getItem("Acount"));
console.log(Acount);
// Acount.map((item) => {
//   console.log(item.email);
// });
//
function setConfigLogin(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

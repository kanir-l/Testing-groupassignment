const form = document.forms[0];

form.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const username = data.get("username");
  const password = data.get("password");

  if(username === "CoolUser" && password === "123123123") {
    location.href = "http://localhost:5000/start.html"
  } else {
    location.href = "http://localhost:5000/?e=wronglogin"
  }
});

window.onload = (event) => {
  const errorString = window.location.search.substr(1);
  if(errorString == "e=wronglogin") {
    document.querySelector("#errorMessage").innerHTML = "Fel anvÃ¤ndarnamn eller lÃ¶senord!";
  }
}
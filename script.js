let input = document.querySelector("input");
let cardTemplate = document.querySelector(".card-template");

let submit = document.querySelector("button");

submit.addEventListener("click", async function (e) {
  e.preventDefault();

  if (!input.value) return alert("Input is empty");

  let result = await fetch(`https://api.github.com/users/${input.value}`, {
    method: "get",
  }).then((res) => res.json());

  let div = cardTemplate.content.cloneNode();
  div
    .querySelector(".user-data")
    .querySelector("img")
    .setAttribute("src", result.avatar_url);
  div.querySelector(".name").querySelector("span").innerText = result.login;
  div
    .querySelector(".portfolio")
    .querySelector("a")
    .setAttribute("href", result.repos_url);
  div.querySelector(".location").querySelector("span").innerText =
    result.location;
  div.querySelector(".public").querySelector("span").innerText =
    result.public_repos;
  div.querySelector(".follower").querySelector("span").innerText =
    result.followers;
  div.querySelector(".following").querySelector("span").innerText =
    result.following;
});

let titulo = "Cascadas de Islandia 🏄‍♂️";
let lugar = "Gullfoss, Islandia";
let users = ["4GeeksAcademy", "html5", "JavaScript", "CSS", "Python", "C++", "Pedro", "Laura", "Javier", "Antonio", "Pepe", "Luis"];
let rating;
let descripcion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function carga() {
  rating = `A <strong>${users[0]}</strong>, <strong>${users[1]}</strong>, <strong>${users[2]}</strong> y <strong>${users.length - 3}</strong> más les gusta.`;
  document.querySelector("#titulo").innerHTML = titulo;
  document.querySelector("#lugar").innerHTML = lugar;
  document.querySelector(".post-rating").innerHTML = rating;
  document.querySelector(".post-description").innerHTML = descripcion;
}

window.onload = () => {
  console.log("😎 => Página cargada");

  carga();
}

let like = document.querySelector("#like");
like.addEventListener("click", () => {
  if (like.className === "fa-regular fa-heart") {
    users.push("Invitado");
    carga();
    console.log(users);
    return like.className = "fa-solid fa-heart"
  } else {
    users.pop();
    carga();
    console.log(users);
    return like.className = "fa-regular fa-heart"
  }
});

let save = document.querySelector("#save");
save.addEventListener("click", () => {
  if (save.className === "fa-regular fa-bookmark") {
    console.log("Este botón no tiene función además de cambiar la clase");
    return save.className = "fa-solid fa-bookmark";
  } else {
    console.log("Este botón no tiene función además de cambiar la clase");
    return save.className = "fa-regular fa-bookmark";
  }
});


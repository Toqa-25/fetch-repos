let input = document.getElementById("fetch-input"),
  spanButton = document.querySelector(".fetch-input-text"),
  reposList = document.querySelector("ul");

//fetch-input-text
// reposList.innerHTML =`<li class="fetch-list-item">toqa/li>`;
spanButton.onclick = getRepoes;

input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    getRepoes();
    //   console.log(event.keyCode);
  }
});


function getRepoes() {
  if (input.value.trim() != "" && input.value.trim() != null) {
    reposList.inearHTML = ""
    fetch(`https://api.github.com/users/${input.value.trim()}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        repos.forEach((repo) => {
          reposList.inearHTML = "";
          reposList.innerHTML += `<li class="fetch-list-item">${
            repo.name
          }<a href="https://github.com/${input.value.trim()}/${
            repo.name
          }" target="_blank" rel=""> visite it</a> </li>`;
          input.value=null
          
        });
      });
  } else {
    swal("Please Write Github Username");
  }
}

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
    fetch(`https://api.github.com/users/${input.value.trim()}/repos`)
      .then((response) => response.json())
      .then((repos) => {
        repos.forEach((repo) => {
          // console.log(repo.name); // =>1
          // console.log(repo.stargazers_count);
          reposList.inearHTML = "";
          reposList.innerHTML += `<li class="fetch-list-item">${repo.name}<a href="https://github.com/Toqa-25/${repo.name}" target="_blank" rel=""> visite it</a> </li>`;
          // input.value=null
          console.log(input.value.trim());
        });
      });
  } else {
    swal("Please Write Github Username");
  }
}


let input = document.getElementById("fetch-input"),
  spanButton = document.querySelector(".fetch-input-text");
    //fetch-input-text

spanButton.onclick = getRepoes

input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
      getRepoes();
    //   console.log(event.keyCode);
  } 
});

function getRepoes() {
    if (input.value.trim() != "" && input.value.trim() != null ) {
    //    window.location = `https://github.com/${input.value.trim()}?tab=repositories`;

        window.open(
          `https://github.com/${input.value.trim()}?tab=repositories`,
          "_blank"
        );
    }
    else {
        swal("Please Write Github Username");
    }
}
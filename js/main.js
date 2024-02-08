/* Initial code that wasn't performing- bc it wasn't iterating through each button I think
const showImg = document.querySelectorAll(".show-img");
const fishImg = document.querySelectorAll(".img");
showImg.addEventListener("click", () => {
  fishImg.hidden = !fishImg.hidden;
}); 
*/

/* or this which chatgpt suggested I add the parentNode*/

document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with the class "show-img"
  const showButtons = document.querySelectorAll(".show-img");

  // Iterate through each button and add a click event listener
  showButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      // Get the corresponding image within the same fish container
      const fishImg = this.parentNode.querySelector(".img");
      
      // Toggle the visibility of the image
      fishImg.hidden = !fishImg.hidden;
    });
  });
}); 
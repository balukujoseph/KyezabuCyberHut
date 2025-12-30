//Get the modal and close button
/**const modal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close-btn");

const triggerButtons = document.querySelectorAll(".trigger-modal");

triggerButtons.forEach(btn => {
    btn.onclick = function(event){
        event.preventDefault();
        modal.style.display = 'flex';
        console.log("Modal opened by:", btn.innerText);
    }
});**/
const modal = document.getElementById("contactModal");
const triggers = document.querySelectorAll(".trigger-modal");
//const closeBtn = document.querySelector(".close-btn");

triggers.forEach(btn => {
    btn.onclick = function() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Locks the main page
    }
});

//closeBtn.onclick = function() {
    //modal.style.display = "none";
    //document.body.style.overflow = "auto"; // Unlocks the main page
       // }

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}
  /**
//Get the button
const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn){
//show the button when user scrolls
 window.scroll = function(){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop >10){
        backToTopBtn.style.display = "block";
    }else{
        backToTopBtn.style.display = "none";
    }
 };
//when user clicks on the button, scroll to the top smoothly
 backToTopBtn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
 };
}// When opening the modal
function openModal() {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // This stops the background from moving
}

// When closing the modal
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // This restores scrolling
        }**/
// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("contactModal");
    const closeBtn = document.querySelector(".close-btn");

    if (closeBtn) {
        closeBtn.addEventListener("click", function(e) {
            e.preventDefault(); // Prevents any default behavior
            console.log("Close button was definitely clicked!"); // Check console (F12)
            
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Unlock scrolling
        });
    }
});

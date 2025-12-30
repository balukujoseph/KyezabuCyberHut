//Get the modal and close button
const modal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close-btn");

const triggerButtons = document.querySelectorAll(".trigger-modal");

triggerButtons.forEach(btn => {
    btn.onclick = function(event){
        event.preventDefault();
        modal.style.display = 'flex';
        console.log("Modal opened by:", btn.innerText);
    }
});

window.onclick = function(event){
    if (event.target == modal){
        modal.style.display = "none";
    }
}
  
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
        }

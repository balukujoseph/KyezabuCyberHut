const form = document.getElementById("contactForm");

async function handleSubmit(event) {
  event.preventDefault();
  
  // 1. Convert Form Data into a standard JavaScript Object
  const data = new FormData(event.target);
  const object = Object.fromEntries(data.entries());
  
  // 2. Convert that Object into a JSON String
  const json = JSON.stringify(object);

  fetch(event.target.action, {
    method: 'POST',
    body: json, // Sending the JSON string
    headers: {
        'Content-Type': 'application/json', // Telling Formspree it's JSON
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("Success! Your request has been sent.");
      form.reset();
      // This closes your full-page modal
      document.getElementById("contactModal").style.display = "none";
      document.body.style.overflow = "auto";
    } else {
      alert("Oops! Formspree didn't like that. Check your Form ID.");
    }
  }).catch(error => {
    alert("Error: Connection failed.");
  });
}

form.addEventListener("submit", handleSubmit);//Get the modal and close button
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

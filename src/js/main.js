// accordeon 

const items = Array.from(document.querySelectorAll(".loans__header")); 

items.forEach((item) => {
  item.addEventListener("click", itemHandler); 
});

function itemHandler(e) {
  e.preventDefault(); 
  let currentItem = e.target.closest(".loans__item");
  let currentContent = e.target.nextElementSibling;
  currentItem.classList.toggle("active");
    
  currentContent.style.maxHeight = currentContent.scrollHeight + "px";
}

// steps 

const navStepOne = document.getElementById("step-one");
const navStepTwo = document.getElementById("step-two");
const loansStep = document.getElementById("loans");
const profileSteps = document.getElementById("profile");

navStepOne.addEventListener("click", (e) => {
    navStepOne.classList.add("personal__nav-btn--active")
    navStepTwo.classList.remove("personal__nav-btn--active")
    profileSteps.classList.add("hidden")
    loansStep.classList.remove("hidden")
})

navStepTwo.addEventListener("click", (e) => {
  navStepTwo.classList.add("personal__nav-btn--active")
  navStepOne.classList.remove("personal__nav-btn--active")
  loansStep.classList.add("hidden")
  profileSteps.classList.remove("hidden")
})

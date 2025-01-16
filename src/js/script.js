//selection of element
let shopNowButton = document.getElementById("shop-now");
let newsLetterInput = document.getElementById("newsletter-input");
let newsLetterMessageP= document.getElementById("message-for-newsletter-validation");
console.log(newsLetterMessageP);
//shop now button function
shopNowButton.onclick = shopNowButtonEvent;
function shopNowButtonEvent() {
  console.log("click");
  open("https://www.bibekpoudel.info.np");
}

// buyNow Button
let buyNowButton = () => {
  window.open("https://www.bibekpoudel.info.np");
};

//newsletter input field validation
function newsLetterValidation() {
  var newsLetterInputValue = newsLetterInput.value;
  console.log(newsLetterInputValue);
  if ( newsLetterInputValue == "") {
    newsLetterMessageP.style.color="red";
    newsLetterMessageP.innerText="Input cant be Empty";
  } else if (newsLetterInputValue.length < 8) {
    newsLetterMessageP.style.color="red";
    newsLetterMessageP.innerText="Not valid Mail length";
  } else if (!newsLetterInputValue.includes("@")) {
    newsLetterMessageP.style.color="red";
    newsLetterMessageP.innerText="Not valid Mail";
  }else{
    newsLetterMessageP.style.color="green";
    newsLetterMessageP.innerText="Thank You For Subscribe";
  }
}

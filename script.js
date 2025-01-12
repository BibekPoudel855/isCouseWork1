//selection of element
let shopNowButton = document.getElementById("shop-now");
let newsLetterInput = document.getElementById("newsletter-input");
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

//newsletter form validation
function newsLetterValidation() {
  var newsLetterInputValue = newsLetterInput.value;
  if (newsLetterInputValue.length == "") {
    alert("Input cant be Empty");
  }else{
    alert("thank you");
  }
}

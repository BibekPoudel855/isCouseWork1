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
  console.log(newsLetterInputValue);

  if (newsLetterInputValue == "") {
    alert("Input cant be Empty");
  } else if (newsLetterInputValue.length < 8) {
    alert("Not valid Mail length");
  } else if (!newsLetterInputValue.includes("@")) {
    alert("Not valid Mail");
  }else{
    alert("thank you");
  }

}

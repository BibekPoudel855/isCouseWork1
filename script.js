//selection of element
body = document.querySelector("body");
shopNowButton = document.querySelector("#shop-now");
moonForDarkMode = document.querySelector("#dark-mode");
lightForLightMode = document.querySelector("#light-mode");
//dark mode functionalty
let isLight = true;
moonForDarkMode.addEventListener("click",modeChange);
lightForLightMode.addEventListener("click",modeChange);
function modeChange() {
  if (isLight) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    lightForLightMode.style.display = "block";
    moonForDarkMode.style.display = "none";
    isLight = false;
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    moonForDarkMode.style.display = "block";
    lightForLightMode.style.display = "none";
    isLight = true;
  }
}
//shop now button function
shopNowButton.addEventListener("click", () => {
  window.open("https://www.bibekpoudel.info.np");
});

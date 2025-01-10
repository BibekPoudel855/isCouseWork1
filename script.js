//selection of element
body=document.querySelector("body");
shopNowButton= document.querySelector("#shop-now");
moonForDarkMode=document.querySelector(".moon");
//dark mode functionalty
let isLight=true;
moonForDarkMode.addEventListener("click",()=>{
    if(isLight){
        body.style.backgroundColor="black";
        body.style.color="white";
        isLight=false;
    }else{
        body.style.backgroundColor="white";
        body.style.color="black";
        isLight=true;
    }
});
//shop now button function
shopNowButton.addEventListener("click",()=>{
    window.open("https://www.bibekpoudel.info.np");
});
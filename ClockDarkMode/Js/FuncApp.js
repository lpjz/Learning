const timeEL = document.querySelector(".Time");
const btnToggle = document.querySelector(".toggle");

function setTime() {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  timeEL.innerHTML = `${hours}:
    ${minutes < 10 ? `0${minutes}` : minutes}:
    ${seconds < 10 ? `0${seconds}` : seconds}`;
}

btnToggle.addEventListener("click",(e) =>{
    const html=document.querySelector('html')
    if(html.classList.contains("DarkMode")){
        html.classList.remove("DarkMode")
        e.target.innerHTML="Dark Mode"
    }else{
        html.classList.add("DarkMode")
        e.target.innerHTML="Light Mode"
    }
})

setTime();
setInterval(setTime, 1000);

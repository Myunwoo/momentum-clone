const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clockTitle.innerHTML = `${hours}:${
        minutes < 10 ? `0${minutes}` : minutes}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();

getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log("hour:"+hours+" minutes:"+minutes+" seconds:"+seconds);
  }

  init(){
    setInterval(this.getTime,1000);
  }
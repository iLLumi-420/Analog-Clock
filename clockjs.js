//selectors
const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector('.minute');
const hourHand = document.querySelector('.hour')

setInterval(setClock, 1000)

function setClock(){
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds()/60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60;
    const hoursRatio = (minutesRatio + currentDate.getHours())/12;
    setRotation(secondHand , secondsRatio);
    setRotation(minuteHand , minutesRatio);
    setRotation(hourHand , hoursRatio);
}
function setRotation(element , rotationRatio){
    element.style.setProperty("--rotation",rotationRatio * 360);
}
setClock();
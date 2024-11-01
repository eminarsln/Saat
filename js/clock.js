let userName= prompt("Adınız Nedir?")

let myName=document.querySelector("#myName")
myName.innerHTML=userName

let clock=document.querySelector("#myClock")
let now = new Date()
let hour = now.getHours()
let minute = now.getMinutes()
let second = now.getSeconds()
switch (new Date().getDay()) {
    case 0:
      day = "Pazar";
      break;
    case 1:
      day = "Pazartesi";
      break;
    case 2:
       day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
  }



clock.innerHTML= `${hour}:${minute}:${second} ${day}` 
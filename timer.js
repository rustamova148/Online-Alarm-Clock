let selectedSound = "";
const sounds = {
  paradise: document.getElementById("paradise-sound"),
  piano: document.getElementById("piano-sound"),
  classic: document.getElementById("classic-sound"),
};
let hours;
let minutes;
let seconds;
let appendHours = document.getElementById("t-hours");
let appendMinutes = document.getElementById("t-minutes");
let appendSeconds = document.getElementById("t-seconds");
let resetbtn = document.getElementById("t-reset");
let editstart = document.getElementById("edit-start");
let edittitle = document.getElementById("edit-title");
let fortitle = document.getElementById("fortitle");
let Interval;

fortitle.style.display = "none";

resetbtn.onclick = function () {
  clearInterval(Interval);

  hours = 0;
  seconds = 0;
  minutes = 0;
  appendHours.innerHTML = "0" + hours;
  appendSeconds.innerHTML = "0" + seconds;
  appendMinutes.innerHTML = "0" + minutes;
};

editstart.onclick = function () {
  appendMinutes.innerText = minutesselect.value;
  minutes = parseInt(minutesselect.value);
  appendSeconds.innerText = secondsselect.value;
  seconds = parseInt(secondsselect.value);
  appendHours.innerText = hoursselect.value;
  hours = parseInt(hoursselect.value);
  modal.style.display = "none";
  fortitle.innerText = edittitle.value;
  selectedSound = document.getElementById("soundselect").value;

  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000);
};

function startTimer() {
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(Interval);
    console.log("time stopped!");
    playSound();
    fortitle.style.display = "block";
    return;
  }
  if (seconds > 0) {
    seconds--;
  } else {
    seconds = 59;
    if (minutes > 0) {
      minutes--;
    } else {
      minutes = 59;
      if (hours > 0) {
        hours--;
      }
    }
  }
  appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
  appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  appendHours.innerHTML = hours < 10 ? "0" + hours : hours;
}

function playSound() {
  if (selectedSound && sounds[selectedSound]) {
    sounds[selectedSound].play();
  } else {
    console.log("Ses seçilməyib və ya tapıla bilmədi.");
  }
}
let editbtn = document.getElementById("set-countdown");
let modal = document.getElementById("countdown-box");
let closebtn = document.querySelector(".closebtn");
let hoursselect = document.getElementById("hoursselect");
let minutesselect = document.getElementById("minutesselect");
let secondsselect = document.getElementById("secondsselect");

editbtn.onclick = function () {
  if (modal.style.display == "none") {
    modal.style.display = "flex";
  } else {
    modal.style.display = "none";
  }
};

closebtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

for (let i = 0; i < 100; i++) {
  const option1 = document.createElement("option");
  if (i < 10) {
    option1.value = "0" + i;
    option1.textContent = "0" + i;
  } else {
    option1.value = i;
    option1.textContent = i;
  }
  hoursselect.appendChild(option1);
}

for (let i = 0; i < 60; i++) {
  const option2 = document.createElement("option");
  if (i < 10) {
    option2.value = "0" + i;
    option2.textContent = "0" + i;
  } else {
    option2.value = i;
    option2.textContent = i;
  }
  minutesselect.appendChild(option2);
}

for (let i = 0; i < 60; i++) {
  const option3 = document.createElement("option");
  if (i < 10) {
    option3.value = "0" + i;
    option3.textContent = "0" + i;
  } else {
    option3.value = i;
    option3.textContent = i;
  }
  secondsselect.appendChild(option3);
}


var testClearH, testClearM, testClearS = 0;

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

function startTime_hour() {
  if (testClearH == 0) {
    var rightNow = new Date();
    var h = rightNow.getHours();
    document.querySelector("#hour").innerHTML = h;
    var htime = setTimeout(startTime_hour, 100);
  } else {
      testClearH = 1;
  }

}
function startTime_minute() {
  if (testClearM == 0) {
    var rightNow = new Date();
    var m = rightNow.getMinutes();
    m = checkTime(m);
    document.querySelector("#minute").innerHTML = m;
    var ttime = setTimeout(startTime_minute, 100);
  } else {
    testClearM = 1;
  }

}
function startTime_second() {
  if(testClearS == 0) {
    var rightNow = new Date();
    var s = rightNow.getSeconds();
    s = checkTime(s);
    document.querySelector("#second").innerHTML = s;
    var tminute = setTimeout(startTime_second, 100);
  } else {
    testClearS = 1;
  }
}

document.querySelector("#hour").addEventListener("click", function() {
  var hourText = "hour";
  if(document.querySelector("#hour").innerHTML == hourText) {
    testClearH = 0;
    document.querySelector("#hour").style.backgroundColor = "#4CAF50";
    startTime_hour();
  } else {
    testClearH = 1;
    document.querySelector("#hour").style.backgroundColor = "#FC3C3C";
    document.querySelector("#hour").style.backgroundColor = "-webkit-transition-duration: 0.4s"; /* Safari */
    document.querySelector("#hour").style.backgroundColor = "transition-duration: 0.4s";
    document.querySelector("#hour").innerHTML = hourText;}

});

document.querySelector("#minute").addEventListener("click", function () {
  var minuteText = "minute";
  if(document.querySelector("#minute").innerHTML == minuteText) {
    testClearM = 0;
    document.querySelector("#minute").style.backgroundColor = "#4CAF50";
    startTime_minute();
  } else {
    testClearM = 1;
    document.querySelector("#minute").style.backgroundColor = "#FC3C3C";
    document.querySelector("#minute").style.backgroundColor = "-webkit-transition-duration: 0.4s"; /* Safari */
    document.querySelector("#minute").style.backgroundColor = "transition-duration: 0.4s";
    document.querySelector("#minute").innerHTML = minuteText;}
});

document.querySelector("#second").addEventListener("click", function () {
  var secondText = "second";
  if(document.querySelector("#second").innerHTML == secondText) {
    testClearS = 0;
    document.querySelector("#second").style.backgroundColor = "#4CAF50";
    startTime_second();

  } else {
    testClearS = 1;
    document.querySelector("#second").style.backgroundColor = "#FC3C3C";
    document.querySelector("#second").style.backgroundColor = "-webkit-transition-duration: 0.4s"; /* Safari */
    document.querySelector("#second").style.backgroundColor = "transition-duration: 0.4s";
    document.querySelector("#second").innerHTML = secondText;
    }
});

var goBackToMain = document.getElementById("go-back");

goBackToMain.addEventListener("click", function () {
  document.location.href = "https://a-for-anders.github.io/WeeklyUpdate_GithubTestLab/";
});

window.addEventListener('load', init);
const Days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var title, progressBar, p;

function init() {
    title = document.getElementById("title");
    progressBar = document.getElementById("progressBar");
    p = document.getElementById("p");
    showProgress();
}

function showProgress() {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    title.innerHTML = year + " Progress";
    // console.log(day + "/" + month + "/" + year);
    var totalDays = 0;
    var maxDays = 365;
    var leapYear = false;
    
    // Leap Year Check
    if (((year % 400) != 0) && ((year % 4) == 0)) {
        leapYear = true;
        maxDays = 366;
    }
    
    // Sum
    for (var i = 0; i < month - 1; i++) {
        totalDays += Days[i];
        if (month == 1 && leapYear) totalDays += 1;
    } totalDays += day;
    console.log(totalDays);
    var result = (totalDays/maxDays)*100;
    
    // DOM Elements
    progressBar.value = result;
    p.innerHTML = result.toString().substr(0,5) + "%";
    console.log(result);
}
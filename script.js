window.addEventListener('load', function() { showProgress(); setInterval(showProgress, 100); });

function showProgress() {
    var result = oneLinePercentage() * 100;
    document.getElementById("title").innerHTML = new Date().getFullYear() + " Progress";
    document.getElementById("progressBar").value = result;
    document.getElementById("p").innerHTML = result.toString().substr(0,11) + "%";
    console.log(result);
}

function oneLinePercentage() {
    return ((new Date() - new Date(new Date().getFullYear(), 0, 1)) / (new Date(new Date().getFullYear(), 11, 31, 23, 59, 59, 999) - new Date(new Date().getFullYear(), 0, 1)));
}
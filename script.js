function switchStyle(sheet) {
    document.getElementById('switchStyle').setAttribute('href', sheet);
}

function display() {

    var changeStyleCanvas = document.getElementsByName('changeStyle');

    if (document.getElementById('purpleOpt').checked) {
        switchStyle('perfectPurple.css');
    }
    if (document.getElementById('pinkOpt').checked) {
        switchStyle('plushyPink.css');
    }
    if (document.getElementById('blueOpt').checked) {
        switchStyle('basicBlue.css');
    }

    var playerName = document.forms["settingsForm"]["playName"].value;;
    alert("Hello " + playerName + "!");

    document.getElementById("form").style.width = "0%";
}

setCookie("changeStyle", display());

function openNav() {
    document.getElementById("form").style.width = "100%";
}

function closeNav() {
    document.getElementById("form").style.width = "0%";
}


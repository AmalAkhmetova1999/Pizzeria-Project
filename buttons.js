//screen size>768px
function seeMenu() {
    var display=getComputedStyle(document.getElementById("menu")).display;
        if (display == "none") {
            document.getElementById("menu").style = "display:block";
        } else {
            document.getElementById("menu").style = "display:none";
        }

    }
    window.onclick = function (event) {
        if (!event.target.matches('.btn')) {
            var dropdowns = document.getElementById("menu");
            if (dropdowns.style.display == "block") {
                dropdowns.style = "display:none";
            }


        }
    }
    //screen size<768px
    function seeLittleMenu() {
        if (document.getElementById("littlemenu").style.display == "none") {
            document.getElementById("littlemenu").style = "display:block";
        } else {
            document.getElementById("littlemenu").style = "display:none";
        }

    }
    window.onclick = function (event) {
        if (!event.target.matches('.btn')) {
            var dropdowns = document.getElementById("littlemenu");
            if (dropdowns.style.display == "block") {
                dropdowns.style = "display:none";
            }


        }
    }
    //screen size<768px
    function seeTooLittleMenu() {
        if (document.getElementById("toolittlemenu").style.display == "none") {
            document.getElementById("toolittlemenu").style = "display:block";
        } else {
            document.getElementById("toolittlemenu").style = "display:none";
        }

    }
    window.onclick = function (event) {
        if (!event.target.matches('.btn')) {
            var dropdowns = document.getElementById("toolittlemenu");
            if (dropdowns.style.display == "block") {
                dropdowns.style = "display:none";
            }


        }
    }
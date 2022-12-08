//screen size>768px
function seeMenu() {
    var display = getComputedStyle(document.getElementById("menu")).display;
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
    var display = getComputedStyle(document.getElementById("littlemenu")).display;
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
    var display = getComputedStyle(document.getElementById("toolittlemenu")).display;
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


function addDIV() {

    let collection = document.getElementsByClassName("pad");
    let counter = 0;
    for (let item of collection) {
        let element = document.createElement("div");
        element.innerHTML = ` <div class='count_box'>
        <div class="minus">-</div>
        <input class='inp_price' id="input` + counter + `" type="text" value="0" />
        <div class="plus">+</div>
    </div>
    <div class="col-12 pop"><button class="cook` + counter + ` varukorg" onclick="varukorg(${counter})">LÄGG I VARUKORG</button></div>`;
        item.appendChild(element);
        counter++;
    }
}
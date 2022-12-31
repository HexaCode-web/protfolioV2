"use strict";
var burgerBTN = document.querySelector(".burger");
var exit = document.querySelector(".exit");
var sideBar = document.querySelector("sidebar");
var SideBarLinksList = Array.from(document.querySelector("sidebar").querySelector("bottom").querySelectorAll(".link"));
var blackout = document.querySelector(".blackout");
var LinkBG = document.querySelector(".box");
var header = document.querySelector("header");
var navbar = document.querySelector(".navbar");
var CardsList = Array.from(document.querySelectorAll(".card"));
var cardContainer = document.querySelector(".cards");
var SCardContainer = document.querySelector("#Services").querySelector(".cards");
var cardBG = document.querySelector(".cardBG");
var numberEL = document.querySelector(".numbers");
var photos = document.querySelector(".photos");
var canvas = document.querySelector(".canvus");
var thirdScriptContent = document.querySelector("#thirdScriptContent");
var iconsList = document.querySelector(".icons").querySelectorAll("img");
var Sections = Array.from(document.querySelectorAll("section"));
var SkillSection = document.querySelector("#Skills");
var ContactSection = document.querySelector("#contact");
var aboutSection = document.querySelector("#about");
var ProjectsContainer = document.querySelector(".swiper-wrapper");
var progressList = Array.from(document.querySelectorAll(".skill"));
var numbers = document.querySelectorAll(".num");
var numbersDone = 0;
var numbersDone2 = 0;
var interval = 3000;
if (window.innerWidth < 500) {
    canvas.style.display = "none";
}
photos.addEventListener("mouseenter", function () {
    for (var index = 0; index < iconsList.length; index++) {
        if (index === 1 || index === 5)
            iconsList[index].style.animation = "showFromBehind 2s  ease-in-out infinite both";
        else {
            iconsList[index].style.animation = " showFromBehind 2s ease-in-out infinite both";
        }
    }
});
photos.addEventListener("mouseleave", function () {
    iconsList.forEach(function (icon) {
        icon.style.animation = "none";
    });
});
document.addEventListener("scroll", function () {
    var windowHeight = window.innerHeight;
    var revealPoint = 50;
    if (ContactSection.getBoundingClientRect().top < windowHeight - revealPoint) {
        console.log(ContactSection);
        var ContactSectionText = ContactSection.querySelector(".headline");
        var form = ContactSection.querySelector("#my-form");
        console.log(form);
        console.log(ContactSectionText);
        ContactSectionText.classList.remove("hidden");
        form.classList.remove("hidden");
    }
    if (SkillSection.getBoundingClientRect().top < windowHeight - revealPoint) {
        numbersDone2++;
        if (numbersDone2 != 1) {
            return;
        }
        else {
            progressList.forEach(function (number) {
                var interval = 2000;
                var progressEL = number;
                progressEL.classList.remove("op");
                var delay = progressList.indexOf(number) * 0.1;
                progressEL.style.animation = "slideFromBottom 1s ".concat(delay, "s ease-in both");
                var numberEL = progressEL.querySelector(".progress-number");
                var circleEL = progressEL.querySelector("circle");
                var startValue = 0;
                var elValue = Number(numberEL.getAttribute("data-val"));
                circleEL.style.strokeDashoffset = "calc(472 * calc(1 - ".concat(elValue / 100, "))");
                var duration = Math.floor(interval / elValue);
                var counter = setInterval(function () {
                    startValue += 1;
                    numberEL.textContent = startValue + "%";
                    if (startValue === elValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });
        }
    }
    if (header.getBoundingClientRect().top < -66) {
        navbar.style.position = "fixed";
        navbar.style.paddingTop = "0";
        navbar.style.backgroundColor = "#111111";
    }
    else {
        navbar.style.position = "static";
        navbar.style.paddingTop = "50px";
        navbar.style.backgroundColor = "transparent";
    }
    if (aboutSection.getBoundingClientRect().top < windowHeight - revealPoint) {
        var aboutSectionContent = aboutSection.querySelector("content");
        aboutSectionContent.classList.remove("hidden");
    }
    if (canvas.getBoundingClientRect().top < windowHeight - revealPoint) {
        canvas.classList.remove("hidden");
    }
    if (cardContainer.getBoundingClientRect().top < 600) {
        CardsList.forEach(function (card) {
            if (CardsList.indexOf(card) <= 3) {
                var cardEL = card;
                cardEL.classList.remove("hidden");
                var delay = CardsList.indexOf(card) * 0.1;
                cardEL.style.animation = "slideFromBottom 1s ".concat(delay, "s ease-in both");
            }
        });
    }
    ;
    if (SCardContainer.getBoundingClientRect().top < windowHeight - revealPoint) {
        CardsList.forEach(function (card) {
            if (CardsList.indexOf(card) > 3) {
                var cardEL = card;
                cardEL.classList.remove("hidden");
                var delay = CardsList.indexOf(card) * 0.1;
                cardEL.style.animation = "slideFromBottom 1s ".concat(delay, "s ease-in both");
            }
        });
    }
    ;
    if (numberEL.getBoundingClientRect().top < windowHeight - revealPoint) {
        numbersDone++;
        if (numbersDone != 1) {
            return;
        }
        else {
            numbers.forEach(function (number) {
                var numberEL = number;
                var startValue = 0;
                var elValue = Number(numberEL.getAttribute("data-val"));
                var duration = Math.floor(interval / elValue);
                var counter = setInterval(function () {
                    startValue += 1;
                    numberEL.textContent = startValue;
                    if (startValue === elValue) {
                        clearInterval(counter);
                    }
                }, duration);
            });
        }
    }
});
exit.addEventListener("click", function () {
    CloseMenu();
});
var CloseMenu = function () {
    blackout.classList.add("shrink");
    sideBar.classList.add("shrink");
    setTimeout(function () {
        blackout.classList.add("hidden");
        sideBar.classList.add("hidden");
        blackout.classList.remove("shrink");
        sideBar.classList.remove("shrink");
    }, 1000);
};
burgerBTN.addEventListener("click", function () {
    blackout.classList.remove("hidden");
    sideBar.classList.remove("hidden");
});
SideBarLinksList.forEach(function (link) {
    var linkEL = link;
    linkEL.addEventListener("click", function () {
        ScrollIntoView(Sections[SideBarLinksList.indexOf(link) - 1]);
        CloseMenu();
    });
    linkEL.addEventListener("mouseenter", function () {
        linkEL.appendChild(LinkBG);
        linkEL.querySelector("a").style.color = "white";
        LinkBG.classList.toggle("hidden");
    });
    linkEL.addEventListener("mouseleave", function () {
        LinkBG.classList.toggle("hidden");
        linkEL.querySelector("a").style.color = "black";
    });
});
var ScrollIntoView = function (target) {
    target.scrollIntoView(true);
};
CardsList.forEach(function (card) {
    var cardEL = card;
    cardEL.addEventListener("mouseenter", function () {
        cardBG.classList.remove("hidden");
        cardEL.insertBefore(cardBG, cardEL.children[0]);
        switch (CardsList.indexOf(cardEL)) {
            case 0:
                cardEL.querySelector("img").src = "images/delicateHover.png";
                break;
            case 1:
                cardEL.querySelector("img").src = "images/designHover.png";
                break;
            case 2:
                cardEL.querySelector("img").src = "images/SaveHover.png";
                break;
            case 3:
                cardEL.querySelector("img").src = "images/CustomerHover.png";
                break;
            case 4:
                cardEL.querySelector("img").src = "images/buildHover.png";
                break;
            case 5:
                cardEL.querySelector("img").src = "images/maintainHover.png";
                break;
            case 6:
                cardEL.querySelector("img").src = "images/uiuxHover.png";
                break;
        }
    });
    cardEL.addEventListener("mouseleave", function () {
        cardBG.classList.add("hidden");
        switch (CardsList.indexOf(cardEL)) {
            case 0:
                cardEL.querySelector("img").src = "images/delicate.png";
                break;
            case 1:
                cardEL.querySelector("img").src = "images/design.png";
                break;
            case 2:
                cardEL.querySelector("img").src = "images/Save.png";
                break;
            case 3:
                cardEL.querySelector("img").src = "images/Customer.png";
                break;
            case 4:
                cardEL.querySelector("img").src = "images/build.png";
                break;
            case 5:
                cardEL.querySelector("img").src = "images/maintain.png";
                break;
            case 6:
                cardEL.querySelector("img").src = "images/uiux.png";
                break;
        }
    });
});
window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
    // Success and Error functions for after the form is submitted
    var success = function () {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Thanks!";
    };
    var error = function () {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem.";
    };
    // handle the form submission event
    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});
// helper function for sending an AJAX request
var ajax = function (method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE)
            return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        }
        else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
};

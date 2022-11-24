"use strict";
const burgerBTN = document.querySelector(".burger");
const exit = document.querySelector(".exit");
const sideBar = document.querySelector("sidebar");
const SideBarLinksList = Array.from(document.querySelector("sidebar").querySelector("bottom").querySelectorAll(".link"));
const blackout = document.querySelector(".blackout");
const LinkBG = document.querySelector(".box");
const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");
const CardsList = Array.from(document.querySelectorAll(".card"));
const cardContainer = document.querySelector(".cards");
const cardBG = document.querySelector(".cardBG");
const numberEL = document.querySelector(".numbers");
const aboutSection = document.querySelector("#about");
const photos = document.querySelector(".photos");
const iconsList = document.querySelector(".icons").querySelectorAll("img");
const numbers = document.querySelectorAll(".num");
const interval = 2000;
let numbersDone = 0;
photos.addEventListener("mouseenter", () => {
    for (let index = 0; index < iconsList.length; index++) {
        if (index === 1 || index === 5)
            iconsList[index].style.animation = "showFromBehind 2s  ease-in-out infinite both";
        else {
            iconsList[index].style.animation = " showFromBehind 2s ease-in-out infinite both";
        }
    }
});
photos.addEventListener("mouseleave", () => {
    iconsList.forEach(icon => {
        icon.style.animation = "none";
    });
});
document.addEventListener("scroll", () => {
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
    if (aboutSection.getBoundingClientRect().top < 600) {
        const aboutSectionContent = aboutSection.querySelector("content");
        aboutSectionContent.classList.remove("hidden");
    }
    if (cardContainer.getBoundingClientRect().top < 600) {
        CardsList.forEach(card => {
            const cardEL = card;
            const delay = CardsList.indexOf(card) * 0.1;
            cardEL.style.animation = `slideFromBottom 1s ${delay}s ease-in both`;
        });
    }
});
document.addEventListener("scroll", () => {
    if (numberEL.getBoundingClientRect().top < 550) {
        numbersDone++;
        if (numbersDone != 1) {
            return;
        }
        else {
            numbers.forEach((number) => {
                let numberEL = number;
                let startValue = 0;
                const elValue = Number(numberEL.getAttribute("data-val"));
                let duration = Math.floor(interval / elValue);
                let counter = setInterval(() => {
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
exit.addEventListener("click", () => {
    blackout.classList.add("shrink");
    sideBar.classList.add("shrink");
    setTimeout(() => {
        blackout.classList.add("hidden");
        sideBar.classList.add("hidden");
        blackout.classList.remove("shrink");
        sideBar.classList.remove("shrink");
    }, 1000);
});
burgerBTN.addEventListener("click", () => {
    blackout.classList.remove("hidden");
    sideBar.classList.remove("hidden");
});
SideBarLinksList.forEach(link => {
    const linkEL = link;
    linkEL.addEventListener("mouseenter", () => {
        linkEL.appendChild(LinkBG);
        linkEL.querySelector("a").style.color = "white";
        LinkBG.classList.toggle("hidden");
    });
    linkEL.addEventListener("mouseleave", () => {
        LinkBG.classList.toggle("hidden");
        linkEL.querySelector("a").style.color = "black";
    });
});
CardsList.forEach(card => {
    const cardEL = card;
    cardEL.addEventListener("mouseenter", () => {
        cardBG.classList.remove("hidden");
        cardEL.insertBefore(cardBG, cardEL.children[0]);
        setTimeout(() => {
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
            }
        }, 100);
    });
    cardEL.addEventListener("mouseleave", () => {
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
        }
    });
});

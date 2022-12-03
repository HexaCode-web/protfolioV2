
const burgerBTN: HTMLButtonElement = document.querySelector(".burger")!
const exit: HTMLButtonElement = document.querySelector(".exit")!
const sideBar: Element = document.querySelector("sidebar")!
const SideBarLinksList:object[]= Array.from(document.querySelector("sidebar")!.querySelector("bottom")!.querySelectorAll(".link"))
const blackout: HTMLDivElement = document.querySelector(".blackout")!
const LinkBG: HTMLDivElement = document.querySelector(".box")!;
const header: HTMLHeadElement = document.querySelector("header")!
const navbar: HTMLDivElement = document.querySelector(".navbar")!
const CardsList: object[] = Array.from(document.querySelectorAll(".card"))
const cardContainer: HTMLDivElement = document.querySelector(".cards")!
const SCardContainer:HTMLDivElement=document.querySelector("#Services")!.querySelector(".cards")!
const cardBG: HTMLDivElement = document.querySelector(".cardBG")!
const numberEL: HTMLDivElement = document.querySelector(".numbers")!
const photos: HTMLDivElement = document.querySelector(".photos")!
const canvas:HTMLDivElement=document.querySelector(".canvus")!
const thirdScriptContent: any = document.querySelector("#thirdScriptContent")
const iconsList = document.querySelector(".icons")!.querySelectorAll("img")!
const Sections:object[]=Array.from(document.querySelectorAll("section"))
const ContactSection:HTMLDivElement=document.querySelector("#contact")!
const aboutSection: HTMLDivElement = document.querySelector("#about")!
const ProjectsContainer:HTMLDivElement=document.querySelector(".swiper-wrapper")!
const numbers = document.querySelectorAll(".num")
let numbersDone: number = 0
const interval = 3000
console.log(Sections)
if (window.innerWidth < 500) {
    canvas.style.display = "none"
}
// document.addEventListener("scroll", () => {
//     const windowHeight:number = window.innerHeight
//     const revealPoint:number = 50;
//     if (ProjectsContainer.getBoundingClientRect().top < windowHeight - revealPoint) {
//         ProjectsContainer.style.opacity="1"
//         numbersDone++
//     if (numbersDone != 1) {
//         return
//     } else {
//             ProjectsList.forEach(project => {
//                 const ProjectEL = project as unknown as HTMLDivElement
//                 ProjectEL.classList.remove("hidden")
//                 const delay: number = ProjectsList.indexOf(project) * 0.1
//                 ProjectEL.style.animation = `slideFromBottom 1s ${delay}s ease-in both`
//             });
//         }
//         }
// })
photos.addEventListener("mouseenter", () => {
    for (let index = 0; index < iconsList.length; index++) {
        if(index===1||index===5)
            iconsList[index].style.animation = "showFromBehind 2s  ease-in-out infinite both"
        else {
            iconsList[index].style.animation = " showFromBehind 2s ease-in-out infinite both"
        }
    }
})
photos.addEventListener("mouseleave", () => { 
    iconsList.forEach(icon => {
        icon.style.animation = "none"
    });
})
document.addEventListener("scroll", () => {
    const windowHeight: number = window.innerHeight
    const revealPoint: number = 50;
    if (header.getBoundingClientRect().top < -66) {
        navbar.style.position = "fixed"
        navbar.style.paddingTop = "0"
        navbar.style.backgroundColor = "#111111"
    }
    else {
        navbar.style.position = "static"
        navbar.style.paddingTop = "50px"
        navbar.style.backgroundColor = "transparent"
    }
    if (aboutSection.getBoundingClientRect().top < windowHeight-revealPoint) {
        const aboutSectionContent:HTMLDivElement=aboutSection.querySelector("content")!
        aboutSectionContent.classList.remove("hidden")
    }
    if (canvas.getBoundingClientRect().top < windowHeight - revealPoint) {
        canvas.classList.remove("hidden")
    }if (cardContainer.getBoundingClientRect().top < 600) {
        CardsList.forEach(card => {
            if (CardsList.indexOf(card) <= 3) {
                const cardEL = card as unknown as HTMLDivElement
                cardEL.classList.remove("hidden")
                const delay: number = CardsList.indexOf(card) * 0.1
                cardEL.style.animation = `slideFromBottom 1s ${delay}s ease-in both`
            }
        }
        )
    };

    if (SCardContainer.getBoundingClientRect().top<windowHeight-revealPoint) {
        CardsList.forEach(card => {
            if (CardsList.indexOf(card) > 3) {
                const cardEL = card as unknown as HTMLDivElement
                cardEL.classList.remove("hidden")
                const delay: number = CardsList.indexOf(card) * 0.1
                cardEL.style.animation = `slideFromBottom 1s ${delay}s ease-in both`
            }
        }
        )
    };
    if (ContactSection.getBoundingClientRect().top < windowHeight-revealPoint) {
        let ContactSectionText: HTMLDivElement = ContactSection.querySelector(".headline")!
        let form: HTMLFormElement = ContactSection.querySelector("#my-form")!
        ContactSectionText.classList.remove("hidden")
        form.classList.remove("hidden")
    }
    if (numberEL.getBoundingClientRect().top < windowHeight-revealPoint) {
        numbersDone++
        if (numbersDone != 1) {
            return
        } else {
            numbers.forEach((number: object) => {
                let numberEL = number as unknown as HTMLDivElement
                let startValue: number = 0
                const elValue = Number(numberEL.getAttribute("data-val"))
                let duration = Math.floor(interval / elValue)
                let counter = setInterval(() => {
                    startValue += 1
                    numberEL.textContent = startValue as unknown as string
                    if (startValue === elValue) {
                        clearInterval(counter)
                    }
                }, duration)
            })
        }
    }
})
exit.addEventListener("click", () => {
    CloseMenu()
})
const CloseMenu = () => {
    blackout.classList.add("shrink")
    sideBar.classList.add("shrink")
    setTimeout(() => {
        blackout.classList.add("hidden")
        sideBar.classList.add("hidden")
        blackout.classList.remove("shrink")
        sideBar.classList.remove("shrink")
    }, 1000);
}
burgerBTN.addEventListener("click", () => {
    blackout.classList.remove("hidden")
    sideBar.classList.remove("hidden")
})
SideBarLinksList.forEach(link => {
    const linkEL = link as unknown as HTMLAnchorElement
    linkEL.addEventListener("click", () => {
        ScrollIntoView(Sections[SideBarLinksList.indexOf(link)-1] as unknown as Element)
        CloseMenu()
    })
    linkEL.addEventListener("mouseenter", ():void => {
        linkEL.appendChild(LinkBG);
            linkEL.querySelector("a")!.style.color="white"
        LinkBG.classList.toggle("hidden");
    })
    linkEL.addEventListener("mouseleave", ():void => {
        LinkBG.classList.toggle("hidden");
        linkEL.querySelector("a")!.style.color="black"
        })
})
const ScrollIntoView = (target:Element) => {
    target.scrollIntoView(false)
}
CardsList.forEach(card => {
    const cardEL=card as unknown as HTMLDivElement
    cardEL.addEventListener("mouseenter", () => {
        cardBG.classList.remove("hidden")
        cardEL.insertBefore(cardBG, cardEL.children[0]);
            switch (CardsList.indexOf(cardEL)) {
                case 0:
                    cardEL.querySelector("img")!.src="images/delicateHover.png"  
                break;
                case 1:
                cardEL.querySelector("img")!.src="images/designHover.png"
                break;
                case 2:
                    cardEL.querySelector("img")!.src="images/SaveHover.png"
                break;
                case 3:
                    cardEL.querySelector("img")!.src="images/CustomerHover.png"
                break;
                case 4:
                    cardEL.querySelector("img")!.src="images/buildHover.png"
                break;
                case 5:
                    cardEL.querySelector("img")!.src="images/maintainHover.png"
                break;
                case 6:
                    cardEL.querySelector("img")!.src="images/uiuxHover.png"
                break;
        }
    })
    cardEL.addEventListener("mouseleave", () => {
        cardBG.classList.add("hidden")
            switch (CardsList.indexOf(cardEL)) {
                case 0:
                cardEL.querySelector("img")!.src="images/delicate.png"
                break;
                case 1:
                cardEL.querySelector("img")!.src="images/design.png"
                break;
                case 2:
                    cardEL.querySelector("img")!.src="images/Save.png"
                break;
                case 3:
                cardEL.querySelector("img")!.src="images/Customer.png"
                break;
                case 4:
                    cardEL.querySelector("img")!.src="images/build.png"
                break;
                case 5:
                    cardEL.querySelector("img")!.src="images/maintain.png"
                break;
                case 6:
                    cardEL.querySelector("img")!.src="images/uiux.png"
                break;
        }
    })
})

window.addEventListener("DOMContentLoaded", () => {
    // get the form elements defined in your form HTML above
    const form:any = document.getElementById("my-form")!;
    // var button = document.getElementById("my-form-button");
    const status = document.getElementById("status")!;
    // Success and Error functions for after the form is submitted
    const success = () => {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    };
    const error = () => {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    };
    // handle the form submission event
    form.addEventListener("submit", (ev:Event) => {
      ev.preventDefault();
      var data:any = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  // helper function for sending an AJAX request
  const ajax = (method:string, url:string, data:string, success:any, error:any) => {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
};
var swiper = new Swiper(".slide-container", {
    slidesPerView: 4,
    spaceBetween: 20,
    sliderPerGroup: 4,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

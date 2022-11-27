import * as myData from "./Data.js";
const AllButton = document.querySelector("#All");
const LandingButton = document.querySelector("#Landing");
const MajorButton = document.querySelector("#Major");
// const BusinessButton: HTMLLIElement = document.querySelector("#Business")!
const OthersButton = document.querySelector("#Other");
const ProjectContainer = document.querySelector(".swiper-wrapper");
const script = document.getElementById("THIRDscript");
let ProjectsList;
const ProjectsContainer = document.querySelector(".swiper-wrapper");
const others = [myData.ProjectFour, myData.ProjectSeven];
const Major = [myData.ProjectFive, myData.ProjectSix];
// const BusinessCard: object[] = []
const LandingPage = [myData.ProjectOne, myData.ProjectThree, myData.ProjectTwo];
const AllProjects = [myData.ProjectOne, myData.ProjectThree, myData.ProjectTwo, myData.ProjectFive, myData.ProjectSix, myData.ProjectFour, myData.ProjectSeven];
let numbersDone = 0;
const insertProjects = (name, description, img, link, type) => {
    const NewProject = document.createElement("div");
    NewProject.classList.add("swiper-slide");
    NewProject.innerHTML =
        `
    <a href="${link}">
            <div class="Projects-image"><img src="${img}"/></div>
            <div class="info">
                <p class="project-Name">${name}</p>
                <p class="project-Details">${description}</p>
                <p class="project-Type">${type}</p>
            </div>
            </a>
    `;
    ProjectContainer.appendChild(NewProject);
    ProjectsList = Array.from(document.querySelectorAll(".swiper-slide"));
};
const PrintNeededProjects = (Arr) => {
    Arr.forEach(item => {
        const project = item;
        insertProjects(project.Name, project.description, project.src, project.link, project.type);
        const SwiperSlideList = Array.from(document.querySelectorAll(".swiper-slide"));
        SwiperSlideList.forEach(slide => {
            const slideEL = slide;
            slideEL.addEventListener("mouseenter", () => {
                const info = slideEL.querySelector(".info");
                info.style.animation = "slideFromBottomInfo 0.5s ease-in-out both";
            });
            slideEL.addEventListener("mouseleave", () => {
                const info = slideEL.querySelector(".info");
                info.style.animation = "slideFromBottomInfoR 0.5s ease-in-out both";
            });
        });
        script.src = "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js";
    });
};
PrintNeededProjects(AllProjects);
AllButton.addEventListener("click", () => {
    ProjectContainer.innerHTML = "";
    PrintNeededProjects(AllProjects);
});
LandingButton.addEventListener("click", () => {
    ProjectContainer.innerHTML = "";
    PrintNeededProjects(LandingPage);
});
MajorButton.addEventListener("click", () => {
    ProjectContainer.innerHTML = "";
    PrintNeededProjects(Major);
});
OthersButton.addEventListener("click", () => {
    ProjectContainer.innerHTML = "";
    PrintNeededProjects(others);
});
document.addEventListener("scroll", () => {
    if (ProjectsContainer.getBoundingClientRect().top < 700) {
        numbersDone++;
        if (numbersDone != 1) {
            return;
        }
        else {
            ProjectsList.forEach(project => {
                const ProjectEL = project;
                const delay = ProjectsList.indexOf(project) * 0.1;
                ProjectEL.style.animation = `slideFromBottom 1s ${delay}s ease-in both`;
            });
        }
    }
});

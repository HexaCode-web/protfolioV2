// import * as myData from "./Data.js";
// const ProjectContainer = document.querySelector(".swiper-wrapper");
// const script = document.getElementById("THIRDscript");
let ProjectsList = Array.from(document.querySelectorAll(".swiper-slide"));
const ProjectsContainer = document.querySelector(".swiper-wrapper");
let numbersDone = 0;
// const AllProjects = [
//   myData.ProjectOne,
//   myData.ProjectThree,
//   myData.ProjectTwo,
//   myData.ProjectFive,
//   myData.ProjectSix,
//   myData.ProjectFour,
//   myData.ProjectSeven,
//   myData.ProjectEight,
// ];

// const insertProjects = (name, description, img, link, type) => {
//   const NewProject = document.createElement("div");
//   NewProject.classList.add("swiper-slide");
//   NewProject.innerHTML = `
//     <a href="${link}">
//             <div class="Projects-image"><img src="${img}"/></div>
//             <div class="info">
//                 <p class="project-Name">${name}</p>
//                 <p class="project-Details">${description}</p>
//                 <p class="project-Type">${type}</p>
//             </div>
//             </a>
//     `;
//   ProjectContainer.appendChild(NewProject);
// };
// const PrintNeededProjects = (Arr) => {
//   Arr.forEach((item) => {
//     const project = item;
//     insertProjects(
//       project.Name,
//       project.description,
//       project.src,
//       project.link,
//       project.type
//     );
//     const SwiperSlideList = Array.from(
//       document.querySelectorAll(".swiper-slide")
//     );
//     script.src = "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js";
//   });
// };
document.addEventListener("scroll", () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 50;
  if (
    ProjectsContainer.getBoundingClientRect().top <
    windowHeight - revealPoint
  ) {
    ProjectsContainer.style.opacity = "1";
    numbersDone++;
    if (numbersDone != 1) {
      return;
    } else {
      ProjectsList.forEach((project) => {
        const ProjectEL = project;
        ProjectEL.classList.remove("hidden");
        const delay = ProjectsList.indexOf(project) * 0.1;
        ProjectEL.style.animation = `slideFromBottom 1s ${delay}s ease-in both`;
      });
    }
  }
});
ProjectsList.forEach((slide) => {
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

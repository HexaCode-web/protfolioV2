import * as myData from "./Data.js";
const AllButton: HTMLLIElement = document.querySelector("#All")!
const LandingButton: HTMLLIElement = document.querySelector("#Landing")!
const MajorButton: HTMLLIElement = document.querySelector("#Major")!
// const BusinessButton: HTMLLIElement = document.querySelector("#Business")!
const OthersButton: HTMLLIElement = document.querySelector("#Other")!
const ProjectContainer: HTMLDivElement = document.querySelector(".swiper-wrapper")!
const script: any = document.getElementById("THIRDscript")!
let ProjectsList: object[]
const ProjectsContainer:HTMLDivElement=document.querySelector(".swiper-wrapper")!
const others:object[]=[myData.ProjectFour, myData.ProjectSeven]
const Major: object[] = [myData.ProjectFive,myData.ProjectSix]
// const BusinessCard: object[] = []
const LandingPage: object[] =[myData.ProjectOne,myData.ProjectThree,myData.ProjectTwo]
const AllProjects: object[] = [myData.ProjectOne, myData.ProjectThree, myData.ProjectTwo, myData.ProjectFive, myData.ProjectSix, myData.ProjectFour, myData.ProjectSeven]
let numbersDone: number = 0
const insertProjects = (name:string,description:string,img:string,link:string,type:string) => {
    const NewProject = document.createElement("div")
    NewProject.classList.add("swiper-slide")
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
    `
    ProjectContainer.appendChild(NewProject)
    ProjectsList = Array.from(document.querySelectorAll(".swiper-slide"))
    
}
const PrintNeededProjects = (Arr:object[]) => {
    Arr.forEach(item => {
        const project:any=item
        insertProjects(project.Name, project.description, project.src, project.link, project.type)
        const SwiperSlideList:object[]=Array.from(document.querySelectorAll(".swiper-slide"))
        SwiperSlideList.forEach(slide => {
            const slideEL = slide as unknown as HTMLDivElement
            slideEL.addEventListener("mouseenter", () => {
                const info = slideEL.querySelector(".info") as unknown as HTMLDivElement
                info.style.animation="slideFromBottomInfo 0.5s ease-in-out both"
            })
            slideEL.addEventListener("mouseleave", () => {
                const info = slideEL.querySelector(".info") as unknown as HTMLDivElement
                info.style.animation="slideFromBottomInfoR 0.5s ease-in-out both"
            })
        });
        script.src = "https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"
    });
}
PrintNeededProjects(AllProjects)
AllButton.addEventListener("click", () => {
    ProjectContainer.innerHTML = ""
    PrintNeededProjects(AllProjects)
})
LandingButton.addEventListener("click", () => {
    ProjectContainer.innerHTML = ""
    PrintNeededProjects(LandingPage)
})
MajorButton.addEventListener("click", () => {
    ProjectContainer.innerHTML = ""
    PrintNeededProjects(Major)
})
OthersButton.addEventListener("click", () => {
    ProjectContainer.innerHTML = ""
    PrintNeededProjects(others)
})
document.addEventListener("scroll", () => {
    if (ProjectsContainer.getBoundingClientRect().top < 800) {
            numbersDone++
        if (numbersDone != 1) {
            return
        } else {
            ProjectsList.forEach(project => {
                const ProjectEL = project as unknown as HTMLDivElement
                const delay: number = ProjectsList.indexOf(project) * 0.1
                ProjectEL.style.animation = `slideFromBottom 1s ${delay}s ease-in both`
            });
        }
        }
    
})
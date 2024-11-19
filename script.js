const sortAllButton = document.querySelector(".sortAllButton");
const sortHtmlButton = document.querySelector(".sortHtmlButton");
const sortCssButton = document.querySelector(".sortCssButton");
const sortJsButton = document.querySelector(".sortJsButton");
const sortBstpButton = document.querySelector(".sortBstpButton");

const allSentences = document.querySelectorAll(".sentence");
const pinnedProjectsList = document.querySelector("#projectsGridContainer");
const allProjects = document.querySelectorAll(".project");
const htmlProjects = document.querySelectorAll(".htmlProject");
const cssProjects = document.querySelectorAll(".cssProject");
const jsProjects = document.querySelectorAll(".jsProject");
const bstProjects = document.querySelectorAll(".bootstrapProject");

Array.from(allProjects).forEach((project, index) => {
  project.style.animationDelay = `${index * 150}ms`;
  project.addEventListener("animationend", () => {
    project.classList.add("visible");
  });
});

function reorganizeGrid(typeOfProjectsSelector) {
  allProjects.forEach((project) => {
    project.classList.remove("visible");
    project.classList.add("display-none");
  });
  allSentences.forEach((sentence) => {
    sentence.classList.add("display-none");
  });
  const newsortedProjectArray = Array.from(typeOfProjectsSelector);
  // newsortedProjectArray.forEach((project) => {
  //   project.style.order = Math.random();
  // });
  // newsortedProjectArray.sort((a, b) => 0.5 - Math.random());
  // shuffleArray(newsortedProjectArray);
  console.log({ sortarray: newsortedProjectArray });
  console.log(
 
  pinnedProjectsList.classList.remove("pinnedProjects");
  pinnedProjectsList.classList.add("sortedProjects");
  setTimeout(function () {
    newsortedProjectArray.forEach((project) => {
      project.classList.remove("display-none");
    });
  }, 100);
}

function reorganizeProjectsOrder(arraytoRemove, arrayToAdd) {
  removeInitialArray(arraytoRemove);
  replaceByNewArray(arrayToAdd);
}

function removeInitialArray() {
  allProjects.remove();
}

// document.querySelector(
//   `${#projectsGridContainer > article.project.project1.htmlProject.cssProject.jsProject.bootstrapProject.visible > div.card-body > h2}`
// );

const projects = [
  {
    id: projec1,
    name: "Pokedex",
    picture: "./assets/pokedex2.JPG",
    description:
    "Find your favorite pokemon in the first generation and check his description.",
    hrefDemo: "https://emily-ly-san.github.io/pokemon/",
    hrefCode: "https://github.com/EmiLy-Ly-san/pokemon",
   
    challenge:
      "Rules : react components architecture, data filtration, CSS animation",
    languages: ["REACT", "typescript", "css", "all"],
  },
  {
    id: 2,
    name: "Nantes Quest",
    label: "NEW",
    hrefDemo: "https://mellerincharly.github.io/projet-quiz-nantes/",
    hrefCode: "https://github.com/MellerinCharly/projet-quiz-nantes",
    picture: "./portfolio/assets/nantesQuest.JPG",
    description:
      "Web site who generates differents quizz about Nantes city in France, build in team",
    challenge:
      "Rules : code architecture in moduls, and JavaScript part",
    languages: ["html", "js", "css", "all"],
  },
  {
    id: "project1",
   name: "Anime Art Meteo",
   picture: "./assets/animeArtMeteo.JPG", 
   description: "Meteo web application who generates illustrations Work in progress", 
   challenges: "API |Async | Collections user | modules JS | localStorage | CRUD", 
   langages: "#HTML #JS #SCSS #BOOTSTRAP", statut:"in progress", linkCode: url("https://github.com/EmiLy-Ly-san/AnimeArtMeteo"), 
   linkDemo: url("https://emily-ly-san.github.io/AnimeArtMeteo/")
  },
  {
    id: "project2",
   name: "Anime Art Clock",
   picture: "./assets/animeArtClock.JPG", 
   description: "Meteo web application who generates illustrations Work in progress", 
   challenges: "API |Async | Collections user | modules JS | localStorage | CRUD", 
   langages: "#HTML #JS #SCSS #BOOTSTRAP", statut:"in progress", linkCode: url("https://github.com/EmiLy-Ly-san/AnimeArtMeteo"), 
   linkDemo: url("https://emily-ly-san.github.io/AnimeArtMeteo/")
  }

]

function replaceByNewArray(newsortedProjectArray) {
  newsortedProjectArray.forEach((project) => {
    const projectOject = {
      name: "",
      picture: url(""),
      description: "",
      challenges: "",
      langages: "",
    };
    const { name, picture, descrition, challenges, langages } = projectOject;
    const card = `
    <article class="project">
          <div class="card-header">
            <div class="links">
              <a
                href="https://codepen.io/EmiLy-Ly-san/pen/wvbPqPv"
                title="view demo project"
                target="_blank"
              >
                <img
                  class="icon icon20"
                  src="./assets/open-in-new-window-icon.svg"
                  alt=""
                  aria-hidden
                />
              </a>
            </div>
          </div>
          <div class="card-body">
            <img
              class="projectPicture"
              // src="./assets/animeArtClock.JPG"
              alt=""
            />
            // <h2>Anime Art Clock</h2>
            <div class="infoProjectWrapper">
              // <p class="description">Clock application</p>
              // <p>Animation with JS | Glass effect in CSS</p>
            </div>
            // <p><strong>#HTML #JS #CSS</strong></p>
          </div>
        </article>
    `;
  });
}

//The Fisher-Yates algorith
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    // document.newsortedProjectArray.replaceChild(array[i], array[j]);
  }
}

/*SORT BY HTML PROJECTS*/
sortHtmlButton.addEventListener("click", () => {
  reorganizeGrid(htmlProjects);
  sortHtmlButton.classList.add("active");
  sortAllButton.classList.remove("active");
  sortCssButton.classList.remove("active");
  sortJsButton.classList.remove("active");
  sortBstpButton.classList.remove("active");
});

/*SORT BY CSS PROJECTS*/
sortCssButton.addEventListener("click", () => {
  reorganizeGrid(cssProjects);
  sortHtmlButton.classList.remove("active");
  sortAllButton.classList.remove("active");
  sortCssButton.classList.add("active");
  sortJsButton.classList.remove("active");
  sortBstpButton.classList.remove("active");
});

/*SORT BY JS PROJECTS*/
sortJsButton.addEventListener("click", () => {
  reorganizeGrid(jsProjects);
  sortHtmlButton.classList.remove("active");
  sortAllButton.classList.remove("active");
  sortCssButton.classList.remove("active");
  sortJsButton.classList.add("active");
  sortBstpButton.classList.remove("active");
});

/*SORT BY BOOTSTRAP PROJECTS*/
sortBstpButton.addEventListener("click", () => {
  reorganizeGrid(bstProjects);
  sortHtmlButton.classList.remove("active");
  sortAllButton.classList.remove("active");
  sortCssButton.classList.remove("active");
  sortJsButton.classList.remove("active");
  sortBstpButton.classList.add("active");
});

/*SORT BY ALL PROJECTS*/
sortAllButton.addEventListener("click", () => {
  allSentences.forEach((sentence) => {
    sentence.classList.remove("display-none");
  });
  allProjects.forEach((project) => {
    project.classList.remove("visible");
    project.classList.remove("display-none");
  });
  pinnedProjectsList.classList.add("pinnedProjects");
  pinnedProjectsList.classList.remove("sortedProjects");
  sortHtmlButton.classList.remove("active");
  sortAllButton.classList.add("active");
  sortCssButton.classList.remove("active");
  sortJsButton.classList.remove("active");
  sortBstpButton.classList.remove("active");
});

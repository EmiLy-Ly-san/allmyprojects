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
  pinnedProjectsList.classList.remove("pinnedProjects");
  pinnedProjectsList.classList.add("sortedProjects");
  const newsortedProjectArray = Array.from(typeOfProjectsSelector);
  setTimeout(function () {
    newsortedProjectArray.forEach((project) => {
      project.classList.remove("display-none");
    });
  }, 100);
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
  console.log({ cssSortArray: newsortedProjectArray });
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

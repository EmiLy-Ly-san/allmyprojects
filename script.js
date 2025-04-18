const sortAllButton = document.querySelector(".sortAllButton");

const sortHtmlButton = document.querySelector(".sortHtmlButton");
const myButton = document.querySelector(".button");
const sortCssButton = document.querySelector(".sortCssButton");
const sortJsButton = document.querySelector(".sortJsButton");
const sortBstpButton = document.querySelector(".sortBstpButton");
const sortReactButton = document.querySelector(".sortReactButton");
const sortExpressButton = document.querySelector(".sortExpressButton");
const sortApolloButton = document.querySelector(".sortApolloButton");
const allSentences = document.querySelectorAll(".sentence");
const pinnedProjectsList = document.querySelector("#projectsGridContainer");
const allProjects = document.querySelectorAll(".project");
const allProjectsAndSentences = document.querySelectorAll("article");

let htmlProjects = document.querySelectorAll(".htmlProject");
let cssProjects = document.querySelectorAll(".cssProject");
let jsProjects = document.querySelectorAll(".jsProject");
let bstProjects = document.querySelectorAll(".bootstrapProject");
let reactProjects = document.querySelectorAll(".reactProjects");
let expressProjects = document.querySelectorAll(".expressProjects");
let apolloProjects = document.querySelectorAll(".apolloProjects");
console.log({ apolloProjects });

/*SORT BY HTML PROJECTS*/
sortHtmlButton.addEventListener("click", () => {
  allProjects.forEach((project) => {
    project.classList.add("display-none");
  });
  allSentences.forEach((sentence) => {
    sentence.classList.add("display-none");
  });
  pinnedProjectsList.classList.remove("pinnedProjects");
  pinnedProjectsList.classList.add("sortedProjects");
  const newsortedProjectArray = Array.from(htmlProjects);
  newsortedProjectArray.forEach((project) => {
    setTimeout(function () {
      project.classList.remove("display-none");
    }, 20);
  });
  sortHtmlButton.classList.add("active");
  sortAllButton.classList.remove("active");
  sortCssButton.classList.remove("active");
  sortJsButton.classList.remove("active");
  sortBstpButton.classList.remove("active");
  sortReactButton.classList.remove("active");
  sortExpressButton.classList.remove("active");
  sortApolloButton.classList.remove("active");
});

/*SORT BY ALL PROJECTS*/
sortAllButton.addEventListener("click", () => {
  allSentences.forEach((sentence) => {
    sentence.classList.remove("display-none");
  });
  allProjects.forEach((project) => {
    project.classList.remove("display-none");
  });
  pinnedProjectsList.classList.add("pinnedProjects");
  pinnedProjectsList.classList.remove("sortedProjects");
  sortHtmlButton.classList.remove("active");
  sortAllButton.classList.add("active");
  sortCssButton.classList.remove("active");
  sortJsButton.classList.remove("active");
  sortBstpButton.classList.remove("active");
  sortReactButton.classList.remove("active");
  sortExpressButton.classList.remove("active");
  sortApolloButton.classList.remove("active");
});

/*SORT BY CSS PROJECTS*/
sortCssButton.addEventListener("click", () => {
  allSentences.forEach((sentence) => {
    sentence.classList.add("display-none");
  });
  allProjects.forEach((project) => {
    project.classList.add("display-none");
  });
  pinnedProjectsList.classList.remove("pinnedProjects");
  pinnedProjectsList.classList.add("sortedProjects");
  const newsortedProjectArray = Array.from(cssProjects);
  newsortedProjectArray.forEach((project) => {
    setTimeout(function () {
      project.classList.remove("display-none");
    }, 20);
  });
  console.log({ cssSortArray: newsortedProjectArray });
  sortHtmlButton.classList.remove("active");
  sortAllButton.classList.remove("active");
  sortCssButton.classList.add("active");
  sortJsButton.classList.remove("active");
  sortBstpButton.classList.remove("active");
  sortReactButton.classList.remove("active");
  sortExpressButton.classList.remove("active");
  sortApolloButton.classList.remove("active");
});

/*SORT BY JS PROJECTS*/
sortJsButton.addEventListener("click", () => {
  allSentences.forEach((sentence) => {
    sentence.classList.add("display-none");
  });
  allProjects.forEach((project) => {
    project.classList.add("display-none");
  });
  pinnedProjectsList.classList.remove("pinnedProjects");
  pinnedProjectsList.classList.add("sortedProjects");
  const newsortedProjectArray = Array.from(jsProjects);
  newsortedProjectArray.forEach((project) => {
    setTimeout(function () {
      project.classList.remove("display-none");
    }, 20);
  });
  sortHtmlButton.classList.remove("active");
  sortAllButton.classList.remove("active");
  sortCssButton.classList.remove("active");
  sortJsButton.classList.add("active");
  sortBstpButton.classList.remove("active");
  sortReactButton.classList.remove("active");
  sortExpressButton.classList.remove("active");
  sortApolloButton.classList.remove("active");
});

/*SORT BY BOOTSTRAP PROJECTS*/
sortBstpButton.addEventListener("click", () => {
  allSentences.forEach((sentence) => {
    sentence.classList.add("display-none");
  });
  allProjects.forEach((project) => {
    project.classList.add("display-none");
  });
  pinnedProjectsList.classList.remove("pinnedProjects");
  pinnedProjectsList.classList.add("sortedProjects");
  const newsortedProjectArray = Array.from(bstProjects);
  newsortedProjectArray.forEach((project) => {
    setTimeout(function () {
      project.classList.remove("display-none");
    }, 20);
  });
  sortHtmlButton.classList.remove("active");
  sortAllButton.classList.remove("active");
  sortCssButton.classList.remove("active");
  sortJsButton.classList.remove("active");
  sortBstpButton.classList.add("active");
  sortReactButton.classList.remove("active");
  sortExpressButton.classList.remove("active");
  sortApolloButton.classList.remove("active");
});

/*SORT BY REACT PROJECTS*/
sortReactButton.addEventListener("click", () => {
  allSentences.forEach((sentence) => {
    sentence.classList.add("display-none");
  });
  allProjects.forEach((project) => {
    project.classList.add("display-none");
  });
  pinnedProjectsList.classList.remove("pinnedProjects");
  pinnedProjectsList.classList.add("sortedProjects");
  const newsortedProjectArray = Array.from(reactProjects);
  console.log({ reactProjects });
  console.log({ newsortedProjectArray });
  newsortedProjectArray.forEach((project) => {
    setTimeout(function () {
      project.classList.remove("display-none");
    }, 20);
  });
  sortHtmlButton.classList.remove("active");
  sortAllButton.classList.remove("active");
  sortCssButton.classList.remove("active");
  sortJsButton.classList.remove("active");
  sortBstpButton.classList.remove("active");
  sortApolloButton.classList.remove("active");
  sortReactButton.classList.add("active");
  sortExpressButton.classList.remove("active");
});

/*SORT BY EXPRESS PROJECTS*/
sortExpressButton.addEventListener("click", () => {
  allSentences.forEach((sentence) => {
    sentence.classList.add("display-none");
  });
  allProjects.forEach((project) => {
    project.classList.add("display-none");
  });
  pinnedProjectsList.classList.remove("pinnedProjects");
  pinnedProjectsList.classList.add("sortedProjects");
  const newsortedProjectArray = Array.from(expressProjects);
  console.log({ expressProjects });
  console.log({ newsortedProjectArray });
  newsortedProjectArray.forEach((project) => {
    setTimeout(function () {
      project.classList.remove("display-none");
    }, 20);
  });
  sortHtmlButton.classList.remove("active");
  sortAllButton.classList.remove("active");
  sortCssButton.classList.remove("active");
  sortJsButton.classList.remove("active");
  sortBstpButton.classList.remove("active");
  sortReactButton.classList.remove("active");
  sortApolloButton.classList.remove("active");
  sortExpressButton.classList.add("active");
});

/*SORT BY APOLLO PROJECTS*/
sortApolloButton.addEventListener("click", () => {
  allSentences.forEach((sentence) => {
    sentence.classList.add("display-none");
  });
  allProjects.forEach((project) => {
    project.classList.add("display-none");
  });
  pinnedProjectsList.classList.remove("pinnedProjects");
  pinnedProjectsList.classList.add("sortedProjects");
  const newsortedProjectArray = Array.from(apolloProjects);
  console.log({ apolloProjects });
  console.log({ newsortedProjectArray });
  newsortedProjectArray.forEach((project) => {
    setTimeout(function () {
      project.classList.remove("display-none");
    }, 20);
  });
  sortHtmlButton.classList.remove("active");
  sortAllButton.classList.remove("active");
  sortCssButton.classList.remove("active");
  sortJsButton.classList.remove("active");
  sortBstpButton.classList.remove("active");
  sortReactButton.classList.remove("active");
  sortExpressButton.classList.remove("active");
  sortApolloButton.classList.add("active");
});

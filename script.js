const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

const list = document.querySelectorAll(".nav-list > li");
list.forEach((element) => {
  element.addEventListener("click", () => {
    navbar.classList.toggle("change");
  });
});

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("change");
});



const allProjects = document.querySelector('.project');
const popup = document.querySelector(".popup-project"); 

const projects = [
  {
    projectId: 'projectOne',
    name: 'Printing Data One',
    description: 'A daily selection of privately personalized reads; no accounts or '
      + 'sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 'projectTwo',
    name: 'Printing Data Two',
    description: 'A daily selection of privately personalized reads; no accounts or'
      + 'sign-ups required. has been the industry\'s standard ',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 'projectThree',
    name: 'Printing Data Three',
    description: 'A daily selection of privately personalized reads; no accounts or '
      + 'sign-ups required. has been the industry\'s standard  ',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 'projectFour',
    name: 'Printing Data Four',
    description: 'A daily selection of privately personalized reads; no accounts or'
      + 'sign-ups required. has been the industry\'s standard ',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 'projectFive',
    name: 'Printing Data Five',
    description: 'A daily selection of privately personalized reads; no accounts or '
      + 'sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 'projectFive',
    name: 'Printing Data Six',
    description: 'A daily selection of privately personalized reads; no accounts or '
      + 'sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
]

  function createProject(project) {
    const techItem = `
    <li>
    <section class="section3 section-cards empty-card">
    <div id="post-container">
    <img class="image" src="${project.featuredImage}" alt="portfolio"/>
    </div>
    <div class="section-paragraph">
    <h4 class=" section3-heading">${project.name}</h4>
    <ul class="skills">
    </ul>
    <p class="section3-paragraph">
    ${project.description}
    </p>
    <ul class="section3-items ">
    ${project.technologies.map((tech) => `<li class="section3-item1 section3-item2 section3-item3">${tech}</li>`).join('')}
    </ul>
    <button class="section3__project" id="${project.projectId}">See Project</button>
    </div>
    </section>
    </li>
    `;
    return techItem;
  } 

    for (let i = 0; i < projects.length; i += 1) {
      const project = createProject(projects[i]);
      allProjects.innerHTML += project;
      } 


  function model(project) {
    const popupProject = `
    <section class="post-section">
    <div class="toggleX">x</div>
    <div class="post-container">
    <img class="image sm" src="${project.featuredImage}" alt="portfolio" />
    </div>
    <h4 class="title-color">${project.name}</h4>
    <ul class="skills">
    </ul>
    <p class="text">
    ${project.description}
    </p>
    <ul class="tags" id="tags">
    ${project.technologies.map((tech) => `<li class="tag">${tech}</li>`).join('')}
    </ul>
    </div>
    </div>
    </section>`
    popup.innerHTML = popupProject;
  }

    for (let i = 0; i < projects.length; i += 1) {
      const project = document.querySelector(`#${projects[i].projectId}`);
      project.addEventListener('click', () => {
      model(projects[i]);
      }); 
    } 

    const togglex = document.querySelector('.toggleX')
    togglex.addEventListener('click', () => { 
      model('');
    });

    // const togglex = document.querySelector('.toggleX')
    // togglex.addEventListener('click', () => {
    //   model('');
    // });






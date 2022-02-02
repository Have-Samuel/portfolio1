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
    name: 'Proffesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or '
      + 'sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 'projectTwo',
    name: 'Proffesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or'
      + 'sign-ups required. has been the industry\'s standard ',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 'projectThree',
    name: 'Proffesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or '
      + 'sign-ups required. has been the industry\'s standard  ',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 'projectFour',
    name: 'Proffesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or'
      + 'sign-ups required. has been the industry\'s standard ',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://have-samuel.github.io/portfolio1/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 'projectFive',
    name: 'Proffesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or '
      + 'sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
  {
    projectId: 'projectFive',
    name: 'Proffesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or '
      + 'sign-ups required. has been the industry\'s standard',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'Bootstrap', 'Ruby'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/Have-Samuel/portfolio1/tree/popup-menu',
  },
]

  function createProject(project) {
    const techItem = `
    <li>
    <section class="post-section">
    <div class="post-container">
    <img class="image sm" src="${project.featuredImage}" alt="portfolio" />
    </div>
    <h4 class="title">${project.name}</h4>
    <ul class="skills">
    </ul>
    <p class="text">
    ${project.description}
    </p>
    <ul class="tags" id="tags">
    ${project.technologies.map((tech) => `<li class="tag">${tech}</li>`).join('')}
    </ul>
    <button class="btn-project" id="${project.projectId}">See Project</button>
    </div>
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
    <h4 class="title">${project.name}</h4>
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

    toggleX.addEventListener('click', () => { 
      model();
    }
    
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


const projects = [
  {
    projectId: 'projectOne',
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum has been the industry\'s '
      + 'standard dummy text ever since the 1500s, when an unknown printer '
      + 'took a galley of type and scrambled it to make a type specimen book. '
      + 'It has survived not only five centuries, but also the leap into electronic '
      + 'typesetting, remaining essent',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
  },
  {
    projectId: 'projectTwo',
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum has been the industry\'s '
      + 'standard dummy text ever since the 1500s, when an unknown printer '
      + 'took a galley of type and scrambled it to make a type specimen book. '
      + 'It has survived not only five centuries, but also the leap into electronic '
      + 'typesetting, remaining essent',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
  },
  {
    projectId: 'projectThree',
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum has been the industry\'s '
      + 'standard dummy text ever since the 1500s, when an unknown printer '
      + 'took a galley of type and scrambled it to make a type specimen book. '
      + 'It has survived not only five centuries, but also the leap into electronic '
      + 'typesetting, remaining essent',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
  },
  {
    projectId: 'projectFour',
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum has been the industry\'s '
      + 'standard dummy text ever since the 1500s, when an unknown printer '
      + 'took a galley of type and scrambled it to make a type specimen book. '
      + 'It has survived not only five centuries, but also the leap into electronic '
      + 'typesetting, remaining essent',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
  },
  {
    projectId: 'projectFive',
    name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum has been the industry\'s '
      + 'standard dummy text ever since the 1500s, when an unknown printer '
      + 'took a galley of type and scrambled it to make a type specimen book. '
      + 'It has survived not only five centuries, but also the leap into electronic '
      + 'typesetting, remaining essent',
    featuredImage: 'images/Background.png',
    technologies: ['html', 'css', 'javascript'],
    liveLink: 'https://olawale-o.github.io/portfolio-mobile-version/',
    sourceLink: 'https://github.com/olawale-o/portfolio-mobile-version',
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
      }

      for (let i = 0; i < projects.length; i += 1) {
        const project = document.querySelector(`#${projects[i].projectId}`);
        project.addEventListener('click', () => {
        model(projects[i]);
        }); 
      } 










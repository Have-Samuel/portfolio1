const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

const list = document.querySelectorAll('.nav-list > li');
list.forEach((element) => {
  element.addEventListener('click', () => {
    navbar.classList.toggle('change');
  });
});

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

const allProjects = document.querySelector('.project');
// const popup = document.querySelector('.popup-project');

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
  }
];

const arrClassName = ['project1', 'project2', 'project3', 'project4', 'project5', 'project6'];

  function createProject(project, name) {
  const techItem = `
  <div class='${name}'>
      <section class='section3 section-cards empty-card'>
      <div id='post-container'>
      <img class='image' src='${project.featuredImage}' alt='portfolio'/>
      </div>
    <div class='section-paragraph'>
      <h4 class='section3-heading'>${project.name}</h4>
        <ul class='skills'></ul>
    <p class='section3-paragraph'>
      ${project.description}
    </p>
    <ul class='section3-items'>
  ${project.technologies
    .map(
      (tech) => `<li class='section3-item1 section3-item2 section3-item3'>${tech}</li>`)
    .join('')}
  </ul>
  <button class=section3__project1' onclick='model('.${name}')' id='${
    project.projectId
  }'>See Project</button>
  </div>
  </section>
  </div>
  `;
    return techItem;
  }; 

  for (let i = 0; i < 6; i += 1) {
    allProjects.innerHTML += createProject(projects[0], arrClassName[i]);
};

function model(name) {
  const languages = ['html', 'Bootstrap', 'Ruby on Rails'];
  const parentDiv = document.createElement('div');
  parentDiv.className = 'parent-div';
  const section = document.createElement('section');
  section.className = 'popup-section';
  const modalDiv = document.createElement('div');
  modalDiv.className = 'popup-modal';
  const multiStories = document.createElement('div');
  multiStories.className = 'multi-stories';
  const icon = document.createElement('i');
  icon.className = 'fa fa-times times';
  const title = document.createElement('h2');
  title.innerHTML = 'Multi Post Stories';
  multiStories.append(title, icon);

  const technologies = document.createElement('div');
  technologies.className = 'popup-lanuguages';
  const ul = document.createElement('ul');
  ul.className = 'popup-items';
  technologies.appendChild(ul);
  
  for (let i = 0; i < languages.length; i += 1){
    const li = document.createElement('li');
    li.clasName = 'popup-item';
    li.innerHTML = languages[i];
    ul.appendChild(li);
  }

  const popupImageContainer = document.createElement('div');
  const projectImage = document.createElement('img');
  popupImageContainer.className = 'popup-paraimg';
  projectImage.className = 'popup-image';
  const description = document.createElement('p');
  
  projectImage.src = 'popup-images/Snapshoot Portfolio.png';
  description.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos maiores quo libero perferendis delectus dolore quisquam alias a sit accusantium dignissimos dolorem';
  popupImageContainer.append(projectImage, description);
  const buttonList = document.createElement('ul');
  buttonList.className = 'modal-btn';
  const buttonName = ['See live', 'See source'];
  const imageSource = ['fas fa-external-link-alt', 'fab fa-github'];

  for (let i = 0; i < buttonName.length; i += 1) {
    const li = document.createElement('li');
    const image = document.createElement('span');
    const button = document.createElement('button');
    const icon1 = document.createElement('i');
    icon1.className = imageSource[i];
    button.className = 'project-button';
    image.className = 'modal-icon';
    image.appendChild(icon1);
    
    button.append(buttonName[i], image );
    li.appendChild(button);
    buttonList.appendChild(li);
  };

  icon.addEventListener('click', () => {
    parentDiv.classList.toggle('togglePopup');
  });
  
  modalDiv.append(multiStories, technologies, popupImageContainer, buttonList);
  section.appendChild(modalDiv);
  parentDiv.appendChild(section);
  const popupContainer = document.querySelector(name);
  popupContainer.appendChild(parentDiv);
}
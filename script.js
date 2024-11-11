const navigationSection = {
  title: "About",
  coloredTitle: "Me",
  links: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contacts" },
  ],
};

const heroSection = {
  greeting: "Hello, Welcome",
  name: "I'm Carl Madrigal",
  bio: "I'm an aspiring developer, passionate about creating solutions through code. I'm building my skills and portfolio to contribute to impactful projects and grow in the tech world.",
  image: "hero.png",
};

const aboutSection = {
  title: "About",
  coloredTitle: "Me",
  paragraphs: [
    "I'm an aspiring developer focused on building a portfolio and refining my problem-solving skills. My goal is to contribute to impactful tech projects while expanding my knowledge in software development.",
    "I learn independently through online courses and personal projects. In my free time, I enjoy gaming, movies, and exploring new tech trends.",
  ],
  image: "about.png",
};

const skillsSection = {
  title: "My",
  coloredTitle: "Skills",
  intro:
    "Building Expertise in Programming Languages Used Throughout My Learning Journey",
  skills: [
    {
      name: "HTML & CSS",
      images: [{ src: "html.svg" }, { src: "css.svg" }],
      description:
        "Core web technologies I started learning in my second year of college, gaining skills in creating structured, responsive designs.",
    },
    {
      name: "JavaScript",
      image: "javascript.svg",
      description:
        "Introduced in my third year of college, where I learned to add interactivity and dynamic functionality to web applications.",
    },
    {
      name: "PHP",
      image: "php.svg",
      description:
        "Started learning in my second year of college, focusing on server-side scripting to build dynamic and interactive websites.",
    },
  ],
};

const projectsSection = {
  title: "My",
  coloredTitle: "Projects",
  intro:
    "Here are some of the projects I’ve worked on over the years, applying the skills I’ve gained through my coursework and personal learning.",
  projects: [
    {
      name: "PCC-Alabkarbawan (Admin Side)",
      image: "PCC.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ipsum dicta tempore incidunt pariatur fugiat voluptates? Natus illo deserunt fuga placeat nesciunt id, dolorum modi nulla ad, aspernatur assumenda aliquid?",
    },
    {
      name: "World's Hardest Game",
      image: "World's Hardest Game.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ipsum dicta tempore incidunt pariatur fugiat voluptates? Natus illo deserunt fuga placeat nesciunt id, dolorum modi nulla ad, aspernatur assumenda aliquid?",
    },
    {
      name: "PharmArshie",
      image: "PharmArshie.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ipsum dicta tempore incidunt pariatur fugiat voluptates? Natus illo deserunt fuga placeat nesciunt id, dolorum modi nulla ad, aspernatur assumenda aliquid?",
    },
  ],
};

const contactsSection = {
  title: "Contact",
  coloredTitle: "Me",
  intro:
    "Feel free to reach out using the form below for inquiries, feedback, or collaboration. I’ll respond as soon as possible!",
  contactInfo: [
    { name: "Address_", info: "Brgy. Dili, Gasan, Marinduque" },
    { name: "Phone_", info: "+63-963-178-7140" },
    { name: "Email_", info: "carlsalido.madrigal@gmail.com" },
  ],
};

const footerSection = {
  developedBy: "Carl S. Madrigal / BSI/T - 3D",
  socialLinks: [
    { href: "#", image: "twitter.svg" },
    { href: "#", image: "facebook.svg" },
    { href: "#", image: "instagram.svg" },
    { href: "#", image: "youtube.svg" },
  ],
};

const startBtn = document.getElementById("startBtn");

startBtn.onclick = function () {
  startBtn.style.display = "none";
  showNavigation();
};

function showNavigation() {
  const navigation = document.getElementById("navigation");
  navigation.style.display = "flex";

  const title = document.createElement("h2");
  title.className = "navigation-title";
  title.innerHTML = `${navigationSection.title}<span>${navigationSection.coloredTitle}</span>.`;

  const links = document.createElement("div");
  links.className = "navigation-links";

  navigation.appendChild(title);
  navigation.appendChild(links);

  nav = document.querySelector(".navigation-links");

  addLink(0);
  showHero();
}

function addLink(index) {
  const navigation = document.getElementById("navigation");
  const links = document.querySelector(".navigation-links");

  const link = document.createElement("a");
  link.href = navigationSection.links[index].href;
  link.textContent = navigationSection.links[index].name;

  nav.appendChild(link);

  navigation.appendChild(links);
}

function showHero() {
  const header = document.getElementById("hero");
  header.style.display = "flex";

  header.innerHTML = `
      <div class="detail">
          <p class="ycolor">${heroSection.greeting}</p>
          <h1>${heroSection.name}</h1>
          <p class="bcolor">${heroSection.bio}</p>
          <button id="showAboutMe" class="button-anim">Learn More</button>
      </div>
      <img src="images/${heroSection.image}" alt="${heroSection.image}">
  `;
  const showAbout = document.getElementById("showAboutMe");

  showAbout.onclick = function () {
    if (showAbout.textContent == "Learn More") {
      location.href = "#about";
      showAbout.textContent = "Contact us";
      addLink(1);
      showAboutMe();
    }
  };
}

function showAboutMe() {
  const about = document.getElementById("about");
  about.style.display = "flex";

  about.innerHTML = `
      <img src="images/${aboutSection.image}" alt="${aboutSection.image}">
      <div class="detail">
          <h1 class="title">${aboutSection.title} <span>${aboutSection.coloredTitle}</span></h1>
          <p class="gcolor">${aboutSection.paragraphs[0]}\n\n
              ${aboutSection.paragraphs[1]}</p>
          <button id="showSkills" class="button-anim">Show Skills</button>
      </div>
  `;
  const showSkill = document.getElementById("showSkills");
  showSkill.onclick = function () {
    if (showSkill.textContent == "Show Skills") {
      location.href = "#skills";
      showSkill.textContent = "Contact us";
      addLink(2);
      showSkills();
    }
  };
}

function showSkills() {
  const skill = document.getElementById("skills");
  skill.style.display = "flex";

  skill.innerHTML = `
      <div class="skill-intro">
          <h1 class="title">${skillsSection.title} <span>${skillsSection.coloredTitle}</span></h1>
          <p class="gcolor">${skillsSection.intro}</p>
      </div>
          
      <div class="skill-container"></div>
  `;

  const container = document.querySelector(".skill-container");

  skillsSection.skills.forEach((element) => {
    const skillCard = document.createElement("div");
    skillCard.className = "skill-card";

    const imageContainer = document.createElement("div");
    imageContainer.className = "d-image";

    if (Array.isArray(element.images)) {
      element.images.forEach((img) => {
        const image = document.createElement("img");
        image.src = `svg/${img.src}`;
        image.alt = img.src;
        imageContainer.appendChild(image);
      });
    } else if (element.image) {
      const image = document.createElement("img");
      image.src = `svg/${element.image}`;
      image.alt = element.image;
      imageContainer.appendChild(image);
    }

    skillCard.appendChild(imageContainer);
    skillCard.innerHTML += `
          <h3>${element.name}</h3>
          <p class="gcolor">${element.description}</p>
      `;

    container.appendChild(skillCard);
  });
  // <button id="showProjects" class="button-anim">Show Projects</button>

  skill.innerHTML += `
      <div class="scroll-down-container">
          <a class="scroll-down-animation" id="showProjects">
              <div class="scroll-down-animation-box">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="50px">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="#EAB308">
                      </path>
                  </svg>
              </div>
              <span class="scroll-down-animation-text">Show Projects</span>
          </a>
      </div>
  `;
  const showProject = document.getElementById("showProjects");
  showProject.onclick = function () {
    showProject.href = "#projects";
    showProject.style.display = "none";
    addLink(3);
    showProjects();
  };
}

function showProjects() {
  const projects = document.getElementById("projects");
  projects.style.display = "flex";

  projects.innerHTML = `
      <div class="project-intro">
          <h1 class="title">${projectsSection.title} <span>${projectsSection.coloredTitle}</span></h1>
          <p class="lgcolor">${projectsSection.intro}</p>
      </div>
      <div class="project-container"></div>
  `;

  const container = document.querySelector(".project-container");
  projectsSection.projects.forEach((element) => {
    const div = document.createElement("div");
    div.className = "project-card";

    div.innerHTML = `
          <img src="images/${element.image}" alt="${element.image}">
          <div class="project-description">
              <h3>${element.name}</h3>
              <p class="gcolor">${element.description}</p>
          </div>
      `;

    container.appendChild(div);
  });

  container.innerHTML += `
      <div class="scroll-down-container">
          <a class="scroll-down-animation" id="showContact">
              <div class="scroll-down-animation-box">
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="50px">
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="#EAB308">
                      </path>
                  </svg>
              </div>
              <span class="scroll-down-animation-text">Show Contact</span>
          </a>
      </div>
  `;
  const showContact = document.getElementById("showContact");
  showContact.onclick = function () {
    showContact.href = "#contacts";
    showContact.style.display = "none";
    addLink(4);
    showContacts();
  };
}

function showContacts() {
  const contacts = document.getElementById("contacts");
  contacts.style.display = "flex";

  contacts.innerHTML = `
      <div class="contact-intro">
          <h1 class="title">${contactsSection.title} <span>${contactsSection.coloredTitle}</span></h1>
          <p class="lgcolor">${contactsSection.intro}</p>
      </div>

      <div class="contact-container">
      
      </div>
  `;

  const container = document.querySelector(".contact-container");

  const div = document.createElement("div");
  div.className = "contact-info";
  contactsSection.contactInfo.forEach((element) => {
    div.innerHTML += `
          <p class="dwhite"><span>${element.name}</span>${element.info}</p>
      `;
  });

  const form = document.createElement("div");
  form.className = "contact-form";
  form.innerHTML = `
      <input class="input-name" type="text" placeholder="Name">
      <textarea class="input-message" placeholder="Message..." id="message"></textarea>
      <button class="button-no-anim">Contact us</button>
  `;
  container.appendChild(div);
  container.appendChild(form);

  showFooter();
}

function showFooter() {
  const footer = document.getElementById("footer");
  footer.style.display = "flex";

  footer.innerHTML = `
      <p class="lgcolor">${footerSection.developedBy}</p>
      <div class="footer-link"></div>
  `;

  const links = document.querySelector(".footer-link");
  footerSection.socialLinks.forEach((element) => {
    const link = document.createElement("a");
    link.href = element.href;

    link.innerHTML = `
          <img src="svg/${element.image}" alt="${element.image}">
      `;

    links.appendChild(link);
  });
}

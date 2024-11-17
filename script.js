const navigationSection = {
  title: "About",
  coloredTitle: "Me",
  links: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contacts" }
  ]
};

const heroSection = {
  greeting: "Hello, Welcome",
  name: "I'm Carl Madrigal",
  bio: "I'm an aspiring developer, passionate about creating solutions through code. I'm building my skills and portfolio to contribute to impactful projects and grow in the tech world.",
  image: "hero.png"
};

const aboutSection = {
  title: "About",
  coloredTitle: "Me",
  paragraphs: [
    "I'm an aspiring developer focused on building a portfolio and refining my problem-solving skills. My goal is to contribute to impactful tech projects while expanding my knowledge in software development.",
    "I learn independently through online courses and personal projects. In my free time, I enjoy gaming, movies, and exploring new tech trends."
  ],
  image: "about.png"
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
        "Core web technologies I started learning in my second year of college, gaining skills in creating structured, responsive designs."
    },
    {
      name: "JavaScript",
      image: "javascript.svg",
      description:
        "Introduced in my third year of college, where I learned to add interactivity and dynamic functionality to web applications."
    },
    {
      name: "PHP",
      image: "php.svg",
      description:
        "Started learning in my second year of college, focusing on server-side scripting to build dynamic and interactive websites."
    }
  ]
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
        "PCC-Alabkarbawan (Admin Side) is a second-year college project developed using Laravel with PHP, HTML, CSS, and basic JavaScript. I handled backend development, while Dave Geroleo worked on the frontend."
    },
    {
      name: "World's Hardest Game",
      image: "World's Hardest Game.png",
      description:
        "Project World's Hardest is a college project inspired by World's Hardest Game and Snubby Land, featuring a unique game style. Developed in C# using Unity, it showcases creative gameplay and custom design."
    },
    {
      name: "PharmArshie",
      image: "PharmArshie.png",
      description:
        "PharmArshie is a project built with HTML and CSS, featuring a responsive design. It was also developed as a hybrid app, embedding the web version within it for seamless functionality."
    },
    {
      name: "Recipe Page",
      image: "Recipe Page.png",
      description:
        "Recipe Page is an activity completed this year aimed at enhancing HTML and CSS skills. It involved creating a visually appealing and functional webpage that displays recipes, focusing on responsive design and effective styling techniques."
    },
    {
      name: "Landing Page",
      image: "Landing Page Activity.png",
      description:
        "Landing Page is an activity completed this year to enhance HTML and CSS skills. It focused on creating a responsive layout, showcasing effective design principles for modern web pages."
    },
    {
      name: "My Portfolio",
      image: "My Portfolio.png",
      description:
        "Portfolio is a project created during the 1st semester this year for Web Programming 1. Built with HTML, CSS, and JavaScript, it features dynamic rendering to showcase skills and projects in an interactive layout."
    }
  ]
};

const contactsSection = {
  title: "Contact",
  coloredTitle: "Me",
  intro:
    "Feel free to reach out using the form below for inquiries, feedback, or collaboration. I’ll respond as soon as possible!",
  contactInfo: [
    { name: "Address_", info: "Brgy. Dili, Gasan, Marinduque" },
    { name: "Phone_", info: "+63-963-178-7140" },
    { name: "Email_", info: "carlsalido.madrigal@gmail.com" }
  ]
};

const footerSection = {
  developedBy: "Carl S. Madrigal / BSI/T - 3D",
  socialLinks: [
    { href: "https://x.com/Madrigal_Carl_", image: "twitter.svg" },
    { href: "https://web.facebook.com/profile.php?id=100087942037457", image: "facebook.svg" },
    { href: "https://www.instagram.com/carl_madrigal.01/?hl=en", image: "instagram.svg" },
    { href: "https://www.youtube.com/@CarlMadrigal", image: "youtube.svg" }
  ]
};


// Start
const startBtn = document.getElementById("startBtn");
let count = 0;

startBtn.onclick = function () {
  startBtn.style.display = "none";
  showNavigation();
};


// Navigation and Hero Section
function showNavigation() {
  const navigation = document.getElementById("navigation");
  navigation.style.display = "block";

  const title = document.createElement("h2");
  title.id = "navTitle";
  title.className="color-b cursor";
  title.innerHTML = `${navigationSection.title}<span id="navSpan" class="default-span">${navigationSection.coloredTitle}</span>.`;

  const links = document.createElement("div");
  links.id = "navi-links";

  navigation.appendChild(title);
  navigation.appendChild(links);

  addLink(0);
  showHero();
}

function addLink(index) {
  const navigation = document.getElementById("navigation");
  const links = document.getElementById("navi-links");

  const link = document.createElement("a");
  link.className = "rightToLeft-anim";
  link.href = navigationSection.links[index].href;
  link.textContent = navigationSection.links[index].name;

  links.appendChild(link);

  navigation.appendChild(links);
}

function showHero() {
  const header = document.getElementById("hero");
  header.style.display = "block";

  header.innerHTML = `
    <div id="heroDetailContainer">
        <p id="heroGreeting">${heroSection.greeting}</p>
        <h1 class="color-b" id="heroName">${heroSection.name}</h1>
        <p id="heroDescription">${heroSection.bio}</p>
        <button id="showAboutMe">Learn More</button>
    </div>
    <img class="downToUp-anim" src="images/${heroSection.image}" alt="${heroSection.image}">
`;
  const showAbout = document.getElementById("showAboutMe");
  showAbout.onclick = function () {
    location.href = "#about";
    if (count == 0) {
      addLink(1);
      showAboutMe();
      count++;
    }
  };
}


// About Me Section
function showAboutMe() {
  //Styles changes
  const navTitle = document.getElementById("navTitle");
  navTitle.className = "navigation-title color-b cursor";
  const navSpan = document.getElementById("navSpan");
  navSpan.className = "";
  const naviLinks = document.getElementById("navi-links");
  naviLinks.className = "navigation-links color-b";
  const heroDetailContainer = document.getElementById("heroDetailContainer");
  heroDetailContainer.className = "detail leftToRight-anim";
  const heroGreeting = document.getElementById("heroGreeting");
  heroGreeting.className = "ycolor";
  const heroName = document.getElementById("heroName");
  heroName.className = "color-b";
  const heroDescription = document.getElementById("heroDescription");
  heroDescription.className = "bcolor";

  const about = document.getElementById("about");
  about.style.display = "block";

  about.innerHTML = `
    <img class="leftToRight-anim" src="images/${aboutSection.image}" alt="${aboutSection.image}">
    <div class=" detail rightToLeft-anim">
        <h1 id="aboutTitle" class="title color-b">${aboutSection.title} <span>${aboutSection.coloredTitle}</span></h1>
        <p class="gcolor">${aboutSection.paragraphs[0]}\n\n
            ${aboutSection.paragraphs[1]}</p>
        <button id="showSkills">Learn More</button>
    </div>
`;
  const showSkill = document.getElementById("showSkills");
  showSkill.onclick = function () {
    location.href = "#skills";
    if (count == 1) {
      addLink(2);
      showSkills();
      count++;
    }
  };
}

function showSkills() {
  //Change styles
  const navigation = document.getElementById("navigation");
  const header = document.getElementById("hero");
  const about = document.getElementById("about");
  navigation.classList.add("d-background");
  header.classList.add("l-background");
  about.classList.add("d-background");

  const naviLinks = document.getElementById("navi-links");
  naviLinks.classList.remove("color-b");
  naviLinks.classList.add("no-underline");
  const navTitle = document.getElementById("navTitle");
  navTitle.classList.add("color-w");
  const heroName = document.getElementById("heroName");
  heroName.className = "color-w";
  const aboutTitle = document.getElementById("aboutTitle");
  aboutTitle.classList.remove("color-b");
  
  const aboutBtn = document.getElementById("showAboutMe");
  aboutBtn.className = "button-style cursor";
  const skillBtn = document.getElementById("showSkills");
  skillBtn.className = "button-style cursor";

  const skill = document.getElementById("skills");
  skill.style.display = "block";
  skill.classList.add("l-background");

  skill.innerHTML = `
    <div class="skill-intro leftToRight-anim">
        <h1 class="title">${skillsSection.title} <span>${skillsSection.coloredTitle}</span></h1>
        <p class="gcolor">${skillsSection.intro}</p>
    </div>
        
    <div class="skill-container"></div>
  `;

  const container = document.querySelector(".skill-container");

  skillsSection.skills.forEach((element) => {
    const skillCard = document.createElement("div");
    skillCard.className = "skill-card downToUp-anim";

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

  skill.innerHTML += `
    <div class="scroll-down-container">
        <a class="scroll-down-animation" id="showProjects">
            <div class="a-center" id="arrowProject">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="50px">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="#EAB308">
                    </path>
                </svg>
                <span id="textLayout&Hover-remove">Improve Layout & Add Hover</span>
            </div>
        </a>
    </div>
  `;
  const showProject = document.getElementById("showProjects");
  showProject.onclick = function () {
    showProject.href = "#projects";
    if (count == 2) {
      addLink(3);
      showProjects();
      count++;
    }
  };
}

function showProjects() {
  //Change styles
  const navigation = document.getElementById("navigation");
  navigation.style.display = "flex";
  const header = document.getElementById("hero");
  header.style.display = "flex";
  const about = document.getElementById("about");
  about.style.display = "flex";
  const skill = document.getElementById("skills");
  skill.style.display = "flex";
  const text = document.getElementById("textLayout&Hover-remove");
  text.style.display = "none";

  const links = document.getElementById("navi-links");
  links.classList.add("nav-animation");

 document.querySelectorAll(".skill-card").forEach((skillCard) => {
  skillCard.classList.add("skill-card-hover");
});
  const aboutBtn = document.getElementById("showAboutMe");
  aboutBtn.classList.add("button-anim");
  const skillBtn = document.getElementById("showSkills");
  skillBtn.classList.add("button-anim");

  const projects = document.getElementById("projects");
  projects.style.display = "flex";
  projects.classList.add("d-background");

  projects.innerHTML = `
    <div class="project-intro downToUp-anim">
        <h1 class="title">${projectsSection.title} <span>${projectsSection.coloredTitle}</span></h1>
        <p class="lgcolor">${projectsSection.intro}</p>
    </div>
    <div class="project-container"></div>
`;

  const container = document.querySelector(".project-container");
  projectsSection.projects.forEach((element) => {
    const div = document.createElement("div");
    div.className = "project-card cursor downToUp-anim";

    div.innerHTML = `
        <div class="card">
            <img src="images/${element.image}" alt="${element.image}">
            <div class="card_content">
                <p class="card_title">${element.name}</p>
                <p class="card_description">${element.description}</p>
            </div>
        </div>
    `;

    container.appendChild(div);
  });

  projects.innerHTML += `
    <div class="scroll-down-container">
        <a class="scroll-down-animation" id="showContact">
            <div class="a-center" id="arrowContact">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="50px">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.9997 13.1716L7.04996 8.22186L5.63574 9.63607L11.9997 16L18.3637 9.63607L16.9495 8.22186L11.9997 13.1716Z" fill="#EAB308">
                    </path>
                </svg>
                <span id="textAnimation-remove">Add Animation</span>
            </div>
        </a>
    </div>
`;
  const showContact = document.getElementById("showContact");
  showContact.onclick = function () {
    showContact.href = "#contacts";
    if (count == 3) {
      addLink(4);
      showContacts();
      count++;
    }
  };
}


function showContacts() { 
  const text = document.getElementById("textAnimation-remove");
  text.style.display = "none";
  const proj = document.getElementById("arrowProject");
  proj.classList.add("animated-arrow");
  const contact = document.getElementById("arrowContact");
  contact.classList.add("animated-arrow");

  document.querySelectorAll(".leftToRight-anim").forEach((about) => {
    about.classList.add("left-right-animation");
  });

  document.querySelectorAll(".rightToLeft-anim").forEach((about) => {
    about.classList.add("right-left-animation");
  });

  document.querySelectorAll(".downToUp-anim").forEach((about) => {
    about.classList.add("down-up-animation");
  });

  const contacts = document.getElementById("contacts");
  contacts.style.display = "flex";

  contacts.innerHTML = `
    <div class="contact-intro left-right-animation">
        <h1 class="title">${contactsSection.title} <span>${contactsSection.coloredTitle}</span></h1>
        <p class="lgcolor">${contactsSection.intro}</p>
    </div>

    <div class="contact-container">
    
    </div>
`;

  const container = document.querySelector(".contact-container");

  const div = document.createElement("div");
  div.className = "contact-info left-right-animation";
  contactsSection.contactInfo.forEach((element) => {
    div.innerHTML += `
        <p class="dwhite"><span>${element.name}</span>${element.info}</p>
    `;
  });

  const form = document.createElement("div");
  form.className = "contact-form right-left-animation";
  form.innerHTML = `
    <input class="input-name" type="text" placeholder="Name">
    <textarea class="input-message" placeholder="Message..." id="message"></textarea>
    <button class="button-style button-anim cursor">Contact us</button>
`;
  container.appendChild(div);
  container.appendChild(form);

  observeLeftToRightElements();
  observeRightToLeftElements();
  observeDownToUpElements();

  showFooter();
}

function showFooter() {
  const footer = document.getElementById("footer");
  footer.style.display = "flex";
  footer.classList.add("d-background");

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




const duobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("down-to-up-animate");
    } else {
      entry.target.classList.remove("down-to-up-animate");
    }
  });
});

function observeDownToUpElements() {
  const downToUpElements = document.querySelectorAll(".down-up-animation");
  downToUpElements.forEach((el) => duobserver.observe(el));
}

const lrobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("left-to-right-animate");
    } else {
      entry.target.classList.remove("left-to-right-animate");
    }
  });
});

function observeLeftToRightElements() {
  const leftToRightElements = document.querySelectorAll(".left-right-animation");
  leftToRightElements.forEach((el) => lrobserver.observe(el));
}

const rlobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("right-to-left-animate");
    } else {
      entry.target.classList.remove("right-to-left-animate");
    }
  });
});

function observeRightToLeftElements() {
  const rightToLeftElements = document.querySelectorAll(".right-left-animation");
  rightToLeftElements.forEach((el) => rlobserver.observe(el));
}

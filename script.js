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
        "PCC-Alabkarbawan is a second-year college project developed using Laravel with PHP, HTML, CSS, and basic JavaScript. I handled backend development."
    },
    {
      name: "World's Hardest Game",
      image: "Worlds Hardest Game.png",
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
    { href: "https://x.com/Madrigal_Carl_", image: `<svg fill="#1F2937" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="-143 145 512 512" xml:space="preserve">
<path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M215.2,361.2c0.1,2.2,0.1,4.5,0.1,6.8c0,69.5-52.9,149.7-149.7,149.7c-29.7,0-57.4-8.7-80.6-23.6c4.1,0.5,8.3,0.7,12.6,0.7
	c24.6,0,47.3-8.4,65.3-22.5c-23-0.4-42.5-15.6-49.1-36.5c3.2,0.6,6.5,0.9,9.9,0.9c4.8,0,9.5-0.6,13.9-1.9
	C13.5,430-4.6,408.7-4.6,383.2v-0.6c7.1,3.9,15.2,6.3,23.8,6.6c-14.1-9.4-23.4-25.6-23.4-43.8c0-9.6,2.6-18.7,7.1-26.5
	c26,31.9,64.7,52.8,108.4,55c-0.9-3.8-1.4-7.8-1.4-12c0-29,23.6-52.6,52.6-52.6c15.1,0,28.8,6.4,38.4,16.6
	c12-2.4,23.2-6.7,33.4-12.8c-3.9,12.3-12.3,22.6-23.1,29.1c10.6-1.3,20.8-4.1,30.2-8.3C234.4,344.5,225.5,353.7,215.2,361.2z"/>
</svg>` },
    { href: "https://web.facebook.com/profile.php?id=100087942037457", image: `<svg fill="#1F2937" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="-143 145 512 512" xml:space="preserve">
<path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
	 M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3
	c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"/>
</svg>` },
    { href: "https://www.instagram.com/carl_madrigal.01/?hl=en", image: `<svg fill="#1F2937" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="-143 145 512 512" xml:space="preserve">
<g>
	<path d="M113,446c24.8,0,45.1-20.2,45.1-45.1c0-9.8-3.2-18.9-8.5-26.3c-8.2-11.3-21.5-18.8-36.5-18.8s-28.3,7.4-36.5,18.8
		c-5.3,7.4-8.5,16.5-8.5,26.3C68,425.8,88.2,446,113,446z"/>
	<polygon points="211.4,345.9 211.4,308.1 211.4,302.5 205.8,302.5 168,302.6 168.2,346 	"/>
	<path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
		 M241,374.7v104.8c0,27.3-22.2,49.5-49.5,49.5h-157C7.2,529-15,506.8-15,479.5V374.7v-52.3c0-27.3,22.2-49.5,49.5-49.5h157
		c27.3,0,49.5,22.2,49.5,49.5V374.7z"/>
	<path d="M183,401c0,38.6-31.4,70-70,70c-38.6,0-70-31.4-70-70c0-9.3,1.9-18.2,5.2-26.3H10v104.8C10,493,21,504,34.5,504h157
		c13.5,0,24.5-11,24.5-24.5V374.7h-38.2C181.2,382.8,183,391.7,183,401z"/>
</g>
</svg>` },
    { href: "https://www.youtube.com/@CarlMadrigal", image: `<svg fill="#1F2937" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="-143 145 512 512" xml:space="preserve">
<g>
	<polygon points="78.9,450.3 162.7,401.1 78.9,351.9 	"/>
	<path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
		 M241,446.8L241,446.8c0,44.1-44.1,44.1-44.1,44.1H29.1c-44.1,0-44.1-44.1-44.1-44.1v-91.5c0-44.1,44.1-44.1,44.1-44.1h167.8
		c44.1,0,44.1,44.1,44.1,44.1V446.8z"/>
</g>
</svg>` }
  ]
};


// Start
const startBtn = document.getElementById("startBtn");
let count = 0;

startBtn.onclick = function () {
  startBtn.style.display = "none";
  showNavigation();
};

// Add Links
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


// Typing Animation
function typeText(texts) {
  const dynamicTextElement = document.getElementById("dynamicText");
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    dynamicTextElement.textContent = isDeleting
      ? currentText.substring(0, charIndex--)
      : currentText.substring(0, charIndex++);

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(type, typingSpeed);
  }

  type();
}


// Navigation Section
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

// Hero Section
function showHero() {
  const header = document.getElementById("hero");
  header.style.display = "block";

  header.innerHTML = `
    <div id="heroDetailContainer">
        <p id="heroGreeting">${heroSection.greeting}</p>
        <h1 class="color-b" id="heroName">I'm <span id="typing" class="default-span">Carl S. Madrigal</span></h1>
        <p id="heroDescription">${heroSection.bio}</p>
        <button id="showAboutMe">Change Text</button>
    </div>
    <img class="downToUp-anim" src="images/${heroSection.image}" alt="${heroSection.image}">
  `;

  const showAbout = document.getElementById("showAboutMe");
  showAbout.onclick = function () {
    location.href = "#about";
    if (showAbout.textContent == "Change Text") {
      showAbout.textContent = "Learn More";
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
  const heroSpanName = document.getElementById("typing");
  heroSpanName.className = "color-b";
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
        <button id="showSkills">Add Background</button>
    </div>
`;
  const showSkill = document.getElementById("showSkills");
  showSkill.onclick = function () {
    location.href = "#skills";
    if (showSkill.textContent == "Add Background") {
      showSkill.textContent = "Learn More";
      addLink(2);
      showSkills();
      count++;
    }
  };
}

// Skill Section
function showSkills() {
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
  const heroSpanName = document.getElementById("typing");
  heroSpanName.className = "color-w";
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
    skillCard.className = "skill-card staggerDownToUp-anim";

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
    div.className = "project-card cursor";

    div.innerHTML = `
        <div class="card popup downToUp-anim" onclick="fullView('images/${element.image}')">
            <img src="images/${element.image}" alt="${element.name}">
            <div class="card_content">
                <p class="card_title">${element.name}</p>
                <p class="card_description">${element.description}</p>
                <p class="card_description">Click to expand...</p>
            </div>
        </div>
    `;

    container.appendChild(div);
  });

  projects.innerHTML += `
        <div class="fullImageView" id="fullImageView">
          <img id="fullImage" src="">
        </div>
      `;

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

// PopUp image
function fullView(imageSrc) {
  const fullImageView = document.getElementById("fullImageView");
  const fullImage = document.getElementById("fullImage");

  fullImage.src = imageSrc;
  fullImageView.style.display = "flex";
  document.body.style.overflow = "hidden";

  fullImageView.onclick = () => {
    fullImageView.style.display = "none";
    document.body.style.overflow = "auto";
  };
}



// Contact Section
function showContacts() { 
  const text = document.getElementById("textAnimation-remove");
  text.style.display = "none";
  const proj = document.getElementById("arrowProject");
  proj.classList.add("animated-arrow");
  const contact = document.getElementById("arrowContact");
  contact.classList.add("animated-arrow");
  const heroName = document.getElementById("heroName");
  heroName.classList.add("align");
  const hero = document.getElementById("typing");
  hero.id = "dynamicText";
  hero.className = "typing";

  typeText(["Carl S. Madrigal", "Web Developer", "Software Developer"]);

  document.querySelectorAll(".leftToRight-anim").forEach((about) => {
    about.classList.add("left-right-animation");
  });

  document.querySelectorAll(".rightToLeft-anim").forEach((about) => {
    about.classList.add("right-left-animation");
  });

  document.querySelectorAll(".staggerDownToUp-anim").forEach((about) => {
    about.classList.add("stagger-down-up-animation");
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
  observeStaggerDownUpElements();

  showFooter();
}

// Footer Section
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
        ${element.image}
    `;

    links.appendChild(link);
  });
}

// Page Animation
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

const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("stagger-down-up-animate");
    } else {
      entry.target.classList.remove("stagger-down-up-animate");
    }
  });
});

function observeStaggerDownUpElements() {
  const staggerElements = document.querySelectorAll(".stagger-down-up-animation");
  
  staggerElements.forEach((el, index) => {
    el.setAttribute("data-stagger-index", index);
    staggerObserver.observe(el);
  });
}
import emoji from "react-easy-emoji";
import picture from "./healthkart.png";
import pictures from "./amazon.png";
import picturess from "./front.png";
import facebook from "./facebook.png";

export const greetings = {
  name: "Bhargav Katira",
  title: "Hi all, I'm Bhargav",
  description:
    "I am a Tech Enthusiast, good at adapting to new technologies. My interests include full-stack developments, problem-solving, writing quality code and system design. I am an effective communicator, problem-solver and an aspiring leader in the making.",
  resumeLink:
    "https://drive.google.com/file/d/1yU4UAf6fjuwM4KgFrXXDZMUxJ9oWN8ws/view?usp=sharing",
};

export const openSource = {
  githubUserName: "bhargavkatira",
};

export const contact = {};

export const socialLinks = {
  twitter: "https://twitter.com/katira_bhargav",
  github: "https://github.com/bhargavkatira",
  linkedin: "https://www.linkedin.com/in/bhargav-katira-a934a2153/",
  email: "mailto:bhargavkatira@gmail.com",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "○ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("○ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "○ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },

    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "Masai School",
    subHeader: "Full Stack Web Development",
    duration: "July 2021 - Feb 2022",
    desc: "learning MERN STACk AND BUILDING PROJECTS",
    descBullets: [
      "Built authentication and integrated it with the frontendt",
      "Developed the landing page and footer.",
      "Created a wish list for the users.",
    ],
  },
  {
    schoolName: "Amity University",
    subHeader: "Bachelor's Of Technology in Computer Science",
    duration: "August 2017 - June 2021",
    desc: "Participated in Major Events of Research",
    descBullets: [
      "I have studied basic software engineering subjects like DS, Algorithm, DBMS, OS, AI etc.",
      "Apart from this I have done courses as well as internship, learnt software development full stack development",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Google",
    companylogo: "/img/icons/common/google.svg",
    date: "June 2018 – Present",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    descBullets: [
      "Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    ],
  },
  {
    role: "Front-End Developer",
    company: "Github",
    companylogo: "/img/icons/common/github.svg",
    date: "May 2017 – May 2018",
    desc:
      "Lorem ipsum dolor sit amet, consefdctetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    role: "Software Engineer Intern",
    company: "Airbnb",
    companylogo: "/img/icons/common/airbnbLogo.png",
    date: "Jan 2015 – Sep 2015",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const projects = [
  {
    name: "HealthKart Clone",
    img: picture,
    desc: [
      "Built authentication and integrated it with the frontendt",
      "Developed the landing page and footer.",
      "Created a wish list for the users.",
    ],
    Tech: "Javascript | Node | LocalStorage",
    github: "https://github.com/bhargavkatira/construct-week1",
    link: "https://heawealthy.netlify.app/",
  },
  {
    name: "Amazon Prime",
    img: pictures,
    desc: [
      "Built the landing page and login Authentication.",
      "Created the payment page and integrated it with the frontend and backend.",
      "Developed the main page for Displaying the movies.",
    ],
    Tech: "Javascript | Node | LocalStorage",
    github: "https://github.com/bhargavkatira/construct-week2",
    link: "https://primeamazon.netlify.app/",
  },
  {
    name: "Frontend Masters",
    img: picturess,
    desc: [
      "Created the payment page and integrated it with the frontend and backend.",
      "Created the payment page and integrated it with the frontend and backend.",
    ],
    Tech: "Express | Node | EJS | MongoDB",
    github: "https://github.com/front-en.d-master",
    link: "https://frontend-masters.herokuapp.com",
  },
  {
    name: "Facebook Clone",
    img: facebook,
    desc: [
      "Created responsive UI and merging of the code with backend.",
      "User Authentication, login & signup, clean code.",
    ],
    Tech: "React | Mongo | Express",
    github: "https://github.com/front-en.d-master",
    link: "https://facebook-cloners.vercel.app/login",
  },
];

export const feedbacks = [
  {
    name: "Bhargav Katira",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
  },
  {
    name: "Maheen Altaf",
    feedback:
      "the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
  },
];

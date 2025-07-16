const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
//import {spaceapp} from '../mickykumar/assets/spaceapp'
// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Route for homepage
app.get('/', (req, res) => {
  const portfolioData = {
    name: 'Micky Kumar',
    title: 'Full Stack Network Engineer |',
    about: "Micky Kumar, an enthusiastic Software Engineer based in Toronto, Ontario, brings a blend of dedication, meticulous attention to detail, and strong organizational prowess to every project. With a passion for learning and growth, Micky consistently seeks opportunities to contribute to team success. With extensive experience, Micky has demonstrated expertise in a range of technical skills including proficiency in tools like Rebaca Abot and Spirent, analytical tools such as PowerBI and Tableau, and database management with MYSQL and Postgres. With a track record of successful project implementations and a commitment to continuous improvement,Micky Kumar stands as a dynamic and capable professional in the field of software engineering.",
    skills: [
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'Node.js', icon: 'fab fa-node-js' },
  { name: 'Express', icon: 'fas fa-server' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'MongoDB', icon: 'fas fa-database' },
  { name: 'CSS', icon: 'fab fa-css3-alt' },
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'Django', icon: 'fas fa-leaf' },          // no official Django icon in FontAwesome, leaf used
  { name: 'PostgreSQL', icon: 'fas fa-database' },  // reuse database icon
  { name: 'Docker', icon: 'fab fa-docker' },
  { name: 'AWS', icon: 'fab fa-aws' },              // note: fa-aws is in FontAwesome 6 pro, or you can use a custom icon
  { name: 'Azure', icon: 'fab fa-microsoft' }       // no official Azure icon, Microsoft icon used
],
experience: [
  {
    id: "magma",
    company: "Magma Core by Linux Foundation",
    role: "5G Core Developer",
    duration: "Feb 2025 – Present",
    buildingIconClass: "fas fa-building",
    logo: "/assets/magma.svg",
    description: "Built eNodeB, AGW, and contributed to Feg cloud-native orchestration using Magma."
  },
  {
    id: "kspace",
    company: "Krachi's Space Technologies",
    role: "Lead Engineer",
    duration: "Dec 2024 – Present",
    buildingIconClass: "fas fa-building",
    logo: "",
    description: ""
  },
  {
    id: "veltris-1",
    company: "Veltris",
    role: "Senior Software Engineer",
    duration: "2019 – 2022",
    buildingIconClass: "fas fa-building",
    logo: " ",
    description: [
      "• Successfully deployed Magma Core AGW on Ubuntu, resulting in a 20% reduction in network latency and a 15% increase in overall system efficiency.",
      "• Demonstrated expert-level knowledge of 3GPP specifications, actively contributing to the development of 5G standards and protocols.",
      "• Proficiently utilized Abot, Spirent, and other testing tools, leading to a 30% improvement in testing efficiency and a 10% reduction in testing-related errors.",
      "• Spearheaded projects related to 4G and 5G technologies, resulting in the on-time delivery of three major initiatives that exceeded performance and functionality benchmarks.",
      "• Mentored and trained interns in 4G, 5G, and 3GPP standards, with 100% of trainees reporting increased proficiency and contributing to project success.",
      "• Took charge of daily scrum calls, ensuring cross-functional team alignment and driving an average 20% increase in project velocity.",
      "• Played a critical role in the design of project requirements and testing plans, resulting in a 25% decrease in post-launch issues and a 10% reduction in project delivery timelines."
    ]
  }
],

projects: [
  {
    name: "Space App",
    description: "A responsive weather forecast app using OpenWeatherMap API.",
    image: "/images/weather-app.png",
    link: "https://example.com/weather",
    skills: [
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" }
    ],
    tags: ["Backend", "API", "Responsive"],
    Associated: [{ name: "Kspace" }]
  },
    {
    name: "Kreative Hub App",
    description: "Connects creatives—photographers, artists, planners—for collaboration.",
    image: "/images/weather-app.png",
    link: "",
    skills: [
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" }
    ],
    tags: ["Backend", "API", "Responsive"],
    Associated: [{ name: "Kspace" }]
  },
    {
    name: "Fundme.ai",
    description: "AI-driven investor matchmaking platform for disruptive startups.",
    image: "/images/weather-app.png",
    link: "",
    skills: [
      { name: "Django", icon: "fab fa-square-binary" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" }
    ],
    tags: ["Frontend", "API", "Responsive"],
    Associated: [{ name: "Kspace" }]
  },
  {
    name: "Weather App",
    description: "A responsive weather forecast app using OpenWeatherMap API.",
    image: "/images/weather-app.png",
    link: "https://example.com/weather",
    skills: [
      { name: "HTML5", icon: "fab fa-html5" },
      { name: "CSS3", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js" }
    ],
    tags: ["Frontend", "API", "Responsive"],
    Associated: [] // <- safe fallback
  }
],

    contact: {
      email: 'micky@mickykumar.com',
      linkedin: 'https://linkedin.com/in/mickykumar',
      github: 'https://github.com/mickymkumar'
    }
  };

  res.render('index', { portfolioData });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

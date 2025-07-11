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
    about: "Hi! I’m Micky Kumar, a Software Engineer & Telecom Expert delivering scalable tech solutions for startups, enterprises, and network providers.",
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

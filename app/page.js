'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [showTools, setShowTools] = useState(false);

  const toggleView = () => {
    setShowTools(prev => !prev);
  };

  const skills = ["C", "Java", "Python", "JavaScript", "HTML", "CSS", "React", "Node.js", "Flask", "Next.js", "MongoDB", "MySQL", "Linux","Tailwind CSS","CNN models"];
  const tools = ["Git", "GitHub", "VS Code", "Figma", "Postman", "Thunder Client","Google colab","Jupyter"];

  const projects = [
    {
      id: 1,
      title: "Groot App",
      description: "A mobile and web application for detecting plant diseases and providing management solutions.",
      image: "Groot_1.png", 
      link: "https://github.com/Sudharshanab24/crop_disease_prediction.git",
      techStack: ["Flutter","React.js","Flask","MongoDB","FireBase","LLM","CNN Models"] 
    },
    {
      id: 2,
      title: "Job Quest",
      description: "A web platform that suggests jobs based on skills and preferences.",
      image: "job_quest.png",
      link: "https://github.com/Sudharshanab24/job_suggestions.git",
      techStack: ["HTML", "CSS", "Flask", "MySQL"] 
    },
    {
      id: 3,
      title: "News Agg",
      description: "A web platform that gathers and displays news from multiple sources in one place.",
      image: "news_agg.png",
      link: "https://github.com/Sudharshanab24/News_aggregator_full_stack.git",
      techStack: ["React.js", "Node.js", "Express", "MongoDB"] 
    },
    {
      id: 4,
      title: "White Board",
      description: "Real-time collaborative online whiteboard.",
      image: "WhiteBoard.png",
      link: "https://github.com/Sudharshanab24/WhiteBoard-with-WebSocket.git",
      techStack: ["HTML", "CSS", "WebSockets"] 
    },
    {
      id: 5,
      title: "Jokes API",
      description: "A simple platform to manage and view various jokes from others.",
      image: "Jokes.png",
      link: "https://github.com/Sudharshanab24/Jokes_API.git",
      techStack: ["React.js", "Node.js", "Express", "MongoDB"] 
    },
    {
      id: 6,
      title: "Machine Treatment",
      description: "A web platform to manage and view various treatments for a machine.",
      image: "machine_treatment.png",
      link: "https://github.com/Sudharshanab24/Machine-Treatment-app.git",
      techStack: ["React.js", "Node.js", "Express", "MongoDB"] 
    }
  ];

  const name = "Sudharshana Balusamy";

  return (
    

    <motion.div
      initial={{ opacity: 0, y: -50 }}  
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Home Section */}
      <motion.section
        id="home"
        className="flex flex-col items-center justify-center text-center min-h-screen"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold sm:text-6xl text-white">
          Hi, I'm{" "}
          {name.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="text-cyan-600"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, delay: index * 0.07 }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <p className="mt-4 text-lg text-white max-w-xl">
          I'm a passionate developer specializing in web development. I create modern and scalable web applications.
        </p>
        <a href="#projects" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          View My Work
        </a>
      </motion.section>

      {/* Projects Section */}
      <motion.section
  id="projects"
  className="py-20 text-white text-center mt-10"
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }}
>
  <h2 className="text-3xl font-bold sm:text-5xl mb-10">My Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
    {projects.map((project) => (
      <motion.div
        key={project.id}
        className="bg-gray-800 p-6 rounded-lg shadow-lg"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-4" />
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-gray-400">{project.description}</p>
        
       {/* Tech Stack */}
<div className="mt-3 text-gray-300 text-md hover:text-cyan-600 transition duration-300">
  {project.techStack.join(" | ")}
</div>


        <a href={project.link} className="text-blue-500 mt-4 inline-block">View Project</a>
      </motion.div>
    ))}
  </div>
</motion.section>

<motion.section
  id="skills-tools"
  className="py-20 bg-gray-900 flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16"
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }}
>
  {/* Left Side - Image */}
  <motion.div
  className="w-full md:w-1/2 flex items-center justify-center"
  animate={{
    x: [-10, 10, -10], // Moves left and right
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
  }}
  whileTap={{ scale: 0.9 }} // Shrinks when clicked
  whileHover={{ scale: 1.05 }} // Expands slightly when hovered
  whileFocus={{ scale: 1.1 }} // Expands more when focused (optional)
  style={{ willChange: "transform" }} // Optimized for smooth animation
>
  <img
    src="girly.png"
    alt="Profile"
    className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md"
    style={{
      width: "400px",
      height: "400px",
      imageRendering: "auto",
    }}
  />
</motion.div>





  {/* Right Side - Skills & Tools */}
  <motion.div 
    className="w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-gray-500"
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: false }}
  >
    <h2 className="text-3xl font-bold text-white mb-4">My Skills & Tools</h2>

    {/* Toggle Switch */}
    <div className="flex items-center justify-center mb-4">
      <span className={`text-white text-sm font-medium transition duration-300 ${showTools ? "opacity-50" : "opacity-100"}`}>
        Skills
      </span>
      <label htmlFor="toggle" className="relative flex items-center cursor-pointer mx-3">
        <input
          id="toggle"
          type="checkbox"
          className="sr-only peer"
          checked={showTools}
          onChange={toggleView}
        />
        <div className={`w-10 h-5 rounded-full flex items-center justify-between px-1 transition duration-300
          ${showTools ? "bg-blue-600" : "bg-gray-700"}`}>
        </div>
        <div
          className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 peer-checked:translate-x-5"
        ></div>
      </label>
      <span className={`text-white text-sm font-medium transition duration-300 ${showTools ? "opacity-100" : "opacity-50"}`}>
        Tools
      </span>
    </div>

    {/* Skills/Tools Grid */}
   {/* Skills/Tools Grid */}
<motion.div 
  className="max-w-md mx-auto p-4 border-2 border-gray-600 rounded-lg bg-gray-700 shadow-lg overflow-y-auto"
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: false }}
  style={{ minHeight: "300px", maxHeight: "300px" }} // Ensures consistent box height
>
  <div className="flex flex-wrap gap-2 justify-center">
    {(showTools ? tools : skills).map((item, index) => (
      <motion.div
        key={index}
        className="bg-gray-800 text-white flex items-center justify-center rounded-md shadow-md w-16 h-16"
        whileHover={{ scale: 1.1 }} // Only moves when hovered
        transition={{ duration: 0.3 }} // Smooth hover transition
      >
        <h3 className="text-xs font-semibold text-center">{item}</h3>
      </motion.div>
    ))}
  </div>
</motion.div>



  </motion.div>
</motion.section>

<motion.section
      className="flex items-center justify-center h-screen"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      {/* Left Side - Achievement Box (Write Content Directly Here) */}
      <motion.div
        className="w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-gray-500 text-white text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      >
        <h2 className="text-3xl font-bold mb-4">My Achievements</h2>
        <p className="text-lg leading-relaxed">
  • Finalist at **SIH'24** for developing an AI-driven crop disease prediction and management system<br />
  • Winner of **HACKBUZZ'24**, a 24-hour hackathon, for developing a Job Suggestion Portal. <br />
  • Secured **3rd place** for a project presentation on an AI-driven crop disease detection app. <br />
  • Participated in **KEC HACKATHON'25**, a 30-hour hackathon, and developed a Virtual Agronomist. <br />
  • Presented a research paper on **Anti-HIV treatment using nanorobots** at **GCT, Coimbatore**. <br />
</p>

      </motion.div>

      {/* Right Side - Trophy with Fireworks */}
      <div className="w-1/2 flex justify-center relative">
        {/* Fireworks Animation - Placed Higher */}
        <motion.div
          className="absolute -top-28"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 2] }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
        </motion.div>

        {/* Trophy - Static and Bigger */}
        <img
          src="3ebdd15e67d74a01cc71050dca09dd6b.png"
          alt="Trophy"
          className="w-60 h-60" // Increased size
        />
      </div>
    </motion.section>
      
    </motion.div>
 
  );
}
 
import { useState } from "react";
import "./Skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiJavascript1, DiJava } from "react-icons/di";
import { SiPhp, SiC, SiReact, SiNodedotjs, SiExpress, SiDjango, SiPython, SiMysql, SiMongodb, SiGit, SiMicrosoftword, SiMicrosoftexcel, SiMicrosoftpowerpoint } from "react-icons/si";
import { FaBrain, FaChalkboardTeacher } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "./SkillCard/SkillCard";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Skills = () => {
  const categories = [
    {
      name: "Programming",
      skills: [
        { name: "Python", icon: <SiPython /> },
        { name: "JavaScript", icon: <DiJavascript1 /> },
        { name: "C Programming", icon: <SiC /> },
        { name: "Java", icon: <DiJava /> },
        { name: "PHP", icon: <SiPhp /> },
      ],
    },
    {
      name: "Development",
      skills: [
        { name: "HTML5", icon: <AiFillHtml5 /> },
        { name: "CSS3", icon: <DiCss3 /> },
        { name: "NodeJS", icon: <SiNodedotjs /> },
      ],
    },
    {
      name: "Framework",
      skills: [
        { name: "ReactJS", icon: <SiReact /> },
        { name: "Express", icon: <SiExpress /> },
        { name: "Django", icon: <SiDjango /> },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
      ],
    },
    {
      name: "Additional",
      skills: [
        { name: "Machine Learning", icon: <FaBrain /> },
        { name: "Artificial Intelligence", icon: <FaBrain /> },
        { name: "Git", icon: <SiGit /> },
        { name: "MS Word", icon: <SiMicrosoftword /> },
        { name: "Excel", icon: <SiMicrosoftexcel /> },
        { name: "PowerPoint", icon: <SiMicrosoftpowerpoint /> },
      ],
    },
    {
      name: "Soft Skills",
      skills: [
        { name: "Communication", icon: <FaChalkboardTeacher /> },
        { name: "Teamwork", icon: <FaChalkboardTeacher /> },
        { name: "Documentation", icon: <FaChalkboardTeacher /> },
        { name: "Management", icon: <FaChalkboardTeacher /> },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <section id="skills" className="skills-container">
      <h5>Technical Skills</h5>

      <h6 className="category-name">{selectedCategory}</h6>

      <div className="skills-content">
        <div className="skills">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className={`skill-category ${selectedCategory === category.name ? "active" : ""}`}
              onClick={() => handleCategoryClick(category.name)}
              whileHover={{ scale: 1.1 }}
            >
              {category.name && <i className="fa-solid fa-angles-right"></i>}
              {category.name}
            </motion.div>
          ))}
        </div>
        <div className="skills-info">
          <AnimatePresence>
            {selectedCategory &&
              categories
                .find((category) => category.name === selectedCategory)
                .skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SkillCard name={skill.name} icon={skill.icon} />
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;

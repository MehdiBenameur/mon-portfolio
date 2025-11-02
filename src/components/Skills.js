import React from 'react';
import { FaJava, FaPython, FaJs, FaDatabase, FaCodeBranch } from 'react-icons/fa';
import { SiSpringboot, SiReact, SiAngular, SiNodedotjs, SiMongodb, SiMysql, SiGit } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCodeBranch />,
      skills: [
        { name: "Java", icon: <FaJava />, level: 90 },
        { name: "Python", icon: <FaPython />, level: 85 },
        { name: "JavaScript", icon: <FaJs />, level: 88 },
        { name: "TypeScript", icon: <FaJs />, level: 80 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <SiReact />,
      skills: [
        { name: "React", icon: <SiReact />, level: 85 },
        { name: "Node.js", icon: <SiNodedotjs />, level: 82 },
        { name: "Angular", icon: <SiAngular />, level: 78 },
        { name: "Spring Boot", icon: <SiSpringboot />, level: 80 }
      ]
    },
    {
      title: "Databases & Tools",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "MySQL", icon: <SiMysql />, level: 80 },
        { name: "SQL Server", icon: <FaDatabase />, level: 75 },
        { name: "Git", icon: <SiGit />, level: 88 }
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{background: 'var(--bg)'}}>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category slide-in-right">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <div className="skill-icon">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .skill-category {
          background: var(--card-bg);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 5px 20px var(--shadow);
          opacity: 0;
          transform: translateX(50px);
        }

        .skill-category.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          color: var(--primary);
        }

        .category-icon {
          color: var(--secondary);
          font-size: 1.5rem;
        }

        .category-header h3 {
          margin: 0;
          font-size: 1.3rem;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .skill-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .skill-name {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--text);
        }

        .skill-icon {
          color: var(--secondary);
        }

        .skill-percent {
          color: var(--text-light);
          font-size: 0.9rem;
          font-weight: 600;
        }

        .skill-bar {
          height: 6px;
          background: var(--light);
          border-radius: 3px;
          overflow: hidden;
        }

        .skill-progress {
          height: 100%;
          background: var(--secondary);
          border-radius: 3px;
          transition: width 1.5s ease-in-out;
        }

        @media (max-width: 768px) {
          .skills-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
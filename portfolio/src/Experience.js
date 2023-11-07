// Experience.js
import React from "react";
import "./Experience.css";

const Experience = () => {
  const items = [
    {
      title: "Java",
      description: "Developing backends",
      points: [
        "Teaching core Java concepts",
        "Developing Java-based projects",
        "Exploring Java frameworks",
      ],
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png",
    },
    {
      title: "AWS",
      description: "Cloud computing and web services provider.",
      points: [
        "Managing AWS resources",
        "Creating scalable cloud applications",
        "AWS certification",
      ],
      image:
        "https://pbs.twimg.com/profile_images/1641476962362302464/K8lb6OtN_400x400.jpg",
    },
    {
      title: "Flutter",

      description: "Creating cross-platform mobile applications with Flutter.",
      points: [
        "Flutter widgets and layouts",
        "Integration with Firebase",
        "App deployment",
      ],
      image:
        "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
    },
    {
      title: "Web Development",
     
      description: "Building websites using HTML, CSS, React and JavaScript.",
      points: [
        "Responsive web design",
        "Front-end frameworks",
        "E-commerce websites",
      ],
      image:
        "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_html_icon_130541.png",
    },
    {
      title: "AutoIT with Selenium",
    
      description: "Automating tasks using AutoIT and Selenium.",
      points: [
        "Creating automation scripts",
        "Testing web applications",
        "Streamlining repetitive tasks",
      ],
      image:
        "https://static-00.iconduck.com/assets.00/autoit-icon-1024x1024-aaz35wse.png",
    },
  ];

  return (
    <div className="experience">
      <h1 className="header">My Experiences</h1>
      <div className="work-items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.image} alt={`${item.title} logo`} className="logo" />
            <div className="item-content">
              <div className="item-header">
                <h2 className="no-margin">{item.title}</h2>
                <h4 className="no-margin">{item.company}</h4>
                <p className="no-margin text-muted">{item.date}</p>
              </div>
              <p className="no-margin">{item.description}</p>
              <ul className="points">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

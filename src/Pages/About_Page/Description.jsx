import { FaLaptopCode, FaChartLine, FaPuzzlePiece, FaUserTie } from "react-icons/fa";

function WhatIDo() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      desc: "I build, create, and maintain websites. Tailored to meet your business goals and attract your ideal audience.",
    },
    {
      icon: <FaChartLine />,
      title: "Data Analysis / Cyber Analysis",
      desc: "I build, create, and maintain websites. Tailored to meet your business goals and attract your ideal audience.",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Integrated Services",
      desc: "I integrate third-party systems and APIs to ensure seamless communication between your tools, application and platforms.",
    },
    {
      icon: <FaUserTie />,
      title: "Freelance Developer",
      desc: "As a freelance developer, I take on versatile projects delivering tailored, scalable, and professional-grade solutions.",
    },
  ];

  return (
    <div className="what-i-do-container">
      <h5>What I Do</h5>
      {services.map((item, index) => (
        <div key={index} className="what-i-do-card">
          <div className="icon">{item.icon}</div>
          <div className="text-content">
            <h3>{item.title}</h3>
            <p className="desc" data-fulltext={item.desc}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhatIDo;

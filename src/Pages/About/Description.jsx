import { FaLaptopCode, FaChartLine, FaPuzzlePiece, FaShieldAlt } from "react-icons/fa";

function WhatIDo() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      desc: "I design, build, and maintain web applications that are efficient, user-friendly, and tailored to solve real-world problems.",
    },
    {
      icon: <FaChartLine />,
      title: "Data Analysis",
      desc: "I transform raw data into actionable insights, helping businesses make informed decisions and uncover hidden opportunities.",
    },
    {
    icon: <FaShieldAlt />,
    title: "CyberSecurity",
    desc: "I implement strategies and tools to protect systems, data, and users from digital threats, ensuring safety and reliability.",
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Integrated Services",
      desc: "I connect third-party systems and APIs to ensure smooth, seamless communication between your applications, tools, and platforms.",
    },
  ];

  return (
    <div className="what-i-do-container">
      <div className="what-i-do-cards">
        {services.map((item, index) => (
          <div key={index} className="what-i-do-card">
            <div className="icon">{item.icon}</div>
            <div className="text-content">
              <h3>{item.title}</h3>
              <p className="desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatIDo;

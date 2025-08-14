import Contribution from "./Contribution_Button";
import DownloadCv from "./Download_Button";
import SkillImage from "./SkillImage";
import Stat_bar from "./Stats_Bar";
import WhatIDo from "./Description";

function Profile({ setActivePage }) {
  return (
    <>
      <div className="about-content-card">
        <div className="card-header">
          <h1>About Me</h1>
        </div>
        <div className="card-content">
          I’m a software developer, data analyst, and cybersecurity enthusiast with a knack for building scalable,
           efficient, and user-friendly solutions. I specialize in web development,
            data analysis, and creating intelligent applications that make a real impact.
             My goal is to develop software that not only works seamlessly but also solves real-world problems and enhances user experiences.
          <div className="button-stack">
            <div className="button-downloadcv">
              <DownloadCv />
            </div>
            <div className="button-contribution">
              <Contribution />
            </div>
          </div>
          
          <SkillImage />
          <div className="Stats">
            {/* Pass setActivePage prop down to Stat_bar */}
            <Stat_bar setActivePage={setActivePage} />
          </div>
        </div>
      </div>

      <WhatIDo />
    </>
  );
}

export default Profile;

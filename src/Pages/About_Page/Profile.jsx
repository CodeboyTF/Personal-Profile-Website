import Contribution from "./Contribution_Button";
import DownloadCv from "./Download_Button";
import Stat_bar from "./Stats_Bar";

// import Contribution from "Pages/About_Page/Contribution_Button.jsx";

function Profile() {
  return (
    <>
      <div className="about-content-card">
        <div className="card-header">
          <h1>About Me</h1>
        </div>
        <div className="card-content">
          I am Tebogo Makharamedzha, a software developer passionate about
          building modern and efficient web applications...
          <div className="button-stack">
            <div className="button-downloadcv">
              <DownloadCv />
            </div>
            <div className="button-contribution">
              <Contribution />
            </div>
          </div>
          <div className="Stats">
            <Stat_bar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

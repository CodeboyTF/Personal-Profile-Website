import Contribution from "./Contribution_Button";
import DownloadCv from "./Download_Button";

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
              <Contribution />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

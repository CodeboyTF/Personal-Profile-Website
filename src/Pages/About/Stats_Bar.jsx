import { FaProjectDiagram } from "react-icons/fa";
import { GiDiploma } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { FaLink } from "react-icons/fa";

function Stat_bar({ setActivePage }) {
  return (
    <div className="stats-container-card">
      <div
        className="stats-bar-item"
        onClick={() => setActivePage("Education")}
      >
        <div className="stats-row">
          <FaProjectDiagram className="stats-icon" />
          <p className="stat-number">6</p>
        </div>
        <h4 className="stat-title">Total Projects</h4>
        <h5 className="stat-label">Total Built Projects</h5>
        <FaLink className="link-icon" />
      </div>

      <div
        className="stats-bar-item"
        onClick={() => setActivePage("Certificates")}
      >
        <div className="stats-row">
          <GiDiploma className="stats-icon" />
          <p className="stat-number">9</p>
        </div>
        <h4 className="stat-title">Certificates</h4>
        <h5 className="stat-label">Professional Skills Validated</h5>
        <FaLink className="link-icon" />
      </div>

      <div
        className="stats-bar-item"
        onClick={() => setActivePage("Experience")}
      >
        <div className="stats-row">
          <MdWork className="stats-icon" />
          <p className="stat-number">1½</p>
        </div>
        <h4 className="stat-title">Experience</h4>
        <h5 className="stat-label">Years of Experience</h5>
        <FaLink className="link-icon" />
      </div>
    </div>
  );
}

export default Stat_bar;

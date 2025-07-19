import Lottie from "lottie-react";
import emailicon from "../animations_icons/email.json";
import phoneicon from "../animations_icons/phone.json";
import calendaricon from "../animations_icons/calendar.json";
import locationIcon from "../animations_icons/location.json";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane} from "react-icons/fa";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ_CnG3wTGxiWrxWDGWbzGH1y_4_Pyes_Uvw&s"
          alt="Profile"
          className="profile-img"
        />

        <div className="about-info">
          <h1 className="role-text">
            Fhatuwani <br />
            <span>Makharamedzha</span>
          </h1>
          <h5 className="about-text">
            <span>Software Developer</span>
            <p className="about-text">Data Analysis | Pentesting</p>
          </h5>

          {/* Email */}
          <div className="lottie-icon">
            <Lottie
              animationData={emailicon}
              loop={true}
              style={{ width: 30, height: 30 }}
            />
            <span>FhatuMakhara@gmail.com</span>
          </div>

          {/* Phone */}
          <div className="lottie-icon">
            <Lottie
              animationData={phoneicon}
              loop={true}
              style={{ width: 30, height: 30 }}
            />
            <span>+27 68 552 8943</span>
          </div>

          {/* Birthdate (Calendar) */}
          <div className="lottie-icon">
            <Lottie
              animationData={calendaricon}
              loop={true}
              style={{ width: 30, height: 30 }}
            />
            <span>19 September 2001</span>
          </div>

          {/* Location */}
          <div className="lottie-icon">
            <Lottie
              animationData={locationIcon}
              loop={true}
              style={{ width: 30, height: 30 }}
            />
            <span>Pretoria, South Africa</span>
          </div>

          {/* Socials */}
          <div className="social-links">
            <a
              href="https://github.com/CodeboyTF"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/theboy_tf"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/fhatumakhara15/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://t.me/TFmakhara"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
            >
              <FaTelegramPlane />
            </a>
          </div>

          <p className="about-text">©Made by Gorrila Technology</p>
        </div>
      </div>
    </div>
  );
}

export default About;

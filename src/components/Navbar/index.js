import React from "react";
import useContentfulClient from "../../hooks/useContentfulClient";

import "./style.scss";

const TITLE = "Axel Niklasson";

const Navbar = ({ showNavbar }) => {
  const [headerImage, setHeaderImage] = React.useState("");
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [className, setClassName] = React.useState("navbar");
  const ref = React.createRef(null);
  const client = useContentfulClient();

  React.useEffect(() => {
    client
      .getEntries({
        content_type: "headerSection",
        limit: 1,
      })
      .then((data) => {
        const profilePicture =
          data.items[0].fields.profilePicture.fields.file.url;
        setHeaderImage(profilePicture);
      });
  }, []);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  function jump(id) {
    setShowDropdown(true);
    const el = document.getElementById(id);
    el.scrollIntoView();
    window.scrollBy(0, -ref.current.clientHeight);
  }

  React.useEffect(() => {
    const className = showNavbar ? "fadeIn" : "fadeOut";
    setClassName(`navbar ${className}`);
  }, [showNavbar]);

  const NavLink = ({ id, text }) => (
    <li>
      <a onClick={() => jump(id)}>{text}</a>
    </li>
  );

  return (
    <div className={className} ref={ref}>
      <div>
        <div>
          <img onClick={() => jump("header")} src={headerImage} alt="header" />
          <span className="hide-mobile">{TITLE}</span>
        </div>
        <div>
          <ul className={showDropdown ? "expanded" : ""}>
            <NavLink id="about" text="About" />
            <NavLink id="portfolio" text="Portfolio" />
            <NavLink id="experience" text="Experience" />
          </ul>

          <div
            className={showDropdown ? "menuIcon toggled" : "menuIcon"}
            onClick={toggleDropdown}
          >
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

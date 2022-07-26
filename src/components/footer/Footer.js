import React from "react";
import "./footer.css";
//footer that holds current year plus creators
function Footer(props) {
  const { year, creators } = props;
  return (
    <footer className="footer">
      <p>
        &copy; {year} {creators}
      </p>
    </footer>
  );
}

export default Footer;

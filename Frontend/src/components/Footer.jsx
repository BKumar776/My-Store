import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="div1">
        <h1>My Store</h1>
        <p>@all right reserved</p>
      </div>

      <div className="div2">
        <h5>Follow Us</h5>
        <div >
          <a href="https://youtube.com" target={"blank"}>
            Youtube
          </a>
          <a href="https://instagram.com" target={"blank"}>
            Instagram
          </a>
          <a href="https://github.com" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

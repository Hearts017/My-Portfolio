import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.facebook.com/jommelcarlos.toledo"
        className="home__social-icon"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i class="uil uil-facebook-f"></i>
      </a>

      <a
        href="https://github.com/Hearts017/Hearts017"
        className="home__social-icon"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/jommel-toledo/"
        className="home__social-icon"
        rel="noopener noreferrer"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
    </div>
  );
};

export default Social;

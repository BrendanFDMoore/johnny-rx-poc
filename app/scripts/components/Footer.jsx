import React from 'react';

const Footer = () => (
  <footer className="app__footer">
    <div className="app__container">
      <div className="app__footer__github">
        <iframe
          title="git-stars"
          src="https://ghbtns.com/github-btn.html?user=brendanfdmoore&repo=johnny-rx-poc&type=star&count=true"
          frameBorder="0"
          scrolling="0" width="110px" height="20px"
        />
        <iframe
          title="git-follow"
          src="https://ghbtns.com/github-btn.html?user=brendanfdmoore&type=follow&count=true"
          frameBorder="0"
          scrolling="0" width="200px" height="20px"
        />
      </div>
    </div>
  </footer>
);

export default Footer;

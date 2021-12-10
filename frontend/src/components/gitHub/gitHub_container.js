import React from 'react';
import './plugs.css';

class GitHubLinks extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="plugs">
        <h1>Presented to you by Team Culture</h1>

        <div className="the-gang">
          <div className="developers">
            <a href="https://github.com/hendricksimonr"><img src="https://disneycinema.s3.us-east-2.amazonaws.com/mern-gang/Hendrick.png" alt="" /></a>
            <h2>Hendrick Ramos</h2>
            <p><a href="https://github.com/hendricksimonr">Hendrick's GitHub</a></p>
          </div>
          <div className="developers">
            <a href="https://github.com/JD-Fermin"><img src="https://disneycinema.s3.us-east-2.amazonaws.com/mern-gang/Daniel.jpeg" alt=""/></a>
            <h2>Jan Daniel Fermin</h2>
            <p><a href="https://github.com/JD-Fermin">Daniel's GitHub</a></p>
          </div>
          <div className="developers">
            <a href="https://github.com/kenthiroi"><img src="https://disneycinema.s3.us-east-2.amazonaws.com/mern-gang/Kent.jpeg" alt=""/></a>
            <h2>Kent Hiroi</h2>
            <p><a href="https://github.com/kenthiroi">Kent's GitHub</a></p>
          </div>
          <div className="developers">
            <a href="https://github.com/jshin720">            <img src="https://disneycinema.s3.us-east-2.amazonaws.com/mern-gang/Jeff.jpeg" alt=""/></a>
            <h2>Jeff Shin</h2>
            <p><a href="https://github.com/jshin720">Jeff's GitHub</a></p>
          </div>
        </div>
          <div className="extra-links">
            <p id="giant-bomb-link">Powered by <a href="https://giantbomb.com"><span>Giant Bomb</span></a> API</p>
            <p id="repo-link">Visit the GameDart repo <a href="https://https://github.com/JD-Fermin/GameDart"><span>here</span></a></p>
          </div>
      </div>
    )
  }
}

export default GitHubLinks;
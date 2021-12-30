import React from 'react';
import './plugs.css';

class GitHubLinks extends React.Component {
  constructor(props) {
    super(props)
    this.visitSite = this.visitSite.bind(this);
  }

  visitSite(link) {
    return () => { 
      window.open(
        link, '_blank'
      )
    }
  }

  render() {
    return (
      <div className="plugs">
        <h1>Presented to you by</h1>

        <div className="the-gang">
          <div className="developers">
            <img className="developer-photo" onClick={this.visitSite("https://github.com/hendricksimonr")} src="https://disneycinema.s3.us-east-2.amazonaws.com/Hendrick+Headshot+(2).JPEG" alt="" />
            <h2>Hendrick Ramos</h2>
            <img onClick={this.visitSite("https://github.com/hendricksimonr")} src="https://disneycinema.s3.us-east-2.amazonaws.com/Hendrick+Headshot+(2).JPEG" alt="" />
            <p onClick={this.visitSite("https://github.com/hendricksimonr")}>Hendrick's GitHub</p>
            {/* <p onClick={this.visitSite("https://github.com/hendricksimonr")}>Hendrick's GitHub</p> */}
          </div>
          
          <div className="developers">
            <img className="developer-photo"  onClick={this.visitSite("https://github.com/JD-Fermin")} src="https://disneycinema.s3.us-east-2.amazonaws.com/mern-gang/Daniel.jpeg" alt="" />
            <h2>Jan Daniel Fermin</h2>
            <p onClick={this.visitSite("https://github.com/JD-Fermin")}>Daniel's GitHub</p>
          </div>

          <div className="developers">
            <img className="developer-photo"  onClick={this.visitSite("https://github.com/jshin720")} src="https://disneycinema.s3.us-east-2.amazonaws.com/mern-gang/Jeff.jpeg" alt="" />
            <h2>Jeff Shin</h2>
            <p onClick={this.visitSite("https://github.com/jshin720")}>Jeff's GitHub</p>
          </div>

          <div className="developers">
            <img className="developer-photo"  onClick={this.visitSite("https://github.com/kenthiroi")} src="https://disneycinema.s3.us-east-2.amazonaws.com/mern-gang/Kent.jpeg" alt="" />
            <h2>Kent Hiroi</h2>
            <p onClick={this.visitSite("https://github.com/kenthiroi")}>Kent's GitHub</p>
          </div>
        </div>

        <div className="extra-links">
          <p id="giant-bomb-link">Powered by <a onClick={this.visitSite("https://giantbomb.com")}><span>Giant Bomb</span></a> API</p>
          <p id="repo-link">Visit the GameDart repo <a onClick={this.visitSite("https://github.com/JD-Fermin/GameDart")}><span>here</span></a></p>
        </div>
      </div>
    )
  }
}

export default GitHubLinks;
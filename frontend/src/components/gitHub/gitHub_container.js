import React from 'react';
import './plugs.css';

class GitHubLinks extends React.Component {
  constructor(props) {
    super(props)
    this.visitSite = this.visitSite.bind(this);
  }

  componentDidMount(){
    document.body.style.backgroundImage = "url('https://i.imgur.com/OnQaUh5.jpg')";
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
            <div id="photo">
              <img className="developer-photo" onClick={this.visitSite("https://github.com/hendricksimonr")} src="https://i.imgur.com/Ii8khPJ.jpg" alt="" />
            </div>
            <h2>Hendrick Ramos</h2>
            <div className="website-links">
              <img id="github-img" onClick={this.visitSite("https://github.com/hendricksimonr")} src="https://i.imgur.com/Bj3ZPbm.png" alt="" />
              <img id="linkedin-img" onClick={this.visitSite("https://www.linkedin.com/in/hendrick-ramos-0743749a/")} src="https://i.imgur.com/uO5d91L.png" alt="" />
              <img id="website-img" onClick={this.visitSite("https://hendrickramos.com")} src="https://i.imgur.com/V1TQaje.png" alt="" />
            </div>
          </div>
          
          <div className="developers">
            <div id="photo">
              <img className="developer-photo" onClick={this.visitSite("https://github.com/JD-Fermin")} src="https://i.imgur.com/Vfr28HC.jpg" alt="" />
            </div>
            <h2>Jan Daniel Fermin</h2>
            <div className="website-links">
              <img id="github-img" onClick={this.visitSite("https://github.com/JD-Fermin")} src="https://i.imgur.com/Bj3ZPbm.png" alt="" />
              <img id="linkedin-img" onClick={this.visitSite("https://www.linkedin.com/in/jan-daniel-fermin-923418228/")} src="https://i.imgur.com/uO5d91L.png" alt="" />
              <img id="website-img" onClick={this.visitSite("https://jdfermin.netlify.app/")} src="https://i.imgur.com/V1TQaje.png" alt="" />
            </div>
          </div>

          <div className="developers">
            <div id="photo">
              <img className="developer-photo" onClick={this.visitSite("https://github.com/jshin720")} src="https://i.imgur.com/IR3xF6S.jpg" alt="" />
            </div>
            <h2>Jeff Shin</h2>
            <div className="website-links">
              <img id="github-img" onClick={this.visitSite("https://github.com/jshin720")} src="https://i.imgur.com/Bj3ZPbm.png" alt="" />
              <img id="linkedin-img" onClick={this.visitSite("https://www.linkedin.com/in/jeffrey-shin-901752228/")} src="https://i.imgur.com/uO5d91L.png" alt="" />
              <img id="website-img" onClick={this.visitSite("https://github.com/hendricksimonr")} src="https://i.imgur.com/V1TQaje.png" alt="" />
            </div>
          </div>

          <div className="developers">
            <div id="photo">
              <img className="developer-photo" onClick={this.visitSite("https://github.com/kenthiroi")} src="https://i.imgur.com/LfGJn74.jpg" alt="" />
            </div>
            <h2>Kent Hiroi</h2>
            <div className="website-links">
              <img id="github-img" onClick={this.visitSite("https://github.com/kenthiroi")} src="https://i.imgur.com/Bj3ZPbm.png" alt="" />
              <img id="linkedin-img" onClick={this.visitSite("https://www.linkedin.com/in/kent-hiroi-381880103/")} src="https://i.imgur.com/uO5d91L.png" alt="" />
              <img id="website-img" onClick={this.visitSite("https://github.com/hendricksimonr")} src="https://i.imgur.com/V1TQaje.png" alt="" />
            </div>
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
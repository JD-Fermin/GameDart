import React from "react";
import "./backlog.css"

class BackLog extends React.Component {
  constructor(props) {
    super(props)
    
    this.handlePlayed = this.handlePlayed.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  
  componentDidMount() {
    this.props.fetch(this.props.currentId);
  }

  handlePlayed(e){
    console.log("been played!")
  }

  handleRemove(gameId){
    const payload = {
      id: this.props.currentId,
      gameId: gameId
    }
    
      console.log(gameId)
      this.props.delete(payload)
  }


  render() {
    if (!this.props.user) {
      return null;
    }

    return (
      <div className="selected-games-container">
      <div className="backlog-container">
        <h1>My Playlist</h1>
        {this.props.user.backLogGames.length === 0 ? <div><h2>There are no games yet!</h2><img src="https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png" /></div> :  
        
          this.props.user.backLogGames.map((game, i) => {
            
            return (
              <div key={i} className="backlogGame-item"> 
                <div className="backlogGame-options">
                  <div className="backlogGame-title">{ game.name }</div>
                  <div className="backlogGame-buttons">
                    <button onClick={this.handlePlayed}>Game Played</button>
                    <button onClick={() => this.handleRemove(game.id)}>Remove Game</button>
                  </div>
                </div>
                <img src={game.image} />
              </div>
               
            )
          })
        }
      <div id="thats-exactly-right">thats exactly right</div>
      </div>
    </div>
    ) 
  }
}


export default BackLog;
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
      <div className="backlog-container">
        {
          this.props.user.backLogGames.map((game, i) => {
            
            return (
              <div key={i} className="backlogGame-item"> 
                <img src={game.image} />
                { game.name }
                <div>
                  <button onClick={this.handlePlayed}>Game Played</button>
                  <button onClick={() => this.handleRemove(game.id)}>Remove Game</button>
                </div>
              </div> 
            )
          })
        }
      </div>
    ) 
  }
}


export default BackLog;
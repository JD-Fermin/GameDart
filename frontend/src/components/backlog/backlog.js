import React from "react";
import "./backlog.css"

class BackLog extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    this.props.fetch(this.props.currentId);
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
                { game }
              </div> 
            )
          })
        }
      </div>
    ) 
  }
}


export default BackLog;
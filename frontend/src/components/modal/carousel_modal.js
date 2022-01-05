import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { userUpdate } from '../../actions/user_actions';
import { fetchUserInfo } from '../../actions/user_actions';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from 'react';
import { withRouter } from 'react-router';
import './carousel_modal.css';

const mapStateToProps = (state, ownProps) => {
  return {
    gameplay: state.game[ownProps.location.pathname.slice(7)].gameplay
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

class CarouselModal extends React.Component{
  constructor(props){
    super(props);
   
  }

  render(){
    let gameplay = [];
    for (let i = 0; i < this.props.gameplay.length; i++) {
      let gameImg = this.props.gameplay[i];

      if (gameImg === undefined) {
        break;
      }
      
      gameplay.push(gameImg.original);
    }

    return (
      <div id='carousel-modal'>
        <Carousel infiniteLoop={true} showThumbs={false}>
          {
            gameplay.map(gameImg => {
              return <div>
                <img src={gameImg} />
              </div>
            })
          }
        </Carousel>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarouselModal));